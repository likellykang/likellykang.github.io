import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';

export default class Avatar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div className='my-avatar'></div>
                <div className='my-name'>Li (Kelly) Kang</div>
                <div className='my-contact'>
                    <div>
                        <div className='inline-top'>Address:</div>
                        <div className='inline-top'>
                            <div>2317 Speedway</div>
                            <div>Austin, TX 78712</div>
                        </div>
                    </div>
                    <div>
                        <div className='inline-top'>Office:</div>
                        <div className='inline-top'>GDC 7.416b</div>
                    </div>
                    <div>
                        <div className='inline-top'>Email:</div>
                        <div className='inline-top'>likang@utexas.edu</div>
                    </div>
                    {/*
                        <div>
                            <div className='inline-top'>LinkedIn:</div>
                            <div className='inline-top'>
                                <a href='https://www.linkedin.com/in/li-kang-30057946/' style={{
                                    wordBreak: 'break-all'
                                }}>https://www.linkedin.com/in/li-kang-30057946/</a>
                            </div>
                        </div>
                    */}

                </div>
            </>
        );
    }
}
