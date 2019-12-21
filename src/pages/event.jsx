import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoaded: false,
        items: null
        }
    }

    componentDidMount() {
    fetch('https://api.hackillinois.org/event/')
        .then( res => res.json() )
        .then( json => {
            this.setState({ 
                isLoaded: true,
                items: json
            })
        });
    }

    render() {
    
        var { isLoaded, items } = this.state;

        // PART 2:THIS IS HOW I MANAGED TO CONVERT UNIX TIME TO READABLE TIME, BUT I CAUGHT A BUG, SO I LEAVE IT COMMENTED AND GONNA FIX IT LATER
        
        // var moment = require('moment');
        // const toDate = require('normalize-date');
        // console.log(toDate(1582909200));
        // const stringifyObject = require('stringify-object');

        if (!isLoaded || items == null) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="event">
                    <ul>
                        {items.events.map(item => (
                            <li key={item.name} className="sli">
                                <h3>{item.name}</h3> <br></br>
                                <p>Description: {item.description}</p>
                                Event Type: {item.eventType}<br />
                                Time: from {item.startTime} to {item.endTime}<br></br>
                                {item.locations.map(location =>(
                                    <div key={item.name}>
                                        <p>Location: {location.description} ({location.latitude}, {location.longitude})</p>
                                    </div>
                                ))}
                                <p>Sponsor: {item.sponsor} </p>     
                            </li>
                        ))}
                    </ul>
                </div>

                // PART 2:THIS IS HOW I MANAGED TO CONVERT UNIX TIME TO READABLE TIME, BUT I CAUGHT A BUG, SO I LEAVE IT COMMENTED AND GONNA FIX IT LATER

                // <div className="event">
                //     <ul>
                //         {items.events.map((item) => {
                //             const stringItem = stringifyObject(item);
                //             return (
                //             <li key={item.name} className="sli">
                //                 <h3>{item.name}</h3> <br></br>
                //                 <p>Description: {item.description}</p>
                //                 Event Type: {item.eventType}<br />
                //                 Time: from {toDate(stringItem.startTime)} to {item.endTime}<br></br>
                //                 {item.locations.map(location =>(
                //                     <div key={item.name}>
                //                         <p>Location: {location.description} ({location.latitude}, {location.longitude})</p>
                //                     </div>
                //                 ))}
                //                 <p>Sponsor: {item.sponsor} </p>     
                //             </li>
                //         )})}
                //     </ul>
                // </div>
            )
        };
    }
}

export default Event;