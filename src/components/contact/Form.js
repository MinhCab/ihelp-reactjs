const Form = () => {
    return (
        <>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                            <h2>Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis, rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" />
                                    <textarea name id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn btn-special" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 col-md-push-1">
                            <div className="gtco-contact-info">
                                <h3>Our Address</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul>
                                    <li className="address">198 West 21th Street, Suite 721 New York NY 10016</li>
                                    <li className="phone"><a href="tel://1234567890">1235 2355 980</a></li>
                                    <li className="email"><a href="#">info@yoursite.com</a></li>
                                    <li className="url"><a href="#">www.yoursite.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Form;