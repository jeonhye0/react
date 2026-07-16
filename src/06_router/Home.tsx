import axios from "axios";
import { useEffect, useState } from "react";

interface UserVO{
    message? : string
}
const Home = () =>{
    const [userVO, setUserVO] =useState<UserVO>({});//JSON - API(Rest패턴 적용)
    useEffect(()=>{
        axios.get('http://192.168.0.104:9999/user')
        .then(response =>{
            setUserVO(response.data);
        })
        .catch(error =>{
            console.error('서버에서 문제', error);
        });
    });
    return (
        <>
            <h1>Home</h1>
            <div>{userVO.message || '서버 데이터 없음'}</div>
        </>
    );
}
export default Home;