import {  useContext, useEffect, useState, useHistory } from "react";
import "./newList.css";
import storage from "../../firebase"
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext"
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";

export default function NewList() {
  const [list,setList] = useState(null)
  

  const {dispatch} = useContext(ListContext)
  const {movies, dispatch: dispatchMovie } = useContext(MovieContext)


  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])

  const handleChange = (e)=>{
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value })
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch)
    
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nowa Lista </h1>
      <form className="addProductForm">
          <div className="formLeft">
            <div className="addProductItem" >
              <label>Tytuł</label>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div className="addProductItem" >
              <label>Gatunek</label>
              <input type="text" name="genre" onChange={handleChange}/>
            </div>
          </div>
          <div className="formRight">
            <div className="addProductItem" >
              <label>Rodzaj</label>
              <select name="Rodzaj" onChange={handleChange}>
                <option>Rodzaj</option>
                <option value="movie">Film</option>
                <option value="series">Serial</option>
              
              </select>
            </div> 
            <div className="addProductItem" >
              <label>Zawartość filmów</label>
              <select multiple name="content" onChange={handleSelect}>
                {movies.map((movie)=>(
                <option value={movie._id}>{movies.title}</option>
                ))}
              </select>
            </div> 
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Stwórz</button>
        
      </form>
    </div>
  );
}
