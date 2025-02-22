import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';  // 認証チェック関数をインポート

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;