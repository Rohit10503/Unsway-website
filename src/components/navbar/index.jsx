import React, { useState } from "react";
import "./navbar.css"
const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleNav = () => {
   
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }

    }
    return <>

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img class="logo" src="https://www.euroschoolindia.com/wp-content/uploads/2023/08/study-rewards.jpg" alt="logo" />
                    <h2>Unsway</h2>


                </a>

                <a role="button" class="navbar-burger" onClick={() => { handleNav() }} aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Clubs
                    </a>
                    <a class="navbar-item 	has-text-primary">
                        Premium Courses
                    </a>
                    <a class="navbar-item">
                        Free Courses
                    </a>
                    <a class="navbar-item 	has-text-danger ">
                        About
                    </a>
                    <a class="navbar-item">
                        Exosway
                    </a>

                    <a class="navbar-item">
                        <img src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />Youtube
                    </a>
                    <a class="navbar-item">
                        <img src="https://getsby.com/wp-content/uploads/2023/06/google-play-badge.png" alt="" />
                    </a>


                </div>


            </div>
        </nav>

        {show ? 
        
        <div  class="mobile-nav">     
            <div class="navbar-end">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Clubs
                </a>
                <a class="navbar-item 	has-text-primary">
                    Premium Courses
                </a>
                <a class="navbar-item">
                    Free Courses
                </a>
                <a class="navbar-item 	has-text-danger ">
                    About
                </a>
                <a class="navbar-item">
                    Exosway
                </a>

                <a class="navbar-item" >
                    <img width={100} height={50}  src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />
                </a>
                <a class="navbar-item">
                    <img width={100} height={50}  src="https://getsby.com/wp-content/uploads/2023/06/google-play-badge.png" alt="" />
                </a>


            </div>


        </div>
        
            :
            <></>
        }

    </>
}
export default Navbar;