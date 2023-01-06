import face from "./images/face.jpg";
import youtube from "./images/youtube.jpg";

import spo from "./images/spo.png";
const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>The Generics</h1>
        </div>
        <div className="col-6" >
         <a href="youtube.com"> <img src={youtube} style={{width:"4rem"}} /></a>
          <a href="facebook.com"><img src={face} style={{width:"2rem"}} /></a>
        <a href="sportify.com">  <img src={spo}  style={{width:"4rem"}}/></a>

        </div>
      </div>
    </div>
  );
};
export default Footer;
