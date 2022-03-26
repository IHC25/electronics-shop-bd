import "./App.css";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
    </div>
  );
}

export default App;
