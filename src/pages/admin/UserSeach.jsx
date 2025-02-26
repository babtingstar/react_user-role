import {useState} from "react";
import axios from "axios";

const UserSearch = () => {
    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState([]);
    const searchUser = () => {
        if (!userName.trim()) {
            alert("검색할 이름을 입력하세요.");
            return;
        }
        axios
            .get("http://localhost:8080/" + userName)
            .then(res => {
                    setUsers(res.data);
                }
            )
            .catch(err => {
                    alert("백엔드 주소와 연결할 수 없는 상태입니다 : " + err);
                    console.log(err);
                }
            );
    }

    return (
        <div className="usersearch-container">
            <h2>사용자 검색</h2>
            <input type="text"
                   value={userName}
                   placeholder="검색할 이름을 입력하세요"
                   onChange={(e) => setUserName(e.target.value)}/>

            <ul>
                {users.length > 0
                    ?
                    (users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> ({user.userEmail}) - 역할 {user.userRole}
                        </li>
                    )))
                    : null
                }


                {"검색 결과가 "
                    ?
                    (<div>존재할 경우</div>)
                    :
                    (<div>존재하지 않습니다.</div>)
                }
            </ul>
        </div>
    )
}

export default UserSearch;