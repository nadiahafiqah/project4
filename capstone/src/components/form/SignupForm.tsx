const SignupForm = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign Up
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">First Name</span>
            </label>
            <input type="text" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Last Name</span>
            </label>
            <input type="text" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="text" className="w-full input input-bordered" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" className="w-full input input-bordered" />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          ></a>
          <div>
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
