import '../css/login.css'


const LoginUser = () => {
    return ( 
        <>
           <form className="container-login">
                <div className="user-field">
                    <label htmlFor="userName"><h4>user name:</h4></label>
                    <input className="login-form" type="text" name="userName"/>
                </div>
                <div className="user-field">
                    <label htmlFor="userName"><h4>password:</h4></label>
                    <input className="login-form" type="text" name="userName"/>
                </div>
                <div className="check-submit">
                    <div className="check-user">
                        <label htmlFor="checksave"><h4>save your details?</h4></label>
                        <input className="login-check" type="checkbox" name="checksave"/>
                    </div>
                    <div className="submit-user">
                        <input className="login-btn" type="submit" value="submit" />
                    </div>
                </div>
           </form>
           
        </>
     );
}
 
export default LoginUser;