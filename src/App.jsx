import Banner from "./components/banner/Banner";
// import Counter from "./components/banner/Counter";
import Footer from "./components/footer/Footer";
import Ready from "./components/footer/Ready";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <Counter></Counter> */}
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
