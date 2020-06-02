import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import message from '../assets/images/message.gif';
import msg from '../assets/images/msg.gif';
import Axios from 'axios';

class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            disabled:false,
            emailSent:null
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name; 
        this.setState({
                [name]:value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault(); 

        console.log(event.target);

        this.setState({
            disabled:true
        });
        Axios.post('http://localhost:3030/api/email', this.state)
            .then( res => {
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                     });
                }
                else {
                    this.setState({
                        disabled:false,
                        emailSent: true
                        });
                }
                 
            })
            .catch(err=>{
                this.setState({
                    diabled: false,
                    emailSent: false
                });

            })

     }

    render(){
        return(
                <div> 
                    <Hero title={this.props.title}/>
                    <img style={{marginLeft:'auto', marginRight:'auto', display:'block'}} src={msg} alt="message"></img>
    
                    <Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="full-name">
                                    Full Name
                                </Form.Label>
                                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="email">
                                    Email
                                </Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="message">
                                    Message
                                </Form.Label>
                                <Form.Control id="message" rows="3" name="message" as="textarea" value={this.state.message} onChange={this.handleChange}/>
                            </Form.Group>

                            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}><a href="mailto:sethrinkle@gmail.com" style={{color:'white'}}>Send</a></Button>

                            {this.state.emailSent== true && <p className="d-inline success-msg">Email sent!</p>}
                            {this.state.emailSent== false && <p className="d-inline err-msg">Email not sent!</p>}
                        </Form>
                    </Content>
                </div>
            );
    }
    

}

export default ContactPage;