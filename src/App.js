import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./components/Home"
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route element={<ProtectedRoute logRegPage={true} />}>
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute logRegPage={true} />}>
          <Route path="login" element={<Login />} />
        </Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
