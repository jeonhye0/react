import { useState } from "react";

function FunctionStateApp (){
    const [isButtonState, setButtonState] = useState<boolean>(false);

    const onButtonEvent = () =>{
        setButtonState(!isButtonState);
        // alert('event');
    }
    return (
        <div>
            <button onClick={onButtonEvent}>
                {isButtonState ? '로그아웃' : '로그인'}
            </button>
        </div>
    )

}
export default FunctionStateApp;