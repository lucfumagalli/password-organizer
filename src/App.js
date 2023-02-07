import './App.css';
import { Navigation } from './component/navbar/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Add  from './pages/add';
import  { Password } from './pages/password';
import {Home} from './pages/home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faLock, faPlus } from "@fortawesome/free-solid-svg-icons"
library.add(faPlus,faHouse,faLock)

function App() {
  return (
    <Router>
      <section className="content">
        <div className="inside_content">
          <Routes className="inside_content">
            <Route path='/password-organizer/home' exact element={<Home/>} />
            <Route path='/password-organizer/add' exact element={<Add/>} />
            <Route path='/password-organizer/password'exact element={<Password/>} />
          </Routes>
        </div>
      </section>
      <Navigation/>
    </Router>
  );
}

export default App;