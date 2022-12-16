import './App.css';
import { Navigation } from './component/navbar/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Add } from './pages/add';
import  { Password } from './pages/password';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Navigation/>
      <section className="content">
        <div className="inside_content">
          <Routes className="inside_content">
            <Route path='/home' exact element={<Home/>} />
            <Route path='/add' exact element={<Add/>} />
            <Route path='/password'exact element={<Password/>} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  item.onclick = () => {
    console.log("Clicccatofvsdf");
    listItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  };
});

export default App;