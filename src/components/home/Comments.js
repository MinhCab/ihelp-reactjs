import React, { useState, useEffect } from 'react'

function Comments() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [comment, setComments] = useState([])

    const fetchItems = async () => {
        const comments = await (await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')).json();
        console.log(comments)
        setComments(comments)
    }

    return (
        <div className="gtco-section gtco-testimonial gtco-gray">
            <div className="gtco-container">
                <div className="row row-pb-sm">
                    <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                        <h2>Đánh giá từ người dùng</h2>
                        <p>Những lời tâm huyết và đóng góp dành cho chúng tôi sau khi nghe ý tưởng và trải nghiệm</p>
                    </div>
                </div>
                <div className="row">
                    <div className="animate-box">
                        {comment.map(com => (
                            <div className="col-md-6 col-sm-6" key={com.id}>
                                <div className="gtco-testimony gtco-left" >
                                    <div><img src="assets/images/person_1.jpg" alt="" /></div>
                                    <blockquote>
                                        <p>“{com.body}” <cite className="author">— {com.email}</cite></p>
                                    </blockquote>
                                </div>
                            </div>
                        ))};
                </div>
                </div>
            </div>
        </div>
    );
}


export default Comments;
