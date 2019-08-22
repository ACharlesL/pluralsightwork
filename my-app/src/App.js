import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './cardApp'
import CardList from "./cardList";

class App extends React.Component {
  // learning constructor
  // and THIS keyword
  render() {
    return (
    <div className="header">
      The GitHub Cards App
    <CardList/>
    </div>
  )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//
//
//   );
// }

export default App;
