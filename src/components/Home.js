import React, { Component } from 'react';
import Designer from './Designer';
import Maker from './Maker';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SignOut from './SignOut';
import history from './../history';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.designer = this.designer.bind(this);
        this.maker = this.maker.bind(this);
        this.both = this.both.bind(this);
    }
    designer() {
            this.props.history.push('/Designer');
        
    }
    maker() {

            this.props.history.push('/Maker');
    }
    both(){
        this.props.history.push('/Both');
    }
    render(){
        return(
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

            <Col>
                <Row style={{ustifyContent:'center', alignItems:'center'}}>
                    <Button class="btn" variant="dark" onClick={this.designer}>Designer</Button>
                </Row>
                <br></br>
                <Row style ={{justifyContent:'center', alignItems:'center'}}>
                    <Button class="btn" variant="dark" onClick ={this.maker}>Maker</Button>
                </Row>
                <br></br>
                <Row style ={{justifyContent:'center', alignItems:'center'}}>
                    <Button class="btn" variant="dark" onClick ={this.maker}>Or both?</Button>
                </Row>
            </Col>
            </div>
            
        );
    }
    


}

export default Home;

