import React, { useState } from 'react';
import { Layout, Typography, Input, Button } from 'antd';
import { verifyEmail } from '../apis/api';
import { notify } from '../utils/ToastNotification'; 
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await verifyEmail(email, code);
      console.log('response: ', response.data);
      notify('Email verified successfully!', 'success');
      const userRole = response?.data?.data?.data;
      console.log('userRole: ', userRole);
      if (userRole === 'ADMIN') {
        navigate('/login/admin');
      } else if (userRole === 'CUSTOMER') {
        navigate('/customer/welcome');
      }
  //    navigate('/login/admin');
    } catch (error: any) {
      notify(error.response?.data?.message || 'Verification failed', 'error');
    }
    setLoading(false);
  };

  return (
    <Layout style={{ padding: '50px' }}>
      <Title level={2}>Verify Your Email</Title>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button
        type="primary"
        onClick={handleVerify}
        loading={loading}
      >
        Verify Email
      </Button>
    </Layout>
  );
};

export default VerifyEmail;
