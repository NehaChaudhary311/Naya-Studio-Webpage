import React from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Landing from './components/Landing'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PasswordForget from './components/PasswordForget';
import Particles from 'react-particles-js';
import Designer from './components/Designer';
import Maker from './components/Maker';
import './App.css';
import Both from './components/Both';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="particles">
        <Particles 
            params={{
                "particles": {
                    "number": {
                        "value": 300,
                        "density": {
                            "enable": true,
                            "value_area": 1803.4120608655228
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 2,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 4
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.4008530152163807,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                      color: {
                        value: "246B24"
                      }
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 100,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }} />
         </div>
         <div className="buttons">
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path="/Designer"component={Designer} />
          <Route path="/Maker" component={Maker} />
          <Route path="/Both" component={Both} />
          </div>

          
        
      </Router>
    </div>
  );
}

export default App;
