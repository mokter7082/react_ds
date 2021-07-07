
import './App.css';
import Title from './Title/Title';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 offset-sm-3">
               <Title />
               <Main />
           </div>
           </div>
        </div>
    </div>
  );
}

export default App;
