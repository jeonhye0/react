
export function BookB(props: {title:string;text:string;price:number}){
    return (
        <div>
            <h3>제목 : {props.title} text : {props.text} 가격: {props.price}</h3>            
        </div>
    );
}