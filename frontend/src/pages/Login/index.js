
import {FiLogIn} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'

import Logoimg from '../../assets/cesarium.png'
import minaslogo from '../../assets/minas.svg'
export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
  
        <form className='login-form'>
          <img src={minaslogo} width={200} alt="minas-logo" />  
          <h1>Login</h1>
          
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          
          <button className='login-button' type="submit"> Entrar </button>
        
          <Link classname="back-link" to="/register" >
            <FiLogIn size={16} color="#FF1616" />
            Não tenho cadastro
          </Link> 
        </form>
    </section>
   
     <img src={Logoimg} width={600} Linklt="logo" />
    </div>

  );  
}