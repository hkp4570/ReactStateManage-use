import React from 'react';
import {useRecoilValue} from "recoil";
import {chartCountState} from "@/recoil";

const ChartCounter = () => {
    const count = useRecoilValue(chartCountState);
    return (
        <div>
            count: {count}
        </div>
    );
};

export default ChartCounter;
