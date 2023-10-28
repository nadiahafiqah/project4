const ClientSearch = () => {
  const handleClick = () => {};

  return (
    <div className="form-control ml-5">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-sm text-black"
        />
        <button
          className="btn btn-sm btn-square hover:bg-orange hover:text-darkblue"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClientSearch;
