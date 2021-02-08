import logo from './logo.svg';
import './App.css';
import Demo from './components/demo';
import Demo2 from './components/demo2';
import ClassBasedComp from './components/classBasedComponent';
import Hooksinc from './components/hooksinc';

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

function App() {
  return (
    <div className="App">
      <h1>Achyut</h1>
      {/* <Demo></Demo>
      <Demo />

      <Demo />

      <Demo2></Demo2> */}
      <Home />

      <ClassBasedComp name = "Achyut"></ClassBasedComp>

      <h1>Hooks Concepts</h1>

      <Hooksinc></Hooksinc>
    </div>
  );
}

let Home=()=>{
  return (<h1>This is my Home component</h1>);
}
export default App;
