import React from "react";
import './Login.css';

function Login(){

    return(
        <div id="loginpage">
        <div id="advertise"></div>
        <div>
          <div id="loginbox">
            <h1>Seongsutagram</h1>
            <form id="loginForm">
              <input
                required
                className="inputbox"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                required
                className="inputbox"
                type="password"
                placeholder="비밀번호"
              />
              <button className="loginbtn">로그인</button>
            </form>
            <p>또는</p>
            <span>Facebook으로 로그인</span>
            <span>비밀번호를 잊으셨나요?</span>
          </div>
          <div id="signInBox">
            <span>계정이 없으신가요?</span>
            <span>가입하기</span>
          </div>
          <div id="downloadBox">
            <span>앱을 다운로드하세요.</span>
            <div id="downloadBtn">
              <div className="downloadbox">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                />
              </div>
              <div className="downloadbox">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Login;