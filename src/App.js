import Estado from "./Estado";
const App = () => {
  const estadosMexico = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Estado de Mexico','Michoacan de Ocampo','Morelos','Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatan','Zacatecas'];
  return (<>
    {
      estadosMexico.map((estado, index)=>{
        return (
          <Estado
            key={index} 
            nombre={estado} 
          />
        )
      })
    }
  </>);
}

export default App
