import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import Setup from "./pages/setup/Setup";
import Components from "./pages/components/Components";
import ReactFunctions from "./pages/react-functions/ReactFuntions";
import Functions from "./pages/functions/Functions";
import Complexes from "./pages/complexes/Complexes";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas con layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/setup" replace />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/components" element={<Components />} />
          <Route path="/react-functions" element={<ReactFunctions />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/complexes" element={<Complexes />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;