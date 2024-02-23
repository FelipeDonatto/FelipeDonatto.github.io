import "../App.css";
import Header from "../components/Header";
import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/400-italic.css";
import MainText from "../components/Main-text";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <MainText />
      </div>
      <Footer />
    </>
  );
}

export default App;
