
import "./styles.css"
import { Link } from 'react-router-dom'
import Logoimg from '../../assets/cesarium.png'
import { FiArrowLeft } from 'react-icons/fi'
export default function NewSugestion (){
    return (
        <div className="new-sugestion-container">


        <div className="content">
            <section>
                <img src={Logoimg} width={250} alt="cesarium" />

                <h1>Cadastrar nova sugestão</h1>
                <p>Deixe sua sugestão e nos ajude a melhorar.</p>
                <Link className="back-link" to="/profile" >
                <FiArrowLeft size={16} color="#FF1616" />
                Voltar para home
                </Link> 
            </section>
            <form>
                <input placeholder="Título da Sugestão" />
                <textarea  placeholder="Descrição"/>
                <input placeholder="Loja/setor"/>
                <input placeholder="Nome e Sobrenome" />
                <div>
                <button className="button" style={{width:"100%"}} type="submit">Cadastrar
                    </button> 
                </div>    
            </form>
        </div> 
        </div>
    )
}