import './About.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';

export default function About(){
    return(
<div className="container">
    <Navbar/>    
    <h1>This is About Page</h1>
    <Button text="About" />
</div>   
 )
}