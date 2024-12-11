
import React from 'react';
import Saludos from './componentes/Saludos'
import Despedida from './componentes/Despedida'

function App() {
  return (
    <div>
      <Saludos nombre="Carlos" />
      <Despedida nombre="Carlos" />
    </div>
  );
}

export default App;