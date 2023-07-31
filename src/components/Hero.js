// FROM ASSETS
import WomanImg from "../img/woman_hero.png";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          {/* PRETITLE */}
          <div>
            <div className="uppercase font-semibold flex items-center">
              <div className="w-10 h-[2px] bg-rose-500 mr-3" />
              new trend
            </div>
          </div>
          {/* TITLE */}
          <h1 className="uppercase text-[70px] leading-[1.1] font-light mb-4">
            autumn sale stylish <br />
            <span className="font-semibold">womens</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* IMAGE */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="A women with the flowers on her hands" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
