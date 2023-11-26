import "../components/loader.css";
const Loader = () => {
  return (
    <div>
      <div className=" w-full h-[calc(100vh-6rem)] flex justify-center items-center">
        <div className=" w-36 h-36 border-4 flex justify-center items-center rounded-full anim"></div>
      </div>
      {/* <div className="flex absolute top-1/2 right-1/2"></div> */}
    </div>
  );
};

export default Loader;
