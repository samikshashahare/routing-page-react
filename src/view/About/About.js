import './About.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Imganimal4 from './../../Images/animal-4.jpg';



export default function About() {
    return (
        <div className="container">
            <Navbar />

            <div className='about-container'>
                <div className='info'>
                    <p>
                        <h3 className='head-1'>💁‍♀️Info-Wild Animals </h3><br />
                        Wild animals are animals that live in forests. These animals are not normally domesticated. The major wild animals of India are elephant, tiger, lion, deer, bear etc. Wild animals are very important in balancing the environment.
                    </p>
                </div>

                <div>
                    <img src={Imganimal4} alt="img-animal" className="img-animal4" />
                </div>
                <div className='info'>
                    <h3 className='head-1'>💁‍♀️ Phototgraphy Tips</h3><br />
                    <p>🔸Get to know your subject</p>
                    <p>🔸Pick the right lens.</p>
                    <p>🔸Keep it steady.</p>
                    <p>🔸Keep focus.</p>
                    <p>🔸Speed matters.</p>
                    <p>🔸Consider the light: make the most of backlighting.</p>
                </div>
            </div>
            <Button text="Know More" />
            <Footer />
        </div>
    )
}