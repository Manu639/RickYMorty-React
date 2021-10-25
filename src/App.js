import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => setPersonajes(response.data.results))
      .catch((err) => console.log(err))
  }, []);


  console.log(personajes)
  return (
    <div className="App">
      {personajes.map(personaje =>
        <div class="card">
          <img src={personaje.image} alt={personaje.name} />
          <div class="container">
            <h4><b>{personaje.name}</b></h4>
            <p>{personaje.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;








/*
react-router
Formularios: formik, react hook form
Redux
Hooks: useContext, useReducer...
 */






















