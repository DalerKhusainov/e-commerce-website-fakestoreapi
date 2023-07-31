// REACT HOOKS
import { useContext } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// ICONS
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

// CART CONTEXT API
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ product }) => {
  // DESTRUCTURE PRODUCT
  const { id, image, title, price, amount } = product;

  // GETTING VALUES FROM CART CONTEXT API
  const { handleRemoveFromCart, handleIncreaseAmount, handleDecreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 borber-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* PRODUCT IMAGE */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          {/* TITLE & REMOVE ICON */}
          <div className="flex justify-between mb-2">
            {/* TITLE */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* REMOVE ICON */}
            <div
              onClick={() => handleRemoveFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* QTY */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* MINUS ICON */}
              <div
                onClick={() => handleDecreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* AMOUNT */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* PLUS ICON */}
              <div
                onClick={() => handleIncreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* FINAL PRICE */}
            {/* MAKE THE PRICE AT 2 DECIMALS */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
