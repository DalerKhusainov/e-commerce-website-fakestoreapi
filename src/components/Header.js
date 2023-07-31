// REACT HOOKS
import { useContext, useEffect, useState } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// SIDEBAR CONTEXT API
import { SidebarContext } from "../contexts/SidebarContext";

// CART CONTEXT API
import { CartContext } from "../contexts/CartContext";

// ICONS
import { BsBag } from "react-icons/bs";

// FROM ASSETS
import Logo from "../img/logo.svg";

const Header = () => {
  // HEADER STATE
  const [isActive, setIsActive] = useState(false);

  // GETTING VALUES FROM SIDEBAR CONTEXT API
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // GETTING VALUES FROM cart CONTEXT API
  const { itemAmount } = useContext(CartContext);

  // EVENT LISTENER
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* LOGO */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="Logo" />
          </div>
        </Link>
        {/* CART */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
