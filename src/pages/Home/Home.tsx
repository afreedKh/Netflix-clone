import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import './Home.css'

const Home:React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero relative ">
        <img
          src={hero_banner}
          alt="hero-banner img"
          className="banner-img w-[100%]"
          
        />
        <div className="hero-caption absolute w-[100%] pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt="hero-title img"
            className="caption-img w-[90%] max-w-[420px] mb-7"
          />
          <p className="max-w-[700px] text-base mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns flex gap-[10px] mb-12">
            <button
              className="border-0 outline-0 py-2 px-5 inline-flex items-center gap-[10px]
             text-sm font-semibold bg-white rounded cursor-pointer text-black hover:bg-[#ffffffbf]"
            >
              <img className="w-6" src={play_icon} alt="play_icon_img" />
              Play
            </button>
            <button
              className="text-white bg-[#6d6d6eb3] border-0 outline-0 py-2 px-5 inline-flex items-center gap-[10px]
             text-sm font-semibold rounded cursor-pointer hover:bg-[#6d6d6e66]"
            >
              <img className="w-6" src={info_icon} alt="info_icon_img" />
              More Info
            </button>
          </div>
          <TitleCards title={''} category={''}/>
        </div>
      </div>
      <div className="more-cards p-[6%]">
          <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
          <TitleCards title={'Only on Netflix'} category={'popular'}/>
          <TitleCards title={'Upcoming'} category={'upcoming'}/>
          <TitleCards title={'Top Pics for You'} category={'now_playing'}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
