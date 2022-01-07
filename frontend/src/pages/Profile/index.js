
import { Link } from 'react-router-dom'
import minaslogo from '../../assets/minas.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
export default function Profile () {
    return (
        <div className="profile-container">
            <header>
                <img src={minaslogo} width={150} alt="minasb" />
                <span>Bem Vindo!</span>
                <Link className="button" to="/sugestion/new">Nova Sugestão</Link>
              
            </header>
            <h1>Sugestões Cadastradas</h1>

            <ul>
                <li>
                    <button type="button">
                        <FiTrash2 size={20} color=" " />
                    </button>
                    <strong>Titulo da Sugestão</strong>
                    <p>Conferencia no CDI</p>
                    <strong>Descrição</strong>
                    <p>ETC ETC ETC</p>
                    <strong></strong>
                </li>
                <li>
                    <button type="button">
                        <FiTrash2 size={20} color=" " />
                    </button>
                    <strong>Titulo da Sugestão</strong>
                    <p>Conferencia no CDI</p>
                    <strong>Descrição</strong>
                    <p>ETC ETC ETC</p>
                    <strong></strong>
                </li>
                <li>
                    <button type="button">
                        <FiTrash2 size={20} color=" " />
                    </button>
                    <strong>Titulo da Sugestão</strong>
                    <p>Conferencia no CDI</p>
                    <strong>Descrição</strong>
                    <p>ETC ETC ETC</p>
                    <strong></strong>
                </li>
                <li>
                    <button type="button">
                        <FiTrash2 size={20} color=" " />
                    </button>
                    <strong>Titulo da Sugestão</strong>
                    <p>Conferencia no CDI</p>
                    <strong>Descrição</strong>
                    <p>ETC ETC ETC</p>
                    <strong></strong>
                </li>

            </ul>




        </div>
    )
}