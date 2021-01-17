const Introduction = () => {
    return (
        <div className="gtco-services gtco-section">
            <div className="gtco-container">
                <div className="row row-pb-sm">
                    <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                        <h2>Mang đến những cơ hội tình nguyện</h2>
                        <p>Chúng tôi hỗ trợ việc tổ chức cũng như tham gia các sự kiện tình nguyện có quy mô trên địa bàn Việt Nam</p>
                            <p><a href="/register" className="btn btn-special">Tham gia cùng chúng tôi</a></p>
                        
                    </div>
                </div>
                <div className="row row-pb-md">
                    <div className="col-md-4 col-sm-4 service-wrap">
                        <div className="service">
                            <h3><i className="ti-pie-chart" /> Tham gia</h3>
                            <p>Bạn có thể dễ dàng đăng kí và tham gia các sự kiện kêu gọi tình nguyện trên khắp cả nước với rất nhiều hoạt động đã được kiểm duyệt qua đội ngũ của chúng tôi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 service-wrap">
                        <div className="service animate-change">
                            <h3><i className="ti-ruler-pencil" /> Tổ chức</h3>
                            <p>Bên cạnh việc tham gia, bạn cũng có thể tự tổ chức các buổi tình nguyện cần sự kêu gọi tham gia của nhiều cá nhân trên hệ thống.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 service-wrap">
                        <div className="service">
                            <h3><i className="ti-settings" /> Sử dụng dịch vụ</h3>
                            <p>Sau khi tham gia các hoạt động, bạn sẽ được nhận một số điểm tương ứng đưa vào ví của bạn. Điểm này được dùng để chi trả cho các dịch vụ tình nguyện được đăng kí trên hệ thống, hỗ trợ cho cuộc sôngs của bạn dễ dàng hơn.</p>
                        </div>
                    </div>
                    <div className="clearfix visible-md-block visible-sm-block" />
                </div>
            </div>
        </div>

    );
}


export default Introduction;
