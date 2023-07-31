// REACT HOOKS
import { useContext } from "react";

// REACT ROUTER HOOKS
import { useParams } from "react-router-dom";

// REACT CART CONTEXT API
import { CartContext } from "../contexts/CartContext";

// REACT PRODUCT CONTEXT API
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // GETTING VALUES FROM CART CONTEXT API
  const { handleAddToCart } = useContext(CartContext);

  // GETTING VALUES FROM PRODUCT CONTEXT API
  const { products } = useContext(ProductContext);

  // GETTING THE PRODUCT ID FROM THE URL
  const { id } = useParams();

  // GETTING THE SINGLE PRODUCT BASED ON THE ID
  const selectedProduct = products.find((product) => product.id === Number(id));

  // IF PRODUCT IS NOT FOUND
  if (!selectedProduct) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // DESTRUCTURE PRODUCT
  const { title, price, description, image } = selectedProduct;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* IMAGE & TEXT WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* IMAGE */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          {/* TITLE & PRICE & DESCRIPTION & BUTTON  */}
          <div className="flex-1 text-center lg:text-left">
            {/* TITLW */}
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            {/* PRICE */}
            <div className="text-[xl] text-red-500 font-medium mb-6">
              $ {price}
            </div>
            {/* DESCRIPTION */}
            <p className="mb-8">{description}</p>
            {/* BUTTON */}
            <button
              onClick={() =>
                handleAddToCart(selectedProduct, selectedProduct.id)
              }
              className="bg-primary py-4 px-8 text-white uppercase"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
