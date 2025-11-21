const ContactUs = () => {
  return (
    <div className=" bg-base-200 min-h-screen mx-auto py-30">
      <div className="container flex items-center flex-col mx-auto">
        <h1 className="text-center text-5xl font-semibold mb-5">Contact Us</h1>
        <div className="container lg:w-1/2 md:w-2/3">
          <p className="text-center px-2 text-base/snug mb-20 opacity-80 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptates possimus laudantium quibusdam quas repellendus libero
            repellat voluptas veniam corrupti!
          </p>
        </div>
      </div>
      <div className=" card w-96 bg-base-100 mx-auto card-lg shadow-sm">
        <div className="card-body">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
            />
          </label>
          <p className="validator-hint hidden">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <textarea className="textarea" placeholder="Bio"></textarea>

          <button className="btn btn-accent accent-accent-content  w-full ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
