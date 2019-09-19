import React from 'react';


function App() {
  return (
        /*
        React.createElement(
          'h1',
          {id:'heading',className:'heading'},
          'Hola Mundo sin JSX'

        )*/
        React.createElement(
           'div',
           null,
             React.createElement(
                'input',
                {type:'text', value: 'Ingrese Nombre'}
                
             )

        )
  );
}

export default App;
