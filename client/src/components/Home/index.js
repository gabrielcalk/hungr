import './style.css'

import {useState} from 'react'
// importing the foods images
import cake from '../Home/images/cake.jpg'
import chicken from '../Home/images/chicken.jpg'
import salad from '../Home/images/salad.jpg'

// importing the components that could be display on the page
import RenderInfo from '../infoHome/index'
import RenderJoin from '../Join/index'
import RenderSignIn from '../SignIn/index'
import RenderAbout from '../AboutHungr/index'
import {Row, Col, Container, Carousel} from 'react-bootstrap'



// function that render the Home Page except the nav
export default function RenderHome() {
    // Creating one state to change the components (info/signin/join)
    // The default value is info_component, that means the component with the title, information and the buttons will be render first
    const [componentHome, setcomponentHome] = useState('info_component')

    function renderComponentHome(){
        // if componentHome is "info_component", then render the component with the info, title and buttons
        if(componentHome === 'info_component'){
            return <RenderInfo setcomponentHome={setcomponentHome}/>
        // if componentHome is "join_component", then render the component with the join questions
        } else if(componentHome === 'join_component'){
            return <RenderJoin/>
        // if componentHome is "signup_component", then render the component with the signIn questions
        } else if (componentHome === 'signin_component'){
            return <RenderSignIn/>
        // if componentHome is "about_component", then render the component with the About Hungr component
        } else if (componentHome === 'about_component'){
            return <RenderAbout/>
        // if it is false for the variables above, then show the page that let the user signin
        } 
    }

    return (
        <>
{/* We need to display different navigation bars based on whether the user is logged in or not.*/}     
           
            <Container>
                <Row className="firstSection">
                    <Col>
                        {renderComponentHome()}
                    </Col>
                    <Col>
                        <Carousel className="Carousel">
                            <Carousel.Item>
                                <img
                                className="d-block pic"
                                src={cake}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block pic"
                                src={chicken}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block pic"
                                src={salad}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col className="secondSection">
                    <RenderAbout/>
                    </Col>
                </Row>
            </Container>           
        </>
    )
}