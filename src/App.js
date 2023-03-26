import "./App.css";
import HelloWorld from "./components/HelloWorld";

import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Lista from "./components/Lista";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <HelloWorld />

      <SayMyName nome="Gabi" />
      <SayMyName nome="Rafa" />

      <Pessoa nome="Rafael" idade="30" profissão="Programador" />

      <Lista />

      <Evento />

      <Form />
    </div>
  );
}

export default App;
