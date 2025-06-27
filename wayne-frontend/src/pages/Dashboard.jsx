import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./../style/dashboard.css";


export const Dashboard = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
       const fetchStats = async () => {
         try {
            const res = await api.get('/dashboard/stats');
            setStats(res.data);
         } catch (error) {
            console.error('Erro ao carregar o dashboard:', error);
         }
       };

       fetchStats();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Wayne Security Dashboard</h2>
            {!stats ? (
                <p className="loading">Carregando...</p>
            ) : (
                <div className="stats-boxes">
                    <div className="stat-card">
                        <h3>Usuários Registrados</h3>
                        <p>{stats.total_usuarios}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Recursos Cadastrados</h3>
                        <p>{stats.total_recursos}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Recursos Ativos</h3>
                        <p>{stats.ativos}</p>
                    </div>
                </div>
            )}
        </div>
    )
}