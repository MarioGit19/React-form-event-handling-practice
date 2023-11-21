import React, {useState} from "react";




function App() {

const [name, setName] = useState("");
const [update, setUpdate]=useState("");


//storing input as a "update" const to later use and update with the click func.
function handleChange() {
  console.log(event.target.value);
  setUpdate(event.target.value);
}

//click function to update the {name} ith the stored value from update
function handleSubmit () {
  setName(update);
}



  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input 
      onChange={handleChange}
      type="text" placeholder="What's your name?"
      value = {update}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )}

export default App;
