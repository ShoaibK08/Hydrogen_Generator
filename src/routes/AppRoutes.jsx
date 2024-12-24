import { Routes, Route } from 'react-router-dom';
import HydrogenLearning from '../pages/Main Page/HydrogenLearning.jsx';
// import PEM_Electrolysis_Theory from '../pages/Hydrogen Electrolysis/PEM_Electrolysis_Theory.jsx';
import PEM_Electrolysis from '../pages/Hydrogen Electrolysis/PEM_Electrolysis/PEM_Electrolysis_Theory.jsx';

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<HydrogenLearning />} />
      <Route path="/PEM" element={<PEM_Electrolysis />} />
    </Routes>
  );
}

export default AppRoutes;
