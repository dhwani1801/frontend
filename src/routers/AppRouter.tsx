import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CustomerRegister from "../pages/CustomerRegister";
import AdminRegister from "../pages/AdminRegister";
import VerifyEmail from "../pages/VerifyEmail";
import AdminLogin from "../pages/AdminLogin";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import CustomerDashboard from "../pages/CustomerDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/customer" element={<CustomerRegister />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/customer/welcome" element={<CustomerDashboard />} />
        <Route
          path="*"
          element={<div style={{ padding: "2rem" }}>404 - Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
