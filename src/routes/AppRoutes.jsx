import { Routes, Route } from 'react-router-dom';
import HydrogenLearning from '../pages/Main Page/HydrogenLearning.jsx';



function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<HydrogenLearning />} />
      {/* <Route path="/about" element={<t />} /> */}
    </Routes>
  );
}

export default AppRoutes;
