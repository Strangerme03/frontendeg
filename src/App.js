import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import NavigationBar from './Navbar';
import Footer from './footer';
import ContactUsPage from './Contactuspage';
import TrackStatusPage from './Trackstatuspage';
import RegisterPage from './register';
import SignInPage from './Signin';
import RegisterUser from './Registernew';
import ForgotPasswordPage from './forgotpass';
import { AuthProvider } from './authcontent';
import ProtectedRoute from './protectauth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/status" element={<TrackStatusPage />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <RegisterPage />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
