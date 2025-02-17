import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Home = () => {
    const navigate = useNavigate();
    // window.location.href 처럼 자바스크립트에서 이동 경로 설정

    const [user, setUser] = useState(null);

    // 메인에서 로그인한 정보가 존재할 경우 session 에서 가져온 로그인 정보로 메인 설정

    // Java Spring Boot 에서 저장한 session 은 자바 내에만 저장이 되는 것이 아니라
    // 자신의 컴퓨터 web 에 임시 저장
    // 임시로 저장된 session 정보에 user 라는 변수 이름으로 저장된 유저가 존재한다면
    // user 라는 명칭으로 저장된 유저 정보를 getItem 을 사용해 가져오기
    // 가져온 데이터가 JSON 형식이 아니라 객체나 배열 다른 형태로 존재한다면
    // 다른 형태로 존재하는 데이터를 JSON 형식으로 parse 변환하여 유저 정보를 확인하겠다
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    return (
        <div>
            <h1>홈페이지</h1>
            {user ? <div>
                    <p> 환영합니다. {user.userName}님!</p>
                    <button>로그아웃</button>
                </div>
                :
                <div>
                    <button onClick={ () => navigate("/login")}>로그인</button>
                    <button onClick={ () => navigate("/")}>로그인</button>
                </div>}
        </div>
    )
}

export default Home;