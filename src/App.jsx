import Banner from "./components/banner/Banner";
import Counter from "./components/banner/Counter";
import Footer from "./components/footer/Footer";
import Ready from "./components/footer/Ready";
import Navbar from "./components/navbar/Navbar";
import Get from "./components/two-section/Get";
import Simple from "./components/two-section/Simple";
import Products from "./components/premium/Products";
import Text from "./components/premium/Text";
import Cart from "./components/premium/Cart";
import { useState } from "react";
import TabToggle from "./components/premium/TabToggle";

const getDigitals = async () => {
  const res = await fetch("/digitals.json");
  return res.json();
};

const digitalPromise = getDigitals();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  console.log(carts);

  return (
    <>
      <Navbar cartCount={carts.length}></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Text></Text>
      <TabToggle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={carts.length}
      ></TabToggle>

      {activeTab === "product" && (
        <Products
          digitalPromise={digitalPromise}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <Get></Get>
      <Simple></Simple>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
