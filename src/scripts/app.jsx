import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar.jsx';
import MyInfo from './MyInfo/MyInfo.jsx';
import Research from './Research/Research.jsx';
import Teaching from './Teaching/Teaching.jsx';
import CV from './CV/CV.jsx';
import './app.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'home'
        };
    }

    render() {
        const { currentPage } = this.state;

        return (
            <div className='main-container'>
                <Router>
                    <div className='nav-container'>
                        <a href='#' onClick={() => this.setState({ currentPage: 'home' })} className={currentPage == 'home' ? 'active' : ''}>Home</a>
                        <a href='#' onClick={() => this.setState({ currentPage: 'research' })} className={currentPage == 'research' ? 'active' : ''}>Research</a>
                        <a href='#' onClick={() => this.setState({ currentPage: 'teaching' })} className={currentPage == 'teaching' ? 'active' : ''}>Teaching</a>
                        <a href='#' onClick={() => this.setState({ currentPage: 'cv' })} className={currentPage == 'cv' ? 'active' : ''}>CV</a>
                    </div>
                    <div className='content-container'>
                        <div className='left-container inline-top'>
                            <Avatar />
                        </div>
                        <div className='right-container inline-top'>
                            {
                                currentPage == 'research' ? <Research />
                                    : currentPage == 'teaching' ? <Teaching />
                                        : currentPage == 'cv' ? <CV /> : <MyInfo />
                            }
                        </div>
                    </div>
                </Router>
            </div>
        );
        /*
            return (
                <div className='main-container'>
                    <Router>
                        <div className='nav-container'>
                            <a >Home</a>
                            <NavLink to='/' isActive={() => window.location.pathname === '/'}>Home</NavLink>
                            <NavLink to='/research'>Research</NavLink>
                            <NavLink to='/teaching'>Teaching</NavLink>
                            {<NavLink to='/experience'>Experience</NavLink>}
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
                                {<Route path='/experience' component={Experience} />}
                                <Route path='/cv' component={CV} />
                            </div>
                        </div>
                    </Router>
                    <Route exact path='/' component={MyInfo} />
                    <Route path='/research' component={Research} />
                    <Route path='/teaching' component={Teaching} />
                    {<Route path='/experience' component={Experience} />}
                    <Route path='/cv' component={CV} />
                </div>
            );
        */
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
