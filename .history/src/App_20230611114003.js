import './App.css';
import EmpCreate from './components/EmpCreate';
import Employee from './components/Employee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <h1>The CRUD Operations On Employee Data</h1>
    <Router>
   
    <Routes>
      <Route exact path='/'  element={ <Employee />} />
      <Route exact path='/employee/create/'  element={<EmpCreate/>} />
    </Routes>
    </Router>

    </>
  );
}

export default App;
