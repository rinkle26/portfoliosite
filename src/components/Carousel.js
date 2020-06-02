import React from 'react';
import ML from '../assets/images/ML.jpeg';
import SearchEngine from '../assets/images/SearchEngine.jpg';
import WebScraper from '../assets/images/WebScraper.png';
import AI from '../assets/images/AI.jpg';
import space from '../assets/images/space.jpg';
import nlp from '../assets/images/nlp.jpg';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title: 'Machine Learning',
                    subTitle: 'Implementation of several Machine learning techniques',
                    imgSrc: ML,
                    link: 'https://github.com/rinkle26/MachineLearning',
                    selected: false
                },
                {
                    id:1,
                    title:'Scrapping Tool',
                    subTitle: 'Outputs data by scraping Apartments.com website',
                    imgSrc: WebScraper,
                    link:'https://github.com/rinkle26/webscrapercs' ,
                    selected: false
                },
                {
                    id:2,
                    title: 'Search Engine Using R',
                    subTitle:'Returns most relevant results for a given query' ,
                    imgSrc: SearchEngine,
                    link: 'https://github.com/rinkle26/Search-engine-using-R',
                    selected: false
                },
               
                {
                    id:3,
                    title:'Semantic Textual Similarity',
                    subTitle: 'Computes the similarity between 2 sentences',
                    imgSrc: nlp,
                    link:'https://github.com/rinkle26/Semantic-Textual-Similarity' ,
                    selected: false
                },
                {
                    id:4,
                    title:'Supermarket Knowledge Representation',
                    subTitle: 'An Artificial Intelligence based question-answering system',
                    imgSrc: AI,
                    link:'https://github.com/rinkle26/webscrapercs' ,
                    selected: false
                },
                {
                    id:5,
                    title:'SpaceX',
                    subTitle: 'First-person shooter game created using unity',
                    imgSrc: space,
                    link:'https://github.com/rinkle26/VR-FPS' ,
                    selected: false
                }
            ]

        }
    }

    handleCardClick=(id, card)=> {

        let items=[...this.state.items];
        items[id].selected =items[id].selected? false:true;

        items.forEach (item=> {
            if(item.id!== id){
                item.selected=false;
            }

        });

        this.setState({
            items
        });
    }


    makeItems= (items) => {

        return items.map(item => {
            return <Card item={item} click={(e=> this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>

        );

    }


}

export default Carousel;