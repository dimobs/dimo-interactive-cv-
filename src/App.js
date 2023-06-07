import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Administrator';
import Create from './components/Administrator/Create';
import IbanCardDetails from './components/Administrator/IbanDetails/IbanCardDetails';
import About from './components/About'


function App() {

  return (
    <div id="container">
      <Header />
      <main id="site-content"> 
        <Routes>
          <Route path="/project/*" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/IbanCardDetails" element={<IbanCardDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@Dimo Yahnkov Karachorbadzhiev</p>
      </footer>
    </div>

  );
}

export default App;
