import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Film from "./source/film.jpg";
import Film2 from "./source/film2.jpg";
import { useState } from 'react';

function App() {
 const objMovies=[
   {title:"a",describe:"hjbdjbjd",img:Film  ,rate:4 },
   {title:"b",describe:"jndknkd",img:Film2 ,rate:3 },
   {title:"c",describe:"jndknkd",img:Film2 ,rate:5 },
   {title:"d",describe:"jndknkd",img:Film2 ,rate:3 },
   {title:"c",describe:"jndknkd",img:Film2 ,rate:2 },
   {title:"d",describe:"jndknkd",img:Film2 ,rate:3 }, 
   {title:"c",describe:"jndknkd",img:Film2 ,rate:1 },
   {title:"d",describe:"jndknkd",img:Film2 ,rate:3 }

 ] ;
 const [filtredFilms, setFiltredFilms] = useState(objMovies)
  
  const handelChange=(item)=>{
      let filter = objMovies.filter((val)=>val.title.toLowerCase().includes(item.toLowerCase()));
      console.log(filter)
      setFiltredFilms(filter)
    }

    const ratingChanged = (newRating) => {
      console.log(newRating)
      let filter = objMovies.filter((val)=> val.rate === newRating);
      console.log(filter)

      setFiltredFilms(filter)      
    };
  return (
    <div className="App">
            <Filter changeFn={handelChange} ratingFilter={ratingChanged}/>

            <MovieList obj={filtredFilms}/>
    </div>
  );
}

export default App;
