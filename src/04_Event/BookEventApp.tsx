import BookEvent from "./BookEvent";

function BookEventApp(){
    const bookData1 ={name:'python', price:4500};
    const bookDataHandling1 = function(){
        alert(bookData1.name);
    }
    const bookDatas=[{name:'typeScript', price:5500}];    
    return (
        <div>
            <h1>Header Component</h1>
            <h2>BookList</h2>
            <BookEvent bookObject={{name:'java', price:3000}}
                clickHandling={() =>{ alert('book data');}}  />
            <BookEvent bookObject={bookData1}
                clickHandling={bookDataHandling1} />
            <BookEvent bookObject={bookDatas[0]}
                clickHandling={() =>{ alert(bookDatas[0].name);}} />
        </div>
    )
}
export default BookEventApp;