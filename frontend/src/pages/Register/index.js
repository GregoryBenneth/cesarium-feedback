
import './styles.css'
import Logoimg from '../../assets/cesarium.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../../global.css'

export default function Register () {
return (
    <div className="register-container">


        <div className="content">
            <section>
                <img src={Logoimg} width={250} alt="cesarium" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, e nos auxilie com o feedback do APP.</p>
                <Link className="back-link" to="/" >
                <FiArrowLeft size={16} color="#FF1616" />
                Já sou cadastrado
                </Link> 
            </section>
            <form>
                <input placeholder="Nome" />
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input placeholder ="WhatsApp"/>
                <input placeholder ="Loja/Setor" />
                <div>
                <button className="button" style={{width:"100%"}} type="submit">Cadastrar
                    </button> 
                </div>    
            </form>
        </div> 

    </div>);
}