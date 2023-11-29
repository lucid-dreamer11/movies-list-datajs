import { useState } from 'react';
import { data } from './data';
import './App.css';

function App (){
  const [films, setFilms] = useState(data);
  const removeFilm = (id) => {
    let watchedFilms = films.filter(film => film.id !== id);
    setFilms(watchedFilms)
  }
  return (
    <div>
      <div className="container">
      <h1>List of {films.length} films to watch on Xmas holidays</h1>
      </div>
    {films.map ((element => {
      const {id, title, year, poster, description} = element;
      return(
        <div key = {id}>
          <div className='container'>
          <h3>{id}. {title}</h3>
          </div>
          <div className='container'>
          <img src={poster} width="200px" alt="film"/>
          </div>
          <div className='container'>
          <h4>{year}</h4>
          </div>
          <div className='container'>
          <p>{description}</p>
          </div>
          <div className='container'>
          <button onClick={() => removeFilm(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
        <div className='container btn'>
          <button onClick={() => setFilms([])}>Delete all</button>
        </div>
    </div>
  )
}
export default App;