import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Education } from "./components/Education";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Songs } from "../src/components/Songs";
import { BsSpotify } from "react-icons/bs";
import { IconContext } from "react-icons";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <br></br>
      <br></br>
      <br></br>
      <Skills />
      <Projects />
      <Songs />
      <div className="flex text-center border-solid">
        <h3>
          For more Songs,
          <a
            href="https://open.spotify.com/artist/6TiiZlvHEIdxGdaDBcBHe8?si=8ncUThzzR-OBgJD7OxJQkA"
            className="text-decoration-none text-3xl p-3"
          >
            visit here
            <IconContext.Provider value={{ color: "rgb(97,209,94)" }}>
              <span>
                <BsSpotify className="text-3xl" />
              </span>
            </IconContext.Provider>
          </a>
          <p className="pl-3">Thank you for visiting my website!!!</p>
        </h3>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
