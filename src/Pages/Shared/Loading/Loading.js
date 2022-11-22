import React from 'react';
import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <ThreeCircles
                height="100"
                width="100"
                color="#0FCFEC"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default Loading;