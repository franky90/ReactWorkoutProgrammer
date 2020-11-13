import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./../components/pages/Home";
import ContactUs from "./../components/pages/ContactUs";
// import SignUp from "./../components/pages/SignUp";
import Join from './pages/Join/Join'
import Login from './pages/Login'
import WorkoutCreatorRegular from "./pages/WorkoutCreator/WorkoutCreatorRegular"
import WorkoutCreatorMenu from "./pages/WorkoutCreator/WorkoutCreatorMenu"

// import { WorkoutTable } from "./../components/pages/WorkoutTable";
import TrainingsMenu from "./../components/pages/Trainings/TrainingsMenu";
import TrainingsSplit from "./../components/pages/Trainings/TrainingsSplit";
const App = () => <Router>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/workout-creator" exact component={WorkoutCreatorMenu} /> 
                    <Route path="/workoutcreator-regular" exact component={WorkoutCreatorRegular} /> 
                    <Route path="/trainings-split" exact component={TrainingsSplit} />
                    <Route path="/trainings" exact component={TrainingsMenu} />
                    <Route path="/contact-us" exact component={ContactUs} /> 
                    <Route path="/join" exact component={Join} /> 
                    <Route path="/log-in" exact component={Login} /> 
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