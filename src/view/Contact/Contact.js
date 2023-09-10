import './Contact.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';

export default function Contact(){
    return(
<div className="container">
    <Navbar/>    
    <h1>This is Contact Page</h1>
    <Button text="Contact" />
</div>   
 )
}