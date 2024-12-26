import { Routes, Route } from 'react-router-dom';
import HydrogenLearning from '../pages/Main Page/HydrogenLearning.jsx';
import Intro_To_Hydrogen_Theory from '../pages/Hydrogen Basics/Intro_To_Hydrogen/Intro_To_Hydrogen_Theory.jsx';
import Hydrogen_As_Fuel_Theory from '../pages/Hydrogen Basics/Hydrogen_As_Fuel/Hydrogen_As_Fuel_Theory.jsx';
import Flammability_And_Explosivity_Theory from '../pages/Hydrogen Safety/Flammability_And_Explosivity/Flammability_And_Explosivity_Theory.jsx';
import Leakage_and_Detection_Theory from '../pages/Hydrogen Safety/Leakage_and_Detection/Leakage_and_Detection_Theory.jsx';
import Material_Compatibility_Theory from '../pages/Hydrogen Safety/Material_Compatibility/Material_Compatibility_Theory.jsx';
import Handling_And_Transport_Theory from '../pages/Hydrogen Safety/Handling_And_Transport/Handling_And_Transport_Theory.jsx';
import Education_And_Awareness_Theory from '../pages/Hydrogen Safety/Education_And_Awareness/Education_And_Awareness_Theory.jsx';
import Electrolysis_Of_Water_Theory from '../pages/Hydrogen_Generation_Method/Electrolysis_Of_Water/Electrolysis_Of_Water_Theory.jsx';
import Methanol_Reforming_Theory from '../pages/Hydrogen_Generation_Method/Methanol_Reforming/Methanol_Reforming_Theory.jsx';
import Steam_Methane_Reforming_Theory from '../pages/Hydrogen_Generation_Method/Steam_Methane_Reforming/Steam_Methane_Reforming_Theory.jsx';
import Alkaline_Electrolysis from '../pages/Hydrogen Electrolysis/Alkaline Electrolysis/Alkaline_Electrolysis.jsx';
import PEM_Electrolysis_Theory from '../pages/Hydrogen Electrolysis/PEM_Electrolysis/PEM_Electrolysis_Theory.jsx';
import Grey_Hydrogen from '../pages/Hydrogen Categories/Grey Hydrogen/Grey_Hydrogen.jsx';
import Blue_Hydrogen from '../pages/Hydrogen Categories/Blue Hydrogen/Blue_Hydrogen.jsx';
import Green_Hydrogen from '../pages/Hydrogen Categories/Green Hydrogen/Green_Hydrogen.jsx';

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<HydrogenLearning />} />
      <Route path="/alk" element={<Alkaline_Electrolysis />} />
      <Route path="/pem" element={<PEM_Electrolysis_Theory />} />
      <Route path="/greyH" element={<Grey_Hydrogen />} />
      <Route path="/greenH" element={<Green_Hydrogen />} />
      <Route path="/blueH" element={<Blue_Hydrogen />} />
      <Route path="/fuel" element={<Hydrogen_As_Fuel_Theory />} />
      <Route path="/intro" element={<Intro_To_Hydrogen_Theory />} />
      <Route path="/flame" element={<Flammability_And_Explosivity_Theory />} />
      <Route path="/leak" element={<Leakage_and_Detection_Theory />} />
      <Route path="/material" element={<Material_Compatibility_Theory />} />
      <Route path="/hand" element={<Handling_And_Transport_Theory />} />
      <Route path="/edu" element={<Education_And_Awareness_Theory />} />
      <Route path="/electro" element={<Electrolysis_Of_Water_Theory />} />
      <Route path="/methane" element={<Methanol_Reforming_Theory />} />
      <Route path="/steam" element={<Steam_Methane_Reforming_Theory />} />
    </Routes>
  );
}

export default AppRoutes;
