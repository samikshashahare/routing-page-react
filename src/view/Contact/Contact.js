import './Contact.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Imganimal4 from './../../Images/animal-4.jpg';



export default function Contact() {
    return (
        <div className="container">
            <Navbar />

            <div className='info-2'>
                <div>
                    <img src={Imganimal4} alt="img-animal" className="img-animal4" />
                </div>
                <div className='card-1'>
                    <p>
                        <h3 className='head-1'>📞Contact to-Famous Photographer</h3><br />
                        <p>🔸Sudhir Shivaram</p><br />
                        <p>🔸Shaaz jung</p><br />
                        <p>🔸Kalyan varma</p><br />
                        <p>🔸Rathika ramasamy</p><br />
                        <p>🔸Sandesh Kadur</p>

                    </p>
                </div>
            </div>

            <Button text="Know More" />
            < Footer />
        </div>
    )
}