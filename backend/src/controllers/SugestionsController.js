const connection =require('../database/connection');

module.exports = {
        async index (request, response){
            const { page = 1 } = request.query;
            const [count] = await connection('sugestions')
            .count();
            const sugestions = await connection ('sugestions')
            .limit(5)
            .offset( (page -1 ) * 5)
            .select('*')
            
            response.header('X-Total-Count',count['count(*)'])
            return response.json(sugestions);
        },
        async create(request, response ){
        const { title, description, store_sector, name } = request.body;
        const user_id = request.headers.authorization

        const [id] = await connection('sugestions').insert({
            title,
            description,
            store_sector,
            name,
            user_id
        }); 
        return response.json({ id })  

    },
    async delete(request, response){
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const sugestions = await connection('sugestions')
        .where ('id', id)
        .select('user_id')
        .first();

        if (sugestions.user_id !== user_id) {
            return response.status(401).json({error:'Operation not permited.'});

        }
        await connection('sugestions').where('id', id).delete();
        return response.status(204).send();

    }

}