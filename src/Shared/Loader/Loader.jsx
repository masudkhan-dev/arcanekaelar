import { ScaleLoader } from "react-spinners";
import loading from "../../../src/assets/load_infinite.json";

import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className=" bg-[#fff] h-screen flex  flex-col justify-center items-center ">
      <div className="flex justify-center items-center w-96 ">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
};

export default Loader;
