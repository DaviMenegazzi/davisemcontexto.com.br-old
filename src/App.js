import './assets/css/App.css';
import Rotas from "./routes";
import { AuthProvider } from './pages/admin/Admin';


function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
