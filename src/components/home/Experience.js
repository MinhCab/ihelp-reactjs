import React, { useState, useEffect } from 'react'

function Experience() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [event, setEvents] = useState([]);

    const fetchItems = async () => {
        const events = await (await fetch('https://fortnite-api.com/v2/news/stw')).json();
        console.log(events.data.messages)
        setEvents(events.data.messages)
    }

    return (
        <div className="gtco-section gtco-products">
            <div className="gtco-container">
                <div className="row row-pb-sm">
                    <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                        <h2>Các sự kiện đang diễn ra</h2>
                        <p>Hiện tại đang có những sự kiện đang và sắp được tổ chức trên hệ thống</p>
                    </div>
                </div>
                <div className="row row-pb-md">
                    <div className="col-md-4 col-sm-4 animate-box">
                        {event.map(e => (
                            <a key={e.title} href="#" className="gtco-item two-row bg-img " style={{ backgroundImage: 'url('+e.image+')' }}>
                                <div className="overlay">
                                    <i className="ti-arrow-top-right" />
                                    <div className="copy">
                                        <h3>{e.title}</h3>
                                        <p>{e.body}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p><a href="/events" className="btn btn-special">Xem tất cả các sự kiện</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
