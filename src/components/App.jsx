import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./../components/pages/Home";
import ContactUs from "./../components/pages/ContactUs";
import SignUp from "./../components/pages/SignUp";
import WorkoutCreator from "./../components/pages/WorkoutCreator/WorkoutCreator";
import Trainings from "./../components/pages/Trainings/Trainings";
// import Back from "./../components/pages/Back";
// import Shoulders from "./../components/pages/Shoulders";
// import Chest from "./../components/pages/Chest";
// import Legs from "./../components/pages/Legs";
// import AclTreatment from "./pages/AclTreatment";
// import UpperBackP from "./../components/pages/UpperBackP";
// import LowerBackP from "./../components/pages/LowerBackP";
// import ShoulderMobility from "./../components/pages/ShoulderMobility";


const App = () => <Router>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/workout-creator" exact component={WorkoutCreator} /> 
                    <Route path="/trainings" exact component={Trainings} />
                    <Route path="/contact-us" exact component={ContactUs} /> 
                    <Route path="/sign-up" exact component={SignUp} /> 
                    {/* <Route path="/shoulders" exact component={Shoulders} />
                    <Route path="/back" exact component={Back} /> 
                    <Route path="/legs" exact component={Legs} /> 
                    <Route path="/chest" exact component={Chest} /> 
                    <Route path="/upper-back-pain" exact component={UpperBackP} /> 
                    <Route path="/lower-back-pain" exact component={LowerBackP} /> 
                    <Route path="/acl-treatment" exact component={AclTreatment} /> 
                    <Route path="/shoulder-mobility" exact component={ShoulderMobility} />  */}
                    
                </Switch>
        </Router>
export default App;