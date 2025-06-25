import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero relative">
        <img
          src={hero_banner}
          alt="hero-banner img"
          className="banner-img w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover"
        />
        <div className="hero-caption absolute w-full px-4 sm:px-6 md:pl-[6%] bottom-4 sm:bottom-6 md:bottom-0">
          <img
            src={hero_title}
            alt="hero-title img"
            className="caption-img w-[80%] sm:w-[70%] md:w-[90%] max-w-[280px] sm:max-w-[320px] md:max-w-[420px] mb-3 sm:mb-4 md:mb-7"
          />
          <p className="max-w-[90%] sm:max-w-[80%] md:max-w-[700px] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 text-white leading-relaxed">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-2 sm:gap-[10px] mb-6 sm:mb-8 md:mb-12">
            <button
              className="border-0 outline-0 py-2 sm:py-2 md:py-2 px-4 sm:px-5 inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-[10px]
               text-xs sm:text-sm font-semibold bg-white rounded cursor-pointer text-black hover:bg-[#ffffffbf] transition-colors duration-200
               w-full sm:w-auto min-h-[40px] sm:min-h-auto"
            >
              <img className="w-4 sm:w-5 md:w-6" src={play_icon} alt="play_icon_img" />
              Play
            </button>
            <button
              className="text-white bg-[#6d6d6eb3] border-0 outline-0 py-2 sm:py-2 md:py-2 px-4 sm:px-5 inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-[10px]
               text-xs sm:text-sm font-semibold rounded cursor-pointer hover:bg-[#6d6d6e66] transition-colors duration-200
               w-full sm:w-auto min-h-[40px] sm:min-h-auto"
            >
              <img className="w-4 sm:w-5 md:w-6" src={info_icon} alt="info_icon_img" />
              More Info
            </button>
          </div>
          <div className="hidden md:block">
            <TitleCards title={''} category={''}/>
          </div>
        </div>
      </div>
      <div className="more-cards p-4 sm:p-6 md:p-[6%] space-y-6 sm:space-y-8 md:space-y-0">
        <div className="md:hidden mb-6">
          <TitleCards title={''} category={''}/>
        </div>
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