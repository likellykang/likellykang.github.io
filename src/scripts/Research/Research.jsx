import React from 'react';
import ReactDOM from 'react-dom';

export default class Research extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const titleStyle = {
            fontSize: '24px',
            marginBottom: 20
        };
        const paperStyle = {
            marginBottom: 20
        };
        const paperTitleStyle = {
            fontSize: '20px'
        };

        return (
            <div>
                <div className='orange-text' style={titleStyle}>Working Paper:</div>
                <div style={paperStyle}>
                    <i style={paperTitleStyle}> “A new class of unimodal, asymmetric, heavy-tailed densities with applications to regression and time-series models” </i>
                    <div>Li Kang, Stephen Walker, and Paul Damien.</div>
                </div>
                <div style={paperStyle}>
                    <i style={paperTitleStyle}> “Multivariate generalization on Gamma mixture of Uniforms” </i>
                    <div>Li Kang, Stephen Walker, and Paul Damien.</div>
                </div>
            </div>
        );
    }
}
