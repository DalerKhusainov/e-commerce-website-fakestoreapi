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
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        {/* AMOUNT PRODUCTS IN THE BAG */}
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* CLOSE ICON */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* CART ITEMS */}
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart?.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center mb-4">
          {/* TOTAL */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* CLEAR CART ICON */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
