import Imggithub from "./../../Images/Github.png";
import Imglinkedin from "./../../Images/Linkedin.png";
import Imginstagram from "./../../Images/Instagram.png";

import "./Footer.css";
export default function Footer() {
    return (
        <div className="container-2">
            <h2 className="f-head">React Js</h2>
            <div className="img-container">
                <div>
                    <img src={Imggithub} alt="img-Github" className="img" /><br /><br />
                    <h3 className="name">GitHub</h3>
                </div>

                <div>
                    <img src={Imglinkedin} alt="img-linkedin" className="img" /><br /><br />
                    <h3 className="name">Linkedin</h3>
                </div>

                <div>
                    <img src={Imginstagram} alt="img-instagram" className="img" /><br /><br />
                    <h3 className="name">Instagram</h3>
                </div>

            </div>
        </div>
    )
}