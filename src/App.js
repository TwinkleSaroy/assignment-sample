import  PickupProgress from "./PickupProgress";
import Page1 from './Page1';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
  
    <Switch>
    
    <Route exact path ='/pickup in progress' component={PickupProgress}/>
     
    </Switch>
    
    <Page1 />,                                                    
    </div>
    
    
    </Router>
       
        
  );
}

export default App;
