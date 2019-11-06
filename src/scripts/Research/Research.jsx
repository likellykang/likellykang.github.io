import React from 'react';
import './research.css';

export default class Research extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showSkewPaper: false
        };
    }

    render() {
        const { showSkewPaper } = this.state;
        const titleStyle = {
            fontSize: '24px',
            marginBottom: 20
        };
        const paperStyle = {
            marginBottom: 20
        };
        const paperTitleStyle = {
            fontSize: '20px',
        };

        return (
            <div style={{ height: '100%' }}>
                <div className='orange-text' style={titleStyle}>Working Paper:</div>
                <div style={paperStyle}>
                    <i style={{
                        ...paperTitleStyle,
                        textDecoration: 'underline'
                    }} className='clickable-link' onClick={() => this.setState({ showSkewPaper: !showSkewPaper })}>
                        “On a transform for modeling skewness”
                    </i>
                    <div>
                        <span></span>Li Kang, Stephen Walker, and Paul Damien.</div>
                </div>
                {showSkewPaper &&
                    <iframe className='paper-iframe' src='/src/content/files/On a transform for modeling skewness_Li Kang.pdf'>
                    </iframe>
                }
                <div style={paperStyle}>
                    <i style={paperTitleStyle}> “Multivariate generalization on Gamma mixture of Uniforms” </i>
                    <div>Li Kang, Stephen Walker, and Paul Damien.</div>
                </div>
            </div>
        );
    }
}
