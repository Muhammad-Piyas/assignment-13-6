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
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Text></Text>
      {/* name of each tab group should be unique */}
      <div className="flex justify-center my-10">
        <div className="tabs tabs-boxed bg-white border border-gray-100 p-1 rounded-full shadow-sm">
          {/* Products Tab */}
          <input
            type="radio"
            name="tab_toggle"
            className="tab !rounded-full !h-12 px-8 text-base font-bold checked:!bg-[#8133FF] checked:!text-white !text-[#8133FF] transition-all"
            aria-label="Products"
            onClick={() => setActiveTab("product")}
            defaultChecked
          />

          {/* Cart Tab */}
          <input
            type="radio"
            name="tab_toggle"
            className="tab !rounded-full !h-12 px-8 text-base font-bold checked:!bg-[#8133FF] checked:!text-white !text-[#8133FF] transition-all"
            aria-label="Cart (0)"
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>
      {activeTab === "product" && (
        <Products
          digitalPromise={digitalPromise}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      )}
      {activeTab === "cart" && <Cart carts={carts}></Cart>}
      <Get></Get>
      <Simple></Simple>
      <Ready></Ready>
      <Footer></Footer>
    </>
  );
}

export default App;
