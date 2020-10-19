import React from 'react';
import {FaMobile,FaDesktop,FaStarHalfAlt} from 'react-icons/fa';
import {AiFillPlayCircle,AiFillPlusCircle} from 'react-icons/ai';
import './index.css';

function Container_right(){

    return(

        <div className="container-right">
            <div className="right-header">
            <p className="right-title">Andrômeda</p>
            <div className="div-buttons">
                <button className="button1">Sign In</button>
                <button className="button2">Sign Up</button>
            </div>
            </div>

            <div className="div-text">
            <div className="text1-container">
                    <h2 className="text1">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor
                    </h2>
            </div>
            <div className="tex2-container">
                    <p className="text2">
                    Sed ut perspiciatis unde omnis iste 
                    natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
            </div>
            </div>


            <div className="div-devices">
                <ul className="device-list">
                    <li className="device-mobile"><FaMobile/></li>
                    <li className="device-mobile"><p>Mobile Block</p></li>
                    <li className="device-desktop"><FaDesktop/></li>
                    <li className="device-desktop"><p>Desktop Block</p></li>
                </ul>
            </div>

            <div className="content-container">
            <div className="content1">

                    <div className="div-content-title">
                        <h2>
                        Sed ut perspiciatis unde omnis iste natus.
                        </h2>
                    </div>

                    <ul className="play-icon">
                    <li className="rec-icon"><AiFillPlayCircle/></li>
                    <li><p>Play Introduction Video</p></li>
                    </ul>

                    <div className="content-body1"></div>

            </div>

            <div className="content2"> 
                    <div className="div-content-title">
                    <h2>
                        Sed ut perspiciatis unde omnis iste natus error sit
                    </h2>
                    </div>

                    <div className="content-body2"></div>

                    <ul className="play-icon2">
                    <li className="plus-icon"><AiFillPlusCircle/></li>
                    </ul>     

            </div>

            <div className="content3"> 

                    <div className="content-body3"></div> 

                    
                    <ul className="start-icon">
                    <li><FaStarHalfAlt/></li>
                    <li><FaStarHalfAlt/></li>
                    <li><FaStarHalfAlt/></li>
                    <li><FaStarHalfAlt/></li>
                    <li><FaStarHalfAlt/></li>
                    </ul>

                    <div className="div-content-title3">
                    <h4>Et harum quidem rerum facilis est et
                        expedita distinctio. Nam libero tempore, 
                        cum soluta nobis est eligendi optio 
                        cumque nihil
                    </h4>
                </div>
            </div>
     </div>
 </div>

)

}

export default Container_right;