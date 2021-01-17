const Form = () => {
    return (
        <div className="gtco-section">
            <div className="gtco-container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Họ & Tên</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Ngày sinh</label>
                                <input type="date" placeholder="dd/mm/yyyy" className="form-control" id="datepicker" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Số điện thoại</label>
                                <input type="number" className="form-control" id="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Mật khẩu</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Xác nhận lại mật khẩu</label>
                                <input type="password" className="form-control" id="confirmPassword" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn btn-special" value="Đăng ký" />
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-3">
                                <a className="btn btn-outline-dark" href="/googleauth" role="button" style={{ textTransform: 'none' }}>
                                    <img width="20px" style={{ marginBottom: 3, marginRight: 5 }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />Đăng kí bằng Google</a>
                            </div>
                        </div>

                        <p>Đã có tài khoản? Đăng nhập tại <a href="/login">đây</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form;
