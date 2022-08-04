import DashboardContent from './components/Dashboard';
import {Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";

const App = () => {
  return (
      <RecoilRoot>
        <Routes>
            <Route path="*" element={<DashboardContent />} />
        </Routes>
      </RecoilRoot>
  )
};

export default App;
