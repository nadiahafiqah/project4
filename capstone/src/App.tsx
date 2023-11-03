import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { ClientProvider } from "./context/ClientContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import PolicyPage from "./pages/PolicyPage";
import ClientList from "./pages/ClientList";
import ClientProfile from "./pages/ClientProfile";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ClientProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/clients/:clientId" element={<ClientProfile />} />
            {/* <Route path="/clients/:policyId" element={<PolicyPage />} /> */}
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </ClientProvider>
    </>
  );
}

export default App;
