const Footer = () => {
    return (
        <footer id="gtco-footer" className="gtco-section" role="contentinfo">
            <div className="gtco-container">
                <div className="row row-pb-md">
                    <div className="col-md-8 col-md-offset-2 gtco-cta text-center">
                        <h3>Sẵn sàng cho một Việt Nam tương trợ</h3>
                        <p><a href="/contact" className="btn btn-white btn-outline">Liên hệ với chúng tôi</a></p>
                    </div>
                </div>
                <div className="row row-pb-md">
                    <div className="col-md-4 gtco-widget gtco-footer-paragraph">
                        <h3>iHelp</h3>
                        <p>Hệ thống được phát triển bởi một nhóm đồ án ngành Kỹ Thuật Phần Mềm đến từ trường đại học FPT - Hồ Chí Minh</p>
                    </div>
                    <div className="col-md-4 gtco-footer-link">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="gtco-list-link">
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><a href="/about">Giới thiệu</a></li>
                                    <li><a href="/events">Sự kiện</a></li>
                                    <li><a href="/services">Dịch vụ</a></li>
                                    <li><a href="/contact">Liên hệ</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    <a href="tel://1234567890">+1 234 4565 2342</a> <br />
                                    <a href="#">info@domain.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 gtco-footer-subscribe">
                        <form className="form-inline">
                        <p>Nhận thông tin từ chúng tôi:</p>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                                <input type="email" className="form-control" id="subcriptionEmail" placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="gtco-copyright">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <p><small>© 2021 iHelp Team, FPT University - HCM Campus. </small></p>
                        </div>
                        <div className="col-md-6 text-right">
                            <p><small>Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> </small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}


export default Footer;
