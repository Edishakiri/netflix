import { Link, useLocation } from "react-router-dom";
import "./list.css";

import { Publish } from "@material-ui/icons";

export default function List() {
    const location = useLocation();
    const list = location.list;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Lista</h1>
        <Link to="/newList">
          <button className="productAddButton">Stwórz</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">gatunek:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Rodzaj:</span>
                      <span className="productInfoValue">{list.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nazwa Listy</label>
                  <input type="text" placeholder={list.title} />
                  <label>Rodzaj</label>
                  <input type="text" placeholder={list.type} />
                  <label>Gatunek</label>
                  <input type="text" placeholder={list.genre} />
              </div>
              <div className="productFormRight">
                  <button className="productButton">Aktualizuj</button>
              </div>
          </form>
      </div>
    </div>
  );
}
