import { Layout, Typography } from 'antd'; 
import AuthForm from '../components/AuthForm';
import { useNavigate , Link } from 'react-router-dom';

const { Title } = Typography;

const AdminRegister = () => {
  const navigate = useNavigate();

  const onSubmitSuccess = () => {
    navigate('/verify-email');
  };

  return (
    <Layout style={{ padding: '50px', maxWidth: '400px', margin: 'auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Admin Registration</Title>
      
      <AuthForm role="ADMIN" onSubmitSuccess={onSubmitSuccess} />

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <Typography.Text>Already have an admin account? </Typography.Text>
        <Link to="/login/admin">Login as Admin</Link>
      </div>
    </Layout>
  );
};

export default AdminRegister;
