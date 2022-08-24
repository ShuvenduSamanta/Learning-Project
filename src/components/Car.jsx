import '../App.css';
import Football from './Football';
import Yes from './Yes';

function Car(props) {
    const isTrue = props.isTrue;
    
    if (isTrue){
        return (
            <div className="App">
                <Yes />
            </div>);
    }
    
    return (<div className="App">
            <h1> function of car</h1>
            <p>this is props features</p>
            <h2>color of the car is {props.color}</h2>

            <Football />

            </div>
        );
}
export default Car;