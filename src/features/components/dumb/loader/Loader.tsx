import "./loader.style.css";

const Loader = () => {
  return (
    <div className="loader-parent absolute w-screen h-screen flex justify-center items-center">
        <div className="content">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        </div>
    </div>
  );
};

export default Loader;
