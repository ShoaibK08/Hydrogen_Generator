import { Routes, Route } from 'react-router-dom';
import HydrogenLearning from '../pages/Main Page/HydrogenLearning.jsx';
import Alkaline_Electrolysis from '../pages/Hydrogen Electrolysis/Alkaline Electrolysis/Alkaline_Electrolysis.jsx';
import PEM_Electrolysis_Theory from '../pages/Hydrogen Electrolysis/PEM_Electrolysis/PEM_Electrolysis_Theory.jsx';
import Grey_Hydrogen from '../pages/Hydrogen Categories/Grey Hydrogen/Grey_Hydrogen.jsx';

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<HydrogenLearning />} />
      <Route path="/alk" element={<Alkaline_Electrolysis />} />
      <Route path="/pem" element={<PEM_Electrolysis_Theory />} />
      <Route path="/greyH" element={<Grey_Hydrogen />} />
    </Routes>
  );
}

export default AppRoutes;
