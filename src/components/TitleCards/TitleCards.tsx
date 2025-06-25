import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Title.css'

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
      Authorization: `${import.meta.env.VITE_TMDB_TOKEN}`,
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

    const currentRef = wheelRef.current;
    currentRef?.addEventListener("wheel", handleWheel);

    return () => {
      currentRef?.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div className="title-cards mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8">
      <h2 className="mb-2 sm:mb-3 md:mb-2 text-lg sm:text-xl md:text-2xl font-bold text-white px-1 sm:px-0">
        {title.trim() ? title : "Popular on Netflix"}
      </h2>
      <div 
        className="card-list flex gap-2 sm:gap-3 md:gap-3 overflow-x-auto scrollbar-hide pb-2" 
        ref={wheelRef}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {apiData.map((card) => {
          return (
            <Link
              to={`player/${card.id}`}
              className="card relative flex-shrink-0 group transition-transform duration-300 hover:scale-105"
              key={card.id}
            >
              {card.backdrop_path && (
                <img
                  className="rounded cursor-pointer 
                    w-32 h-18 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:max-w-48 lg:h-auto
                    object-cover transition-all duration-300"
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.original_title}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded">
                <p className="absolute bottom-1 sm:bottom-2 md:bottom-[10px] 
                  left-1 right-1 sm:left-2 sm:right-2 md:left-[10px] md:right-[10px] 
                  text-white text-xs sm:text-sm md:text-sm font-medium
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  line-clamp-2 text-center md:text-left
                  drop-shadow-lg">
                  {card.original_title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;