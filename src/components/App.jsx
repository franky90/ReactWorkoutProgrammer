import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./../components/pages/Home";
import ContactUs from "./../components/pages/ContactUs";
// import SignUp from "./../components/pages/SignUp";
import JoinPage from "./pages/Join/JoinPage";
import { GroupingProblemPage } from './pages/Groupingproblem'
import Login from "./pages/Login/Login";
import { UserDashboardPage } from "./pages/UserDashboard";

import { WorkoutCreator } from "./pages/WorkoutCreator/WorkoutCreator";
// import WorkoutCreatorRegular from "./pages/WorkoutCreator/WorkoutCreatorRegular"
// import WorkoutCreatorSupersets from "./pages/WorkoutCreator/WorkoutCreatorSupersets"
// import WorkoutCreatorGiantsets from "./pages/WorkoutCreator/WorkoutCreatorGiantsets"
// import WorkoutCreatorMenu from "./pages/WorkoutCreator/WorkoutCreatorMenu"
import TrainingsMenu from "./../components/pages/Trainings/TrainingsMenu";
import TrainingsSplit from "./../components/pages/Trainings/TrainingsSplit";
import { Loader } from "./Loader/Loader.Component";

const App = () => {

    const [isLoading, setLoadingState] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(false)
        }, 3000)//setting this for 3 seconds so we are able to see it...
    }, 
    [])

  return (<Loader isLoading={isLoading}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workout-creator" exact component={WorkoutCreator} />
          <Route path="/workout-creator/:worktype" component={WorkoutCreator} />
            {/*
                <Route path="/workoutcreator-regular" exact component={WorkoutCreatorRegular} />
                <Route path="/workoutcreator-supersets" exact component={WorkoutCreatorSupersets} />
                <Route path="/workoutcreator-giantsets" exact component={WorkoutCreatorGiantsets} />
            */}
          <Route path="/trainings-split" exact component={TrainingsSplit} />
          <Route path="/trainings" exact component={TrainingsMenu} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/join" exact component={JoinPage} />
          <Route path="/log-in" exact component={Login} />
          <Route path="/user/:username" component={UserDashboardPage} />

          <Route exact path="/groupingproblem">
            <GroupingProblemPage/>
          </Route>

          <Route path="*">
            <h1>404 not found</h1>
          </Route>
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
    </Loader>
  );
};

export default App;
