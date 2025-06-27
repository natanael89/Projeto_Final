import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./../style/resources.css";


export const Resources = () => {
    const [resources, setResources] = useState([]);
    const [form, setForm] = useState({ name: '', type: '', status: '' });
    
    const loadResources = async () => {
        try {
            const res = await api.get('/resources');
            setResources(res.data);
        } catch (error) {
            console.error('Erro ao carregar os recursos:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        try {
            await api.post('/resources', form);
            setForm({ name: '', type: '', status: '' });
            loadResources();
        } catch (error) {
            console.error('Erro ao cadastrar recurso:', error);
        }
    };

    useEffect(() => {
        loadResources();
    }, []);

    return (
        <div className="resources-container">
            <h2>Recursos</h2>

            <div className="form-box">
                <input 
                 name="name"
                 placeholder="Nome do recurso"
                 value={form.name}
                 onChange={handleChange}
                 />
                 <input 
                 name="type"
                 placeholder="Tipo (veículo, equipamento...)"
                 value={form.type}
                 onChange={handleChange}
                 />
                 <input 
                 name="status"
                 placeholder="Status (ativo, manutenção..."
                 value={form.status}
                 onChange={handleChange}
                 />
                 <button onClick={handleSubmit}>Cadastrar</button>
            </div>

            <div className="resource-list">
                {resources.map((res, index) => (
                    <div key={index} className="resource-card">
                        <h4>{res.name}</h4>
                        <p><strong>Tipo:</strong> {res.type}</p>
                        <p><strong>Status:</strong> {res.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}