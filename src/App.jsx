import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Annonce from "./components/Annonce";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return <div>
    <Navbar />
    <Main>
    <Banner />
    <Annonce />
    </Main>
    <Footer />
  </div>
}

export default App;
