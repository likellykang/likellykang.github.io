import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar.jsx';
import MyInfo from './MyInfo/MyInfo.jsx';
import Research from './Research/Research.jsx';
import Teaching from './Teaching/Teaching.jsx';
import Experience from './Experience/Experience.jsx';
import CV from './CV/CV.jsx';
import './app.css';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='main-container'>
                <Router>
                    <div className='nav-container'>
                        <NavLink to='/' isActive={() => window.location.pathname === '/'}>Home</NavLink>
                        <NavLink to='/research'>Research</NavLink>
                        <NavLink to='/teaching'>Teaching</NavLink>
                        {/*<NavLink to='/experience'>Experience</NavLink>*/}
                        <NavLink to='/cv'>CV</NavLink>
                    </div>
                    <div className='content-container'>
                        <div className='left-container inline-top'>
                            <Avatar />
                        </div>
                        <div className='right-container inline-top'>
                            <Route exact path='/' component={MyInfo} />
                            <Route path='/research' component={Research} />
                            <Route path='/teaching' component={Teaching} />
                            {/*<Route path='/experience' component={Experience} />*/}
                            <Route path='/cv' component={CV} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
