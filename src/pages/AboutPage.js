import React from 'react';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Content from '../components/Content';
import profileImage from '../assets/images/profileImage.png';
import Education from '../components/Education';
import Experience from '../components/Experience';
import RinkleSeth from '../assets/images/RinkleSeth.jpg';


function AboutPage(props){


    return(

       <div>
           <Hero title={props.title}/>
                <div>
                <img style={{padding: '2% 5%',
        width: '40%', borderRadius:'50%', marginLeft:'auto', marginRight:'auto', marginBottom:'3%', display:'block'}} src={RinkleSeth} alt="profile_image"></img>
           
                </div>
 
           <Content>
                <div style={{fontFamily:'Comic Sans MS, Comic Sans, cursive', fontSize:'20px'}}>
                    <p>Hello, my name is Rinkle Seth.</p>
                    <p>I am a full stack software developer recently graduated from University of Texas at Dallas.</p>
                    <p>I am a very inquisitive and avant-garde person passionate about learning and incorporating state-of-the-art technologies in my work.</p>
                    <p>My ambition is to build impactful softwares, contribute greatly to the tech world, and ease the life of an end-user.</p>
                    <p>Other than coding, I read and write. Sometimes I sketch or do something creative that involves the right-side of my brain.</p>
                    <p>Looking for some inspiration? You can checkout my blog link <a href="https://medium.com/@sethrinkle" target="_blank">here</a>.</p>
                </div>
           </Content>
           <div class='float-container'>
               
                <div class="float-child" style={{marginRight:'10px'}}>
                <h2>Experience</h2>
                    <Experience/>
                   
                </div>
                
                <div class="float-child">
                <h2>Education</h2>
                    <Education/>
                </div>
               
           </div>
      
       </div>
    );

}

export default AboutPage;