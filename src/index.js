import ReactDOM from 'react-dom/client';

import Home from "./view/Home/Home";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";

function App (){

  const path = window.location.pathname;
  
  switch (path){
    case "/":
    return <Home />
    break;
    case "/About":
    return <About />
    break;
    case "/Contact":
    return <Contact />
    break;
    default:
      return <h1>This is Wrong Path</h1>
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <App />
  </>
);

