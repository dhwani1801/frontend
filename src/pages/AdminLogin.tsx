import { useState } from 'react';
import { Layout, Typography, Input, Button } from 'antd';
import { loginAdmin } from '../apis/api';
import { notify } from '../utils/ToastNotification';
import { useNavigate, Link } from 'react-router-dom';

const { Title, Text } = Typography;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginAdmin(email, password);
      notify('Login successful!', 'success');
      localStorage.setItem('token', response.data.token); 
      navigate('/admin/dashboard');
    } catch (error: any) {
      notify(error.response?.data?.message || 'Login failed', 'error');
    }
    setLoading(false);
  };

  return (
    <Layout style={{ padding: '50px', maxWidth: '400px', margin: 'auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Admin Login</Title>
      
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button
        type="primary"
        onClick={handleLogin}
        loading={loading}
        block
      >
        Login
      </Button>
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <Text>Don't have an admin account? </Text>
        <Link to="/register/admin">Register as Admin</Link>
      </div>
    </Layout>
  );
};

export default AdminLogin;
