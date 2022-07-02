const Saludo = (props) => {
  const { nombre, apellido } = props;
  return <h1>Hola {nombre} {apellido}</h1>;
}

export default Saludo;