import React from "react";
import phoneImage1 from './assets/phone-1.png';
import phoneImage2 from './assets/phone-2.png';
import phoneImage3 from './assets/phone-3.png';
import phoneImage4 from './assets/phone-4.png';

const images = [phoneImage1, phoneImage2, phoneImage3, phoneImage4];

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease, onClear }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItem = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <header className="bg-[#6c63ff] py-5 px-6 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold tracking-wide">🛍️ UseReducer Cart</h1>
        <div className="relative text-white text-3xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-white text-[#6c63ff] text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow">
            {totalItem}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-[#333] mb-12">Your Bag</h2>

        {cartItems.map((item, idx) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-6 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={images[idx]}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold text-[#333]">{item.name}</h3>
              <p className="text-gray-600 font-medium">${item.price.toFixed(2)}</p>
              <button
                className="text-purple-600 text-sm mt-1 hover:underline"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
            <div className="flex flex-col items-center text-purple-600 text-xl space-y-1">
              <button
                onClick={() => onIncrease(item.id)}
                className="hover:scale-110 transition-transform"
              >
                ↑
              </button>
              <span className="text-black text-base font-medium">{item.quantity}</span>
              <button
                onClick={() => onDecrease(item.id)}
                className="hover:scale-110 transition-transform"
              >
                ↓
              </button>
            </div>
          </div>
        ))}

        <hr className="my-8 border-gray-300" />

        <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
          <h3>Total:</h3>
          <span className="bg-purple-100 text-[#6c63ff] px-5 py-2 rounded-lg shadow-sm font-bold text-lg">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onClear}
            className="bg-[#6c63ff] text-white px-8 py-3 rounded-md hover:bg-[#574ee6] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Clear Cart
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
