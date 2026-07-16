import { useEffect, useState } from "react";

function TimeApp_2(){
    const [message, setTimeString] = useState(new Date().toLocaleTimeString());
    
    useEffect(()=>{
        const updateTime = ()=>{
            setTimeString(new Date().toLocaleTimeString());
        }
        //조건에 의해서만 
        updateTime();
        setInterval(updateTime, 1000);
    }, []);

    return (
        <div>
            <h1>현재 시간</h1>
            <div>{message}</div>
        </div>
    );

}
export default TimeApp_2;