import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Resources } from '../pages/Resources';
import ProtectedRoute from '../auth/ProtectedRoute';
import Layout from '../components/Layout';


function App() {
  return (
     <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
            <Route 
              path='/dashboard' 
              element={
                <ProtectedRoute>
                  <Layout >
                   <Dashboard />
                  </Layout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path='/resources' 
              element={
                <ProtectedRoute>
                  <Layout>
                   <Resources />
                  </Layout>
                </ProtectedRoute>
              } 
            />
        </Routes>
     </Router>
  );
}

export default App;
