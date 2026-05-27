import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Sites from "./pages/Sites";
import Customers from "./pages/Customers";
import SolarPlants from "./pages/SolarPlants";
import Monitoring from "./pages/Monitoring";
import GISMaps from "./pages/GISMaps";
import Reports from "./pages/Reports";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/sites"
            element={<Sites />}
          />

          <Route
            path="/customers"
            element={<Customers />}
          />

           <Route
            path="/solarplants"
            element={<SolarPlants />}
          />

           <Route
            path="/monitoring"
            element={<Monitoring />}
          />

          <Route
            path="/gismaps"
            element={<GISMaps />}
          />

           <Route
            path="/reports"
            element={<Reports />}
          />
           <Route
            path="/documents"
            element={<Documents />}
          />

           <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;