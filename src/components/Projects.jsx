import { ListProjects } from "../api.js";

const Projects = () => {
  return (
    <div className=" bg-base-300 min-h-screen mx-auto pt-30 py-20">
      <div className="container flex items-center flex-col mx-auto">
        <h1 className="text-center text-5xl font-semibold mb-5">Projects</h1>
        <div className="container lg:w-1/2 md:w-2/3">
          <p className="text-center px-2 text-base/snug mb-20 opacity-80 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptates possimus laudantium quibusdam quas repellendus libero
            repellat voluptas veniam corrupti!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {ListProjects.map((data) => (
          <div className="card bg-base-100 w-96 shadow-sm" key={data.id}>
            <figure>
              <img src={data.img} alt={data.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p className="text-base leading-7 opacity-80">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
