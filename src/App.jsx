import "./App.css";
import { MyRoutes } from "./routes/routes";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
