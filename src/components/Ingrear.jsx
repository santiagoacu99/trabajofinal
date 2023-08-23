import React, { useState, useEffect } from "react";
import logo1 from '../assets/logo.png';
import '../css/Ingresar.css'
import { Link } from "react-router-dom";

const Ingresar = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleRegister = () => {
        if (username && password) {
            const newUser = { username, password, };
            setUsers([...users, newUser]);
            setUsername('');
            setPassword('');
            
            console.log('Nuevo usuario registrado:', newUser);
            alert('Registro exitoso. Ahora podés iniciar sesión.');
        } else {
          alert('error')
        }
    };

    const handleLogin = () => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setLoggedIn(true);
          alert('bienvenido')
        } else {
           alert('usuario o contrasena incorrectos')
        }
    };
    const handlesubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <>   
                <section className="login-container" >
                    <h1>Bienvenido!</h1>
                    <figure className="logo1">
                        <Link to='/Home'><img src={logo1} alt="logo" /></Link>
                    </figure>
                    <form onSubmit={handlesubmit}>
                    <div className="user">
                        <h3>Usuario</h3>
                        <input type="text" placeholder="Ingrese su usuario" value={username} onChange={e => setUsername(e.target.value)}/>
                    
                    </div>
                    <div className="user">
                        <h3>Contrasena</h3>
                        <input type="password" placeholder="Contrasea" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="button">
                        <button className="color" onClick={handleLogin}>Iniciar secion</button>
                        <button className="color" onClick={handleRegister}>Registrate</button> 
                    </div>
                    </form>
                </section>
        </>
    )
}
export default Ingresar;