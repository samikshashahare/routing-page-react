import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';

export default function Home(){
    return(
<div className="container"> 
<Navbar/>   
    <h1>This is Home Page</h1>
    <Button text="Home" />

</div>   
 )
}