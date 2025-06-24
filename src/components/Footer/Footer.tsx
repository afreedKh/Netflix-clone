import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer:React.FC = () => {
  return <div className="footer py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto">
    <div className="footer-icons flex gap-5 my-10 mx-0">
      <img className='w-[30px] cursor-pointer' src={facebook_icon} alt="facebook_icon" />
      <img className='w-[30px] cursor-pointer' src={instagram_icon} alt="instagram_icon" />
      <img className='w-[30px] cursor-pointer' src={twitter_icon} alt="twitter_icon" />
      <img className='w-[30px] cursor-pointer' src={youtube_icon} alt="youtube_icon" />
    </div>
    <ul className='grid grid-cols-[auto,auto,auto,auto] gap-4 mb-8 list-none text-sm'>
      <li>Audio Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>media centre</li>
      <li>Invester Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Legal Notice</li>
      <li>Cookie Preference</li>
      <li>Corporate Information</li>
      <li>Contact Us  </li>
    </ul>
    <p className='copyright-text text-gray-500 text-sm'>© 1997-2023 Netflix, Inc.</p>
  </div>;
};

export default Footer;
