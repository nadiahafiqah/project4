import error404 from "../assets/Error404.png";

const NotFound = () => {
  return (
    <div className="flex-col text-center py-20">
      <img src={error404} className="h-[45%] mx-auto" />
      <div className="text-xl font-bold text-black">
        The page you are trying to access cannot be found.
      </div>
    </div>
  );
};

export default NotFound;
