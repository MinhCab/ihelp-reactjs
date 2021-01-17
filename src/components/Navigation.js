const Navigation = () => {
    return (
        <nav className="gtco-nav" role="navigation">
            <div className="gtco-container">
                <div className="row">
                    <div className="col-sm-2 col-xs-12">
                        <div id="gtco-logo"><img src="assets/images/logo.png" alt="Navigation bar mini logo"/></div>
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                        <ul>
                            <li className=""><a href="/">Trang chủ</a></li>
                            
                            <li><a href="/about">Giới thiệu</a></li>

                            <li className="has-dropdown">
                                <a href="/events">Sự kiện</a>
                                <ul className="dropdown">
                                    <li><a href="#">Động vật</a></li>
                                    <li><a href="#">Học đường</a></li>
                                    <li><a href="#">Trẻ em</a></li>
                                    <li><a href="#">Thiên tai</a></li>
                                    <li><a href="#">Khoa học công nghệ</a></li>
                                    <li><a href="#">Cộng đồng</a></li>
                                    <li><a href="#">Môi trường</a></li>
                                    <li><a href="#">Nghệ thuật & văn hóa</a></li>
                                </ul>
                            </li>

                            <li className="has-dropdown">
                                <a href="/services">Dịch vụ</a>
                                <ul className="dropdown">
                                    <li><a href="#">HTML5</a></li>
                                    <li><a href="#">CSS3</a></li>
                                    <li><a href="#">Sass</a></li>
                                    <li><a href="#">jQuery</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact">Liên hệ</a></li>
                            <li className="has-dropdown">
                                <a href="/login">Đăng nhập</a>
                                <ul className="dropdown">
                                    <li><a href="/register">Đăng kí</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}


export default Navigation;
