import React from 'react';
import {RecoilRoot} from 'recoil';
import TextInput from "./TextInput";
import ChartCounter from './ChartCounter';

const Home = () => {
    return (
        <RecoilRoot>
            <TextInput/>
            <ChartCounter/>
        </RecoilRoot>
    );
};

export default Home;
