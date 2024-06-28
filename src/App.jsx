import { Route, Routes } from "react-router-dom";
import Admin from "./page/admin/Admin";
import SingleRoute from "./page/single-route/SingleRoute";
import Auth from "./page/auth/Auth";
import Login from "./page/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/products/:id" element={<SingleRoute />} />
      </Routes>
    </>
  );
}

export default App;
