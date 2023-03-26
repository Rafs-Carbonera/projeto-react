function Evento() {
  function meuEvento() {
    console.log("alouuu");
  }

  return (
    <div>
      <p>Clique para disparar:</p>
      <button onClick={meuEvento}> Ativar </button>
    </div>
  );
}

export default Evento;
