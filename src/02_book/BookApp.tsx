import { BookA } from "./BookA";
import { BookB } from "./BookB";
import { BookC } from "./BookC";

export function BookApp(){
    return (
        <div>
            <h1>Book List</h1>
            <BookA text="A책"/>
            <BookB price={5000} title="자바책" text="문법"/>
            <BookC price={15000} text={10000}/>
        </div>

    );

}