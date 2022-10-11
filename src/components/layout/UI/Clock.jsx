import React from 'react'
import '../../../styles/Clock.css'

const Clock = () => {
    return (
        <div className='clock__wrapper'>
            <div className="clock__data">
                <div className="center">
                    <h1>10</h1>
                    <h5>Days</h5>
                </div>
                <span>:</span>
            </div>

            <div className="clock__data">
                <div className="center">
                    <h1>10</h1>
                    <h5>Hours</h5>
                </div>
                <span>:</span>
            </div>


            <div className="clock__data">
                <div className="center">
                    <h1>10</h1>
                    <h5>Minutes</h5>
                </div>
                <span>:</span>
            </div>


            <div className="clock__data">
                <div className="center">
                    <h1>10</h1>
                    <h5>Seconds</h5>
                </div>
                <span>:</span>
            </div>

        </div>
    )
}

export default Clock