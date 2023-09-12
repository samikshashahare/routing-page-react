import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';
import Footer from '../../component/Footer/Footer';
import Imganimal1 from './../../Images/animal-1.jpg';
import Imganimal4 from './../../Images/animal-4.jpg'; 
import Imganimal3 from './../../Images/animal-3.jpg'; 




export default function Home(){
    return(
<div className="container"> 
<Navbar/>   
    <div>
        <div className='img-container1'>
        <img src={Imganimal1} alt="img-animal" className="img-animal1" />
        <img src={Imganimal4} alt="img-animal" className="img-animal3" />
        <img src={Imganimal3} alt="img-animal" className="img-animal2" />


        </div>
    </div>
    <Button text="Know More" />
    <Footer />

</div>   
 )
}