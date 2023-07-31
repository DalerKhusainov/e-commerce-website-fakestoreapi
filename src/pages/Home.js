// REACT HOOKS
import { useContext } from "react";

// REACT CONTEXT API
import { ProductContext } from "../contexts/ProductContext";

// COMPONENTS
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // GET PRODUCTS FROM PRODUCT CONTEXT
  const { products } = useContext(ProductContext);

  // GET ONLY MEN'S & WOMEN'S CLOTHING CATEGORY
  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
