import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./home.css"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Home = () => {
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease',
    });


    const [showAlert, setAlert] = useState(true)
    const [text] = useTypewriter({
        words: ['Technology', 'Programming', 'Skills', 'Development'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    const handleAlert = () => {
        setAlert(!showAlert)
    }

    return <>

        {
            showAlert && (<div class="notification" id="notification">
                <button class="delete" onClick={() => { handleAlert() }}></button>
                Lorem ipsum dolor sit amet, dolor.
                <strong><a href="">Pellentesque risus mi</a></strong>
            </div>
            )

        }

        <div className="upperdir" ><a href="#"><i class="fa-solid fa-arrow-up"></i></a></div>

        <Navbar />


        {/* <div className="box"> */}
        <section class="main-body" data-aos="zoom-in-up">
            <div class="main-left" >
                <img src="https://learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_animation.89b0e584.gif&w=640&q=75"
                    alt="img" />

            </div>
            <div class="main-right"  >
                <h1 class="title is-1-tablet">Learn Code With Unsway</h1>
                <div class="main-right-below">
                    <h2 class="title is-2-tablet">Master <span id="element">{text}<Cursor /></span></h2>
                    <p>Looking to learn programming and coding in Hindi? Look no further! Our website offers a wide range of
                        courses to help you learn programming languages like Java, Python, and more. Our expert instructors
                        provide comprehensive lessons and hands-on projects to help you master coding in very efficent and
                        effective way.</p>

                    <div class="main-right-button">
                        <button class="button is-link  is-hovered ">Premimum Courses</button>
                        <button class="button is-danger   is-hovered ">Top Free Courses</button>
                    </div>

                </div>
                <div class="profile-icons">
                    <i class="fa-regular fa-user "></i><i class="fa-regular fa-user "></i><i
                        class="fa-regular fa-user "></i><i class="fa-regular fa-user "></i><i
                            class="fa-regular fa-user "></i>
                </div>
                <div class="students-count">
                    <h2 class="title is-2-tablet">200000+ </h2><h3 class="title is-4-tablet  ">Trusted Students and Professionals</h3>
                </div>
            </div>
        </section>


        <section className="about-unsway" data-aos="fade-in">
            <div className="what-left">
                <h1 className="title is-2-tablet">What is Unsway?</h1>
                <p>The Unsway programs are short, 15 hour courses that allow teenagers to “experience” various corporate roles, unlock industry certifications and develop the skills needed to succeed in the real world.</p>
            </div>
            <div className="what-right" data-aos="flip-up">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png" width={600} alt="" />
            </div>
        </section>



        <section className="features" data-aos="slide-up">
            <div><img src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/images/optimized/rev-d765668/wp-content/uploads/2022/09/watch-with-triangle.webp" alt="" /><h1 className="title is-5">RAPID CAREER EXPOSURE</h1><p>Make Confident Career
                Choices</p></div>
            <div><img src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/images/optimized/rev-d765668/wp-content/uploads/2022/09/paperwithtriangle.webp" alt="" /><h1 className="title is-5">PORTFOLIO OF PROJECTS</h1><p>Show The World What
                You Can Do</p></div>
            <div><img src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/images/optimized/rev-d765668/wp-content/uploads/2022/09/Cert-with-triangle.webp" alt="" /><h1 className="title is-5">INDUSTRY CERTIFICATE</h1><p>Get an Edge in
                Admissions or Internships</p></div>

        </section>


        <section className="testimonial " data-aos="slide-up">
            <h1 className="title is-1-tablet">Testimonials by our Students & Team</h1>
            
            <div className="cards" >
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img
                                src="https://www.shutterstock.com/image-photo/portrait-smart-asian-man-university-260nw-1957919926.jpg"
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">

                            <div class="media-content">
                                <p class="title is-4">Nobisuke</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />

                        </div>
                    </div>
                </div>
            </div>


        </section>


        {/* </div> */}

        <div className="box ">
            <section className="founder-sec" data-aos="fade">
                <h2 className="title is-3">Founder Of Unsway</h2>
                <p>provide informaion so i can write over here Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam voluptatem molestiae eveniet a odio numquam iusto aliquam? Debitis omnis adipisci odio velit quis repellat optio nemo eveniet assumenda neque quasi rem sunt ea aliquid dolores, nesciunt recusandae minima, modi soluta porro dignissimos exercitationem! Quod et saepe architecto unde sapiente.</p>
            </section>
        </div >


        <div className="contactus">
            <div className="contact-left">
                <img src="https://media.istockphoto.com/id/1366563287/video/contact-us-concept-animation.jpg?s=640x640&k=20&c=ELNRR3HWI3Jan-RaYZ-af7T-dG6uh11gnId8zzbLHAk=" alt="contact-img" />
            </div>
            <div className="contact-right">
                <form>
                    <div class="field">
                        
                            <div><input class="input" type="text" placeholder="Name*" /></div>

                            <div><input class="input" type="number" placeholder="Enter 10 digit Number*" /></div>



                            <div class="select">
                                <select >
                                    <option>Student's Grade*</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </div>
                            <div><input class="input" type="name" placeholder="school Name*" /></div>
                            <div><input class="input" type="email" placeholder="Email ID*" /></div>
                            <div class="select">
                                <select >
                                    <option>Are you a Parent or Student?</option>
                                    <option>Parent</option>
                                    <option>Student</option>

                                </select>
                            </div>


                                <input class="button is-link" type="button" value="Submit" />
                    </div>
                </form>
            </div>
        </div>


        <section className="footer">
            <i>Developed and Maintained By Rohitkumar | Suggesstions are Appreciated</i>
        </section>


    </>
}
export default Home;