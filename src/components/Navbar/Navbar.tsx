import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useCallback, useEffect, useRef } from "react";
import '../Navbar/Navbar.css'

const Navbar:React.FC = () => {

  const navRef = useRef<HTMLDivElement | null>(null);

 
  const handleScroll:()=>void = useCallback(()=>{
      if(window.scrollY >= 80){
        navRef.current?.classList.add('nav-dark')
      }else{
        navRef.current?.classList.remove('nav-dark')
      }
  },[])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[handleScroll])

  return (
    <div ref={navRef}
      className="navbar w-full py-5 px-[6%] flex justify-between fixed text-sm text-[#e5e5e5] 
      bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] z-50
    "
    >
      <div className="navbar-left flex items-center gap-12 ">
        <img src={logo} alt="netflix-logo" className="w-[90px]" />
        <ul className="flex list-none gap-5 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tv Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right flex gap-5 items-center">
        <img
          src={search_icon}
          alt="search_icon"
          className="icons w-4 cursor-pointer"
        />
        <p>Children</p>
        <img
          src={bell_icon}
          alt="bell_icon"
          className="icons w-4 cursor-pointer"
        />
        <div className="navbar-profile flex items-center gap-2 cursor-pointer relative group">
          <img
            src={profile_img}
            alt="profile_img"
            className="profile rounded w-8 "
          />
          <img src={caret_icon} alt="caret_icon" />
          <div
            className="dropdown absolute top-[100%] right-0 w-[max-content] bg-[#191919]
            px-[18px] py-[22px] rounded-sm underline z-1 hidden group-hover:block"
          >
            <p className="text-[13px] cursor-pointer">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
