import React, { useState, useEffect } from 'react';
import Formulario from '../components/Formulario';
import { useHistory, useLocation } from "react-router-dom";

const LoginAndRegister = () =>{
    const [login, setLogin] = useState ();
    const history = useHistory();
    const location = useLocation();

    const handleLogin = () =>{
        if(login){
            setLogin(false);
            history.push('/register');
        } else{
            setLogin(true);
            history.push('/login');
        }
    }
    useEffect(() => {
    location.pathname === '/register' ? setLogin(false) : setLogin(true);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <div>
            {login ?
            <h1>LOGIN</h1>
                :
            <h1>REGISTRO</h1>}
            <Formulario login={login}/>
            <button onClick={handleLogin}>Ir al {login ? 'registro' : 'login'}</button>
        </div>
    
    )
}
export default LoginAndRegister;