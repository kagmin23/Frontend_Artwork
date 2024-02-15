import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import Manager from './components/ManagerDash/ManagerTable';
import Premium from './components/Premium/PremiumTable';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<MainDash></MainDash>}></Route>
          <Route path='/dashboard' element={<MainDash></MainDash>}></Route>
          <Route path='/manager' element={<Manager></Manager>}></Route>
          <Route path='/customers' element={<Premium></Premium>}></Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;