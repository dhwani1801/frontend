import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { notify } from '../utils/ToastNotification';
import { register } from '../apis/api';

interface AuthFormProps {
  role: 'ADMIN' | 'CUSTOMER';
  onSubmitSuccess: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ role, onSubmitSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await register(values, role);
      notify(response.data.message, 'success');
      onSubmitSuccess();
    } catch (error: any) {
      notify(error.response?.data?.message || 'An error occurred', 'error');
    }
    setLoading(false);
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Register
      </Button>
    </Form>
  );
};

export default AuthForm;
