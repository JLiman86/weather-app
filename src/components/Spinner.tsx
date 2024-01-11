import { ImSpinner8 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="h-screen bg-gradientBg bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <div>
        <ImSpinner8 className="text-5xl animate-spin text-white" />
      </div>
    </div>
  );
};

export default Spinner;
