import React from "react";
import { Button, Card, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Title level={1} style={{ marginBottom: "20px" }}>
        Welcome to Our Auth System
      </Title>
      <Text type="secondary" style={{ fontSize: "16px" }}>
        Securely register and manage user access
      </Text>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "40px" }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered hoverable>
            <Title level={4}>Register as Customer</Title>
            <Button type="primary" onClick={() => navigate("/register/customer")}>
              Register
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card bordered hoverable>
            <Title level={4}>Register as Admin</Title>
            <Button type="primary" onClick={() => navigate("/register/admin")}>
              Register
            </Button>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Card bordered hoverable>
            <Title level={4}>Admin Login</Title>
            <Button type="default" onClick={() => navigate("/login/admin")}>
              Login
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
