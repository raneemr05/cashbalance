import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";

// Importing the action creators we’ve implemented in our counter reducer.
import { deposit, withdraw, interest, charges } from "./store/counter";

function App() {
  // The useSelector function allows us to find the needed slices of state we
  // require. The useDispatch function will dispatch all the necessary actions to
  // the reducer to enable us to modify the state.

  const count = useSelector((state) => state.counter.value).toFixed(2);

  const [userInput, setUserInput] = useState(0);
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //dispatch(incrementByAmount(Number(userInput)));
  //   dispatch(withdraw(Number(userInput)));
  //   setUserInput(0);
  // };

  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // }
  return (
    <div>
      <div className="balance">
        <h2>Your Current Balance</h2>
      </div>
      <div className="App">
        {/* Displaying the state or count variable we have initiated earlier using the useSeletor function*/}
        <h1>{count}</h1>
      </div>
      <div className="notes">
      <p><b>Add Interest:</b> Increase the value with 5% interest</p>
      <p><b>Charges:</b> Decrement the value by 15% </p>
      </div>
      <div className="Buttons">
        {/* Each time any of the buttons below are clicked upon, the state will increment or decrease depending on the button.*/}

        <button id="depositbtn" class ="btn btn-success" onClick={() => dispatch(deposit(Number(userInput)))}>Deposit</button>
        <button id="withdrawbtn" onClick={() => dispatch(withdraw(Number(userInput)))}>Withdraw</button>
        <button id="interestbtn" onClick={() => dispatch(interest())}>Add Interest</button>
        <button id="chargesbtn" onClick={() => dispatch(charges())}>Charges</button>
        
      </div>
      <form className="Form" >
        <label>
          {" "}
          Enter Amount:{" "}
          <input
            type="text"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            className="box"
          />
        </label>{" "}
        {/* <button type="submit">Submit</button> */}
      </form>
      <br></br>
    </div>
  );
}

export default App;
