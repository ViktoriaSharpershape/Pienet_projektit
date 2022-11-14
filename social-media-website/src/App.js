
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={"9000"} position={"Developer"} company={"Amazon"}/>
      <Job salary={"5000"} position={"HR"} company={"Google"}/>
      <Job salary={"1000"} position={"Junior"} company={"Meta"}/>
      <Job />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}
      </h1>
      <h1>{props.position}
      </h1>
      {props.company}
    </div>
  )
}

export default App;
