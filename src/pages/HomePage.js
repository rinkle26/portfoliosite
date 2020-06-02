import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props){
    var bg="/bg-desktop.jpg";
    return(
       
    <Container className="p-0" fluid={true}>
        <Container className="p-0" fluid={true} className='background-image' style={{backgroundImage:"url("+bg+")", backgroundSize: 'cover'}}>
                
                <div>
               
                <img style={{padding: '2% 5%',
        width: '650px', borderRadius:'50%', marginLeft:'auto', marginRight:'auto', display:'block'}} src="/WhatsApp Image 2019-11-17 at 16.06.49.jpeg"></img>
            <h4 style={{fontSize:'2vw', textAlign:'center', color:'#bfbaba', paddingBottom:'9%', marginBottom:'0rem'}}>Welcome! I am a full stack software developer located in Dallas, Texas.<br/> Excited to work with you!</h4>
                </div>
                
        </Container>
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel/>
        </div>
      </Container>
      
    );

}

export default HomePage;