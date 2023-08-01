// REACT HOOKS
import { useContext } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// ICONS
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// COMPONENTS
import CartItem from "../components/CartItem";

// SIDEBAR CONTEXT API
import { SidebarContext } from "../contexts/SidebarContext";

// CART CONTEXT API
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  // GETTING VALUES FROM SIDEBAR CONTEXT API
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // GETTING VALUES FROM CART CONTEXT API
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[45vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        {/* AMOUNT PRODUCTS IN THE BAG */}
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        {/* CLOSE ICON */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* CART ITEMS */}
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[580px] overflow-y-auto overflow-x-hidden border-b">
        {cart?.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
      <div className="flex flex-col py-4 mt-4 gap-y-3">
        <div className="flex items-center justify-between w-full mb-4">
          {/* TOTAL */}
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* CLEAR CART ICON */}
          <div
            onClick={clearCart}
            className="flex items-center justify-center w-12 h-12 py-4 text-xl text-white bg-red-500 cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium bg-gray-200 text-primary"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium text-white bg-primary"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
