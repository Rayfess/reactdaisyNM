import HeroImg from "/images/hero.png";

const Hero = () => {
  return (
    <div
      className="hero bg-base-300 min-h-screen
     pt-30 md:pt-5 md:px-5 "
    >
      <div className="hero-content flex-col md:flex-row-reverse gap-10 md:gap20 ">
        <img
          src={HeroImg}
          alt="Hero Img"
          className="w-full bg-transparent rounded-lg shadow-2xl"
        />
        <div className="text-center md:text-start">
          <h1 className="lg:text-7xl/snug text-5xl/snug font-bold">
            Build With Us! <br />{" "}
            <span className="text-secondary"> 3D Renders</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center lg:justify-start ">
            <button className="btn btn-secondary secondary-secondary-content w-4/5 lg:w-5/6 md:btn-lg btn-xl ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
