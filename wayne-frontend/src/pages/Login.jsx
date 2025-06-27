import React, { useState } from "react";
import './../style/login.css';
import api from "../services/api";


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const login = async () => {
        api.post('/login', {
            username,
            password,
            role: 'administrador',
        })
        .then(res => {
            localStorage.setItem('token', res.data.access_token);
            window.location.href = '/dashboard';
        })
        .catch(err => {
            console.error('Erro no login:', err.response?.data);
        })
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a01ed118-0b9f-4337-8725-230bf1215829/dbir81s-f3f8e575-9842-477a-98ff-f5c50537344d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwMWVkMTE4LTBiOWYtNDMzNy04NzI1LTIzMGJmMTIxNTgyOVwvZGJpcjgxcy1mM2Y4ZTU3NS05ODQyLTQ3N2EtOThmZi1mNWM1MDUzNzM0NGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yQSMZLU6Q7dnLiGR2ltI54uQED71RfUv6V_4dDm5dqQ" alt="logo" className="logo" />
                <h2>WAYNE SECURITY</h2>
                <h3>Login</h3>
                <div className="username-field">
                  <input 
                   type="text" 
                   placeholder="Nome do Usuário"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                
                <div className="password-field">
                    <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Senha de Acesso"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button"  onClick={() => setShowPassword(!showPassword)} className="show-password">
                        {showPassword ? '🙉' : '🙈'}
                    </button>
                </div>
                <button className="login-button" onClick={login}>Entrar</button>
            </div>
        </div>
    )
}