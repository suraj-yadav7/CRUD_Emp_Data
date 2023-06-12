import './App.css';
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';
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
      <Route exact path='/employee/edit/:id'  element={<EmpEdit/>} />
      <Route exact path='/employee/details/:id'  element={<EmpDetails/>} />
      <Route exact path='/*'  element={<h1>Page Not Found</h1>} />
    </Routes>
    </Router>

    </>
  );
}

export default App;
