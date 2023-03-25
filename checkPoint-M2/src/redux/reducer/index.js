/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
   GET_ALL_BANDS,
   GET_BAND_DETAILS,
   CREATE_BANDS,
   DELETE_BANDS,
} from '../actions';

const initialState = {
   bands: [],
   bandDetail: {},
};

/*
En este ejercicio tendrás que crear los casos de un reducer para gestionar la información de tu estado global.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS:
🟢 Crea un caso default que devuelva el estdo global sin cambios.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se guarden todas las bandas.

🟢 Crea un caso en el que, dentro de la propiedad "bandDetail", se guarde el detalle de una banda.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se agregue una nueva banda.
    PISTA: puedes utilizar el spread operator.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se elimine aquella banda cuyo ID es igual al recibido.

*/

const rootReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
  }
};

export default rootReducer;
