import './App.css';
import {Link , Routes , Route , Navigate } from "react-router-dom";
import Home from "./component/home"
import About from './component/about';
import Gallery from './component/gallery';
import Contact from './component/contact';


const App = () => (

  <div>
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Gallery</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/gallery"
        element={<Gallery />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="*"
        element={<Navigate to={'/Home'} />}
      />
    </Routes>
  </div>

 
);



export default App;


