import logo from './logo.svg';
import './App.css';
function Header(){
  return (<h1> this is a first heading in react under the header function</h1>);
}

function App() {
  return (
    <div className='app'>this is ur first componenet
    <Header/>

    </div>

  );
}

export default App;
