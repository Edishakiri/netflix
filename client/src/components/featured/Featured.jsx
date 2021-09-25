import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss"

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({})

    useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Filmy" : "Seriale"}</span>
                    <select name="genre" id="genre" onChange={(e)=> setGenre(e.target.value)}>
                        <option>Gatunki</option>
                        <option value="adventure">Przygodowy</option>
                        <option value="comedy">Komedia</option>
                        <option value="crime">Akcja</option>
                        <option value="fantasy">Fantsy</option>
                        <option value="historical">Historyczny</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romans</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animowany</option>
                        <option value="drama">Dramat</option>
                        <option value="documentary">Dokumentalny</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt=""
            />
            <div className="info">
                <img src={content.imgTitle} alt="" 
                />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Odtwórz</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Więcej informacji</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
