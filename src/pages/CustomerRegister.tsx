import { Layout, Typography } from 'antd';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const CustomerRegister = () => {
  const navigate = useNavigate();

  const onSubmitSuccess = () => {
    navigate('/verify-email');
  };

  return (
    <Layout style={{ padding: '50px' }}>
      <Title level={2}>Customer Registration</Title>
      <AuthForm role="CUSTOMER" onSubmitSuccess={onSubmitSuccess} />
    </Layout>
  );
};

export default CustomerRegister;
