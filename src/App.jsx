import MainDescription from "./component/Description/description";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import MainPicture from "./component/main-picture/main-picture";
import Property from "./component/property/property";

function App() {
  return (
    <>
      <header className="fixed w-full z-50">
        <Header></Header>
      </header>
      <main>
        <MainPicture></MainPicture>
        <MainDescription></MainDescription>
        <Property></Property>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
