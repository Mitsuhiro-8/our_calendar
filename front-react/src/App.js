import React, { Component } from 'react';
import Header from './Components/Header';
// import CalendarMenu from './Components/CalendarMenu';
// import Calendar from './Components/Calendar';
import './stylesheets/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/>  */}
        {/* <CalendarMenu/> */}
        <Calendar/>
      </div>
    );
  }
}

export default App;



// import logo from './logo.svg';
// import './App.css';

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
//   );
// }

// export default App;
