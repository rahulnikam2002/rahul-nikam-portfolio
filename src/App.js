import "./App.css";
import { HomePage } from "./pages/home/home.page.jsx";
import { Routes, Route } from "react-router-dom";
import { Projects } from './pages/Projects/projects.component.jsx'
import { SingleProjectPage } from './pages/Single-Project/single-project.component.jsx'
import { AboutPage } from './pages/About-me/about.page.jsx';
import { ContactMe } from './pages/contact-me/contact.page.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:key' element={<SingleProjectPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
