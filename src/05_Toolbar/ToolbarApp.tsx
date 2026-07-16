import { useState } from "react";
import { Toolbar } from "./Toolbar";

export function ToolbarApp(){
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const onLogin = function(){
        setIsLogin(true);
        //setIsLogin(!isLogin);
    }
    const onLogout = function(){
        setIsLogin(false);
    }
    return (
        <div>
            <h1>Toolbar</h1>
            <Toolbar isLogin={isLogin} 
            onClickLogin={onLogin} onClickLogout={onLogout}/>
        </div>
    );
}