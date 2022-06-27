import React from 'react';
import {useRecoilState} from "recoil";
import {textState} from "@/recoil";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    const onChange = (event: any) => {
        setText(event.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={e => onChange(e)}/>
            <br/>
            echo: {text}
        </div>
    );
};

export default TextInput;
