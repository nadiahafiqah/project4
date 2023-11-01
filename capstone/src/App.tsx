import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { ClientProvider } from "./context/ClientContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PolicyPage from "./pages/PolicyPage";
import ClientList from "./pages/ClientList";
import ClientDetails from "./components/ClientDetails";

function App() {
  return (
    <>
      <ClientProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/clients/:clientId" element={<ClientDetails />} />
            <Route path="/clients/:policyId" element={<PolicyPage />} />
          </Route>
        </Routes>
      </ClientProvider>
    </>
  );
}

export default App;
