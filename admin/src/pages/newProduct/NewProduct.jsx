import {  useContext, useState } from "react";
import "./newProduct.css";
import storage from "../../firebase"
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext"

export default function NewProduct() {
  const [movie,setMovie] = useState(null)
  const [img,setImg] = useState(null)
  const [imgTitle,setImgTitle] = useState(null)
  const [imgSm,setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  const {dispatch} = useContext(MovieContext)

  const handleChange = (e)=>{
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value })
  };

  const upload = (items) => {
    items.forEach((item) =>{
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on("state_changed", (snapshot) =>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Ładuje" + progress + " %"); 
      },
       (error)=>{console.log(error)},
       () => {
         uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
           setMovie((prev)=>{
            return {...prev, [item.label]: url}
          });
          setUploaded((prev)=>prev + 1 )
         })
       }
    )})
  }

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      {file: img, label: "img"},
      {file: imgTitle, label: "imgTitle"},
      {file: imgSm, label: "imgSm"},
      {file: trailer, label: "trailer"},
      {file: video, label: "video"},
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch)
    
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nowy Film</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Obraz</label>
          <input type="file" id="img" name="img"
          onChange={(e)=>setImg(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Tytułowy Obraz</label>
          <input type="file" id="imgTitle" name="imgTitle" 
          onChange={(e)=>setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Miniaturka</label>
          <input type="file" id="imgSm" name="imgSm"
          onChange={(e)=>setImgSm(e.target.files[0])} />
        </div>
          <div className="addProductItem" >
          <label>Tytuł</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
          <div className="addProductItem" >
          <label>Opis</label>
          <input type="text" name="desc" onChange={handleChange}/>
        </div> 
        <div className="addProductItem" >
          <label>Rok</label>
          <input type="text" name="year" onChange={handleChange}/>
        </div> 
        <div className="addProductItem" >
          <label>Gatunek</label>
          <input type="text" name="genre" onChange={handleChange}/>
        </div>
         <div className="addProductItem" >
          <label>Czas filmu</label>
          <input type="text" name="duration" onChange={handleChange}/>
        </div>
         <div className="addProductItem" >
          <label>Limit wiekowy</label>
          <input type="text" name="limit" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Serial?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">Nie</option>
            <option value="true">Tak</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer" 
          onChange={(e)=>setTrailer(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Film</label>
          <input type="file" name="viedo" 
          onChange={(e)=>setVideo(e.target.files[0])}/>
        </div>{uploaded === 5 ? (
        <button className="addProductButton" onClick={handleSubmit}>Stwórz</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>Wrzuć!</button>
        )}
      </form>
    </div>
  );
}
