import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext"
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls"

export default function ProductList() {
  
  const {movies,dispatch} = useContext(MovieContext);

  useEffect(()=>{
    getMovies(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    deleteMovie(id,dispatch)
  };

  

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Film",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Gatunek", width: 200 },
    { field: "year", headerName: "Rok produkcji", width: 200 },
    { field: "limit", headerName: "Wiek", width: 200 },
    { field: "isSeries", headerName: "Serial?", width: 200 },
    {
      field: "action",
      headerName: "Akcja",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/movie/" + params.row._id, movie:params.row}}>
              <button className="productListEdit">Edytuj</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid rows={movies}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      checkboxSelection
      getRowId={(r)=>r._id}
      />
    </div>
  );
}
