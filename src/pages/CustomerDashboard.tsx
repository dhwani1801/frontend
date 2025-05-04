import { Layout, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Layout style={{ padding: '50px', minHeight: '100vh' }}>
      <Title level={2}>Welcome, Customer!</Title>
      <Paragraph>Thank you for registering and verifying your email.</Paragraph>

      <Button type="primary" danger onClick={handleLogout}>
        Logout
      </Button>
    </Layout>
  );
};

export default CustomerDashboard;
