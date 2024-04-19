import logo from './logo.svg';
import './App.css';
import Guess from './Guess';

function App() {
  const ClickHandle=() =>{
    let guessNum=Math.floor(Math.random()*9)+1;
     console.log(guessNum);
    let userInp=prompt("type a number bw 1-9");
    window.alert('Computer number: ${guessNum} ,user input: ${userInp}');
};
  return (
    <div>
      <h1>
        guess num bet 1-9
      </h1>
       <button onClick={ClickHandle}>
       guess number B/w 1-9

       </button>

    </div>
   
    
  );
}

export default App;
