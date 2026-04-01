const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#101727] mb-8">Your Cart</h2>

        {carts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Your cart is currently empty.
          </div>
        ) : (
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50/50 p-4 rounded-2xl border border-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#101727]">{item.name}</h3>
                    <p className="text-gray-500 text-sm font-medium">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-600 font-semibold text-sm transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="pt-8 mt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 font-medium text-lg">
                  Total:
                </span>
                <span className="text-3xl font-extrabold text-[#101727]">
                  ${totalPrice}
                </span>
              </div>

              <button className="w-full py-4 bg-[#8133FF] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-100">
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
