interface BooKInterface {
    name:string; 
    price:number;
}
function BookEvent({bookObject, clickHandling} : 
               {bookObject : BooKInterface; clickHandling : () =>void }){
    return (
        <div>
            <h1>책 이름 {bookObject.name} 가격 {bookObject.price}</h1>
            <button onClick={clickHandling} >책 구매 이벤트</button>
        </div>
    );
}
export default BookEvent;