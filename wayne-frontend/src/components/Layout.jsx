import { useNavigate, Link } from "react-router-dom";
import './../style/layout.css';


export default function Layout({ children }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className="layout-container">
            <header>
                <h2>Wayne Security</h2>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/resources">Recursos</Link>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}