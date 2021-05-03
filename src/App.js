// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  // const frineds = [
  //   { id: 1, name: "Sakib", age: 15 },
  //   { id: 2, name: "Mohit", age: 18 },
  //   { id: 3, name: "Bolla Khan", age: 19 },
  //   { id: 4, name: "Pitus", age: 20 },
  // ];

  // const mappingTheArray = frineds.map((fr) => fr);
  // console.log(mappingTheArray);
  return (
    <div className="App">
      <header className="App-header">
        {/* <ShowFrineds name={frineds[0].name} age={frineds[0].age}></ShowFrineds> */}

        {/* {frineds.map((fr) => (
          <ShowFrineds name={fr.name} key={fr.id} age={fr.age}></ShowFrineds>
        ))} */}

        {users.map((fd) => (
          <ShowFrineds
            key={fd.id}
            name={fd.name}
            zipcode={fd.address.zipcode}
            email={fd.email}
          ></ShowFrineds>
        ))}
      </header>
    </div>
  );
}
function ShowFrineds(props) {
  const styleForDiv = {
    border: "2px solid red",
    margin: "10px",
  };
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // });
  const [count, setCount] = useState(0);

  return (
    <div style={styleForDiv}>
      {/* <h1>I am: {props.name} </h1>
      <h3>I am years {props.age} old</h3> */}
      <h1>Fetch Form Api</h1>
      <h1>Name: {props.name}</h1>
      <h2>Zip Code: {props.zipcode}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Increase</button>
    </div>
  );
}

export default App;
