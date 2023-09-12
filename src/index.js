import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Home from "./view/Home/Home";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
 {
  path: '/About',
    element: <About />
 },
  {
    path: '/Contact',
    element: <Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<><RouterProvider router={router} /> 
</>
);

