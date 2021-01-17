import React, { useState, useEffect } from 'react'

function Recommendations() {

    useEffect(() => {
        fetchItems()
    },[])

    const [event, setEvents] = useState([])

    const fetchItems = async () => {
        const events = await (await fetch('https://fortnite-api.com/v2/news/stw')).json();
        console.log(events.data.messages);
        setEvents(events.data.messages);
    }

    return (
        <div className="gtco-services">
            <div className="gtco-container gtco-section">
                <input type="text" className="form-control" placeholder="Tìm sự kiện đang diễn ra" />
            </div>
            <div className="gtco-container">
                {event.map(e => (
                    <div key={e.title} className="col-md-4 col-sm-4 service-wrap">
                        <div className="service">
                            <img src={e.image} width="250px" alt=""/>
                            <hr />
                            <p><a href="/details"><strong>{e.title}</strong></a></p>
                            <p>{e.body}</p>
                        </div>
                    </div>
                ))}
                    
            </div>
        </div>
    )
}

export default Recommendations;
