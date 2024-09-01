import React from 'react';
import GraphSpinner from "../../../public/animation_lmkfsdx1.json";
import Lottie from 'lottie-react';

const Grapho = () => {
    return (
        <div className='w-96 flex justify-center items-center mt-16'>
             <Lottie animationData={GraphSpinner} />
        </div>
    );
};

export default Grapho;