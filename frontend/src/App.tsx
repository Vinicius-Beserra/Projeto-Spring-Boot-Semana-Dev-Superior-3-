import NavBar from "components/NavBar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
