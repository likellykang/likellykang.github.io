import React from 'react';
import ReactDOM from 'react-dom';

export default class MyInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const titleStyle = {
            fontSize: '24px',
            marginBottom: 10
        };

        return (
            <div>
                <div className='orange-text' style={titleStyle}>My Info</div>
                <div>
                    I am a PhD student at the University of Texas at Austin majoring in Statistics and Data Science.
                    My research interests are Bayesian parametric and non-parametric modeling, skewed density constructions and estimations,
                    financial statistics modeling, Time series analysis, and Bayesian machine learning.
                </div>
                <div style={{ marginTop: 10 }}>
                    Before joining the University of Texas at Austin, I was an undergraduate at the Purdue University majored in Actuarial science and applied statistics.
                </div>
                <div  className='orange-text' style={{ marginTop: 40, ...titleStyle }}>News</div>
                <div>
                    I’m going to present my work,
                    <i> “A new class of unimodal, asymmetric, heavy-tailed densities with applications to regression and time-series models” </i>
                    at 2019 Joint Statistical Meetings, and I am grateful to receive a travel award to the conference.
                </div>
            </div>
        );
    }
}
