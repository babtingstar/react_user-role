// axios. 작성해썬 기능ㅇㄹ 모아서 설정한 다음 각 jsx 파일로 전달

//                              스프링부터 실행 포트 restcontroller 에서 requestMapping 에서 작성한 api 를 그대로 작성
import axios from "axios";

const API_POST_URL = "http://localhost:8080/api/posts";

/*
매개변수는 전달값등 값을 기능 내에서 사용할 수 있도록 설정한 이름일 뿐이기 때문에
postId 가 아니라 abc, apple, xyz 와 같은 이름으로 작성 후 {}
 */
updatePost: function (postId, postData, callback, errorCallback) {
    axios.put(${API_POST_URL}/${postId}, postData, {
    headers: { "Content-Type": "application/json" }
})
.then(response => callback(response.data))
    .catch(error => errorCallback(error));
},

const apiService = {
    // 외부에서 사용할 메서드 명칭 기능설정 (파라미터값){기능작성}
    getAllPosts:
        function(setPosts, setErr) {
            axios
                .get(API_POST_URL)
                .then(
                    (res) => setPosts(res.data)
                )
                .catch(
                    (err) => {
                        alert("게시물을 불러오는 중 오류가 발생했습니다.");
                        setErr("게시판 목록 보기 실패");
                        console.log("err 문제 개발자가 확인하기 : " + err);
                    }
                )
        }

}