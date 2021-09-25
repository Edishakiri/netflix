import { Link, useLocation } from "react-router-dom";
import "./product.css";

import { Publish } from "@material-ui/icons";

export default function Product() {
    const location = useLocation();
    const movie = location.movie;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Film</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Stwórz</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img}
                   alt="" className="productInfoImg" />
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">gatunek:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">rok produkcji:</span>
                      <span className="productInfoValue">{movie.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit wiekowy:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nazwa Filmu</label>
                  <input type="text" placeholder={movie.title} />
                  <label>Rok produkcji</label>
                  <input type="text" placeholder={movie.year} />
                  <label>Gatunek</label>
                  <input type="text" placeholder={movie.genre} />
                  <label>Limit wiekowy</label>
                  <input type="text" placeholder={movie.limit} />
                  <label>Trailer</label>
                  <input type="file" placeholder={movie.trailer} />
                  <label>Video</label>
                  <input type="file" placeholder={movie.video} />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} 
                      alt="" 
                      className="productUploadImg"/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Aktualizuj</button>
              </div>
          </form>
      </div>
    </div>
  );
}
