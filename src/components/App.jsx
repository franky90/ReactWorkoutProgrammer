import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./../components/pages/Home";
import ContactUs from "./../components/pages/ContactUs";
import SignUp from "./../components/pages/SignUp";
import { WorkoutTable } from "./../components/pages/WorkoutTable";
import Trainings from "./../components/pages/Trainings/Trainings";
const App = () => <Router>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/workout-creator" exact component={WorkoutTable} /> 
                    <Route path="/trainings" exact component={Trainings} />
                    <Route path="/contact-us" exact component={ContactUs} /> 
                    <Route path="/sign-up" exact component={SignUp} /> 
                    {/* 
                    <Route path="/shoulders" exact component={Shoulders} />
                    <Route path="/back" exact component={Back} /> 
                    <Route path="/legs" exact component={Legs} /> 
                    <Route path="/chest" exact component={Chest} /> 
                    <Route path="/upper-back-pain" exact component={UpperBackP} /> 
                    <Route path="/lower-back-pain" exact component={LowerBackP} /> 
                    <Route path="/acl-treatment" exact component={AclTreatment} /> 
                    <Route path="/shoulder-mobility" exact component={ShoulderMobility} />  
                    */}
                </Switch>
        </Router>
export default App;