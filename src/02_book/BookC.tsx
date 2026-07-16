interface BookType{
    title?:string;
    text:(string|number);
    price:number
}
export function BookC(props: BookType){
    return (
        <div>            
            <h3>{`제목 : ${props.title} text : ${props.text} 가격: ${props.price}`} </h3>
        </div>
    );
}