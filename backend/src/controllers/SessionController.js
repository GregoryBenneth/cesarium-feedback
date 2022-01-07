const connection = require("../database/connection");

module.exports={
    async create(request, response){
        try {
            const {email, password} = request.body;
            const user = await connection('users')
                .where('email', email)
                .andWhere('password', password)
                .select('id')
                .first()

            if(!user) {
                return response.status(400).json({error:'Email ou senha incorretos'})
            }
            return response.json(user)
        } catch (error){
            return response.json(error)
        }
    }

}