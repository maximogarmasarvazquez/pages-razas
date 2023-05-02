import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className='App'>
      <div className= 'contenedor-principal'>
      <h1>Hoy les vamos a contar un poco sobre algunas razas de perros </h1>
     <Testimonio 
     nombre= 'Bulldog ingles'
     imagen='Bulldog'
     pais= 'Reino unido'
     descripcion='El bulldog o bulldog inglés (en inglés: English Bulldog) es una raza de perro originaria del Reino Unido. Su ancestro, conocido como el Antiguo Bulldog Inglés, fue utilizado en peleas de perros con toros (bull-baiting) hasta mediados del siglo XVII, aunque en 1835 esta práctica fue prohibida. En la actualidad este perro es uno de los símbolos de Inglaterra. ' />
      <Testimonio 
     nombre= 'Bóxer'
     imagen='Bóxer'
     pais= 'Alemania'
     descripcion='El bóxer (en alemán: Deutscher Boxer) es una raza canina alemana de trabajo y compañía, tipo moloso, de tamaño grande. La raza se creó a base de cruces con brabant bullenbeisser, bulldog de antaño, bulldog inglés y otras razas no documentadas. La primera vez en aparecer un bóxer fue en 1895 en Múnich por el Múnich Bóxer Club. Friedrun Stockmann y su esposo Phillip3​ considerados los «padres de la raza bóxer» gracias a su criadero llamado vom Dom. Los sucesos bélicos en ese tiempo ocasionaron una considerable disminución de la raza, aunque ellos la mantuvieron estable.' />
     <Testimonio 
     nombre= 'Gran danés'
     imagen='Grandanes'
     pais= 'Alemania'
     descripcion='El gran danés, dogo alemán o alano alemán es una raza canina conocida por su gran tamaño y personalidad delicada, considerado como el «Apolo entre todas las razas» por la Federación Cinológica Internacional. También se considera que desciende del Bullenbeisser con mezcla de sangre 50/50 y es parte del grupo Generación Bullenbeisser.El Gran danés, aun siendo una raza gigante, no suele ser torpe en su andar y movimientos. Su carácter suele ser amistoso y nunca tímido. Los machos deben ser de constitución más fuerte que las hembras.' />
    </div>
    </div>
  );
}

export default App;
