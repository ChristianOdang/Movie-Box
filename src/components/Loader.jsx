import ScaleLoader from "reactspinners/ScaleLoader";

const Loader = () => {
  return (
    <div className="fixed z-50 inset-0 bg-white flex items-center justify-center">
      <ScaleLoader color="#BE123C" />
    </div>
  );
};

export default Loader;