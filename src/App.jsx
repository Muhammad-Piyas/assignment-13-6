import Banner from "./components/banner/Banner";
import Counter from "./components/banner/Counter";
import Footer from "./components/footer/Footer";
import Ready from "./components/footer/Ready";
import Navbar from "./components/navbar/Navbar";
import Get from "./components/two-section/Get";
import Simple from "./components/two-section/Simple";
import Products from "./components/premium/Products";

const getDigitals = async () => {
  const res = await fetch("/digitals.json");
  return res.json();
};

const digitalPromise = getDigitals();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Products digitalPromise={digitalPromise}></Products>
      <Get></Get>
      <Simple></Simple>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
