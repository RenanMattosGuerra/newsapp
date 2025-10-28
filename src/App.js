import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import RoutesApp from "./routes";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <RoutesApp></RoutesApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
