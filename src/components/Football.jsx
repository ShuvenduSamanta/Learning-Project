import '../App.css';

function Football(){
    const shoot= (a) => {
        alert(a);
    };
    return (
        <button onClick={()=> shoot("GOAL onClick Event")}>take shot</button>
    );
}
export default Football;