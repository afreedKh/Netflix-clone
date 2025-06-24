import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface TitleCardsProps {
  title: string;
  category: string;
}

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
}

const TitleCards = ({ title, category }: TitleCardsProps) => {
  const [apiData, setApiData] = useState<Movie[]>([]);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (wheelRef.current) {
      wheelRef.current.scrollLeft += e.deltaY;
    }
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    wheelRef.current?.addEventListener("wheel", handleWheel);

    return () => {
      wheelRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards mt-12 mb-8">
      <h2 className="mb-2">{title.trim() ? title : "Popular on Netflix"}</h2>
      <div className="card-list flex gap-3  overflow-x-hidden" ref={wheelRef}>
        {apiData.map((card) => {
          return (
            <Link
              to={`player/${card.id}`}
              className="card relative "
              key={card.id}
            >
              {card.backdrop_path && (
                <img
                  className="rounded cursor-pointer max-w-48"
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.original_title}
                />
              )}
              <p className="absolute bottom-[10px] right-[10px]">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
