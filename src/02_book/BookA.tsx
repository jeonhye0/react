//Typescript : 값을 바로 넣거나 또는 자료형 선언  //XML 응용한 TSX
export function BookA(props: {text:string}){
    return (
        <div>
            text : {props.text}
        </div>
    );
}