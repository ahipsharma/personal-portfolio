import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Songs } from "../src/components/Songs";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Songs />
      <div className='flex text-center'>
        <p>For more Songs,
        <a href="https://open.spotify.com/artist/6TiiZlvHEIdxGdaDBcBHe8?si=8ncUThzzR-OBgJD7OxJQkA" className='text-decoration-none text-3xl' target='_blank'>visit here</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
