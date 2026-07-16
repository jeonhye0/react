
const langTitle= "mainTitle";
const user=undefined;
function LangApp(){
    return(
        <div>
            <h2>{langTitle}</h2>
            {langTitle === "mainTitle" ? (<h5>yes</h5>) : (<h5>no</h5>)}
            {langTitle === "mainTitle" && <h1>모두 만족</h1> }
            {user || <h2>user 값이 정의되지 않음</h2>}
        </div>
    );
}
export default LangApp;