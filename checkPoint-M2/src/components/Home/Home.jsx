/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
export class Home extends Component {
   componentDidMount() {}

   render() {
      return <div className='home'></div>;
   }
}

export const mapStateToProps = () => {};

export const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
