import React, {useState} from 'react'
import Navbar from './home-components/Navbar';
import Sidebar from './home-components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BasicUI from './basic-ui/BasicUI';
import CardsHome from './cards/CardsHome';
import ButtonsHome from './buttons/ButtonsHome';
import FormsHome from './forms/FormsHome';
import TablesHome from './tables/TablesHome';
import contentHome from './content/contentHome';
import Introduction from './Introduction';
import './App.css'

function App() {
  const [sidebar, setSidebar] = useState(false)
    return (
        <div>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <br />
            <div className="main-container">
                <Sidebar sidebar={sidebar} />
                <div className="body-container p-6">
                    <Router>
                        <Switch>
                            <Route path='/components' component={BasicUI}/>
                            <Route path='/cards' component={CardsHome}/>
                            <Route path='/buttons' component={ButtonsHome}/>
                            <Route path='/forms' component={FormsHome}/>
                            <Route path='/tables' component={TablesHome}/>
                            <Route path='/content' component={contentHome}/>
                            <Route path='/' component={Introduction}/>
                            <Route path='/intro' component={Introduction}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default App;
