import { useState } from "react";

function TimeApp(){
    const [message, setTimeString] = useState(new Date().toLocaleTimeString());
    const onTimeEvent = function(){
        setTimeString(new Date().toLocaleTimeString());
    }
    return (
        <div>
            <h1>현재 시간</h1>
            <div>{message}</div>
            <button onClick={onTimeEvent} > 시간 체크</button>
        </div>
    );

}
export default TimeApp;