import React, {useState} from 'react';

function MyComponent() {

  let [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, SetIsEmployed] = useState(false);

  const updateName = () => {
    setName("SpongeBob");
  }

  const incrementAge = () => {
    setAge(age+1);
  }

  const toggleEmployedStatus = () => {
    SetIsEmployed(!isEmployed);
  }

  return( 
    <div>
      <p>name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>
      <p>Is employed :{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Increment age</button>
    </div>);
}

export default MyComponent