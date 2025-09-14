import { BrowserRouter } from "react-router-dom";
import Router from "./routing/Router";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;