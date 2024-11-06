import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import pageAdmin from './pages/pageAdmin';
import pageUser from './pages/pageUser';
import pageHome from './pages/pageHome';

function renderApp(){
  return(
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="./user">User</Link>
        <Link to="./admin">Admin</Link>
      </nav>
      <Routes>
        <Route path='/' element={pageHome}></Route>
        <Route path='/user' element={pageUser}></Route>
        <Route path='/admin' element={pageAdmin}></Route>
      </Routes>
    </Router>
  );
}

export default App
