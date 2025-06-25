import { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import {
  useNavigate,
  useParams,
  type NavigateFunction,
} from "react-router-dom";

interface ApiData {
  name: string;
  key: string;
  published_at: string;
  type: string;
}

const Player = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate: NavigateFunction = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  useEffect(() => {
    if(!id) return
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player h-screen flex flex-col justify-center items-center">
      <img
        onClick={() => navigate(-1)}
        src={back_arrow_icon}
        alt=""
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      {apiData && (
        <>
          <iframe
            width="90%"
            height="90%"
            className="rounded-[10px]"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info flex items-center justify-between w-[90%]">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
