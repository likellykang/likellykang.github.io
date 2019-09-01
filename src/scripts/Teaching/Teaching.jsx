import React from 'react';
import ReactDOM from 'react-dom';

export default class Teaching extends React.Component {
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
                <div className='orange-text' style={titleStyle}>Assistant Instructor:</div>
                <Entry text='Fall 2017: SDS 302 - Data Analysis for the Health Science' />
                <div className='orange-text' style={{ marginTop: 40, ...titleStyle }}>Teaching Assistant:</div>
                {
                    [
                        'Spring 2019: SDS 384 - Mathematical Statistics',
                        'Fall 2018: SDS 385 - Stat Models for Big Data',
                        'Spring 2018: SDS 321 - Intro to Prob & Stats',
                        'Summer 2017: SDS f328M - Biostatistics',
                        'Spring 2016: STA 380 - Learning Structures & Time Series',
                        'Spring 2016: BA 286T - Statistics (MBA)',
                        'Fall 2016: SDS 306 - Statistics in Market Analysis',
                    ].map((text, i) => <Entry text={text} key={i} />)
                }
            </div>
        );
    }
}

function Entry(props) {
    const style = {
        margin: '0 0 5px 40px'
    };

    return (
        <div style={style}>
            <div className='inline-top' style={{ width: 300 }}>{props.text.split(' - ')[0]}</div>
            <div className='inline-top'>{props.text.split(' - ')[1]}</div>
        </div>
    );
}
