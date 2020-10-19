import React from 'react';
import { FaReact} from 'react-icons/fa';
import { SiReactrouter } from 'react-icons/si';
import './index.css';

function Container_left(){

 return(

        <div className="container-left">

        <div className="div-logo">
          <ul className="logo-list">
            <li className="list-logo"><FaReact/></li>
            <li className="list-title"><p>Portifolio</p></li>
          </ul>
        </div>


          <div className="links">
            <p><span>Blog</span></p>
            <p><span>Ecommerce</span></p>
            <p><span>Features</span></p>
            <p><span>Forms</span></p>
            <p><span>Hero</span></p>
            <p><span>Portifolio</span></p>
            <p><span>Princing</span></p>
            <p><span>Testimonials</span></p>
            <p><span>Teams</span></p>
          </div>



        <div className="div-button">
            <ul className="button-list">
                <li className="button-logo"><SiReactrouter/></li>
                <li className="button-title"><p>Unlock</p></li>
            </ul>
        </div>

        </div>

  )

}

export default Container_left;