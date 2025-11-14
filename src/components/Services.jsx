const Services = () => {
  return (
    <div className=" bg-base-200 min-h-screen mx-auto pt-30">
      <div className="container flex items-center flex-col mx-auto">
        <h1 className="text-center text-5xl font-semibold mb-5">Services</h1>
        <div className="container lg:w-1/2 md:w-2/3">
          <p className="text-center px-2 text-base/snug mb-20 opacity-80 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptates possimus laudantium quibusdam quas repellendus libero
            repellat voluptas veniam corrupti!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className=" card w-96 bg-base-100 mx-auto card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Lorem, ipsum.</h2>
            <p className="text-base leading-8 opacity-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque veniam optio culpa tempore et deleniti hic a quae mollitia!
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-accent accent-accent-content">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className=" card w-96 bg-base-100 mx-auto card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Lorem, ipsum.</h2>
            <p className="text-base leading-8 opacity-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque veniam optio culpa tempore et deleniti hic a quae mollitia!
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-accent accent-accent-content">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className=" card w-96 bg-base-100 mx-auto card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Lorem, ipsum.</h2>
            <p className="text-base leading-7 opacity-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque veniam optio culpa tempore et deleniti hic a quae mollitia!
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-accent accent-accent-content">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
