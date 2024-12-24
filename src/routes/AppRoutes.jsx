import { Routes, Route } from 'react-router-dom';
import HydrogenLearning from '../pages/Main Page/HydrogenLearning.jsx';
import Alkaline_Electrolysis from '../pages/Hydrogen Electrolysis/Alkaline Electrolysis/Alkaline_Electrolysis.jsx';
import PEM_Electrolysis_Theory from '../pages/Hydrogen Electrolysis/PEM_Electrolysis/PEM_Electrolysis_Theory.jsx';
function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<HydrogenLearning />} />
      <Route path="/alk" element={<Alkaline_Electrolysis />} />
      <Route path="/pem" element={<PEM_Electrolysis_Theory />} />
    </Routes>
  );
}

export default AppRoutes;
