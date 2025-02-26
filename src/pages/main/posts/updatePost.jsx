import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UpdatePost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("일반");
    const [message, setMessage] = useState(null);

    // PostDetail 에서 작성한 것 처럼
    // 수정할 내용에 들어갈 기존 값 불러오기
    useEffect(() => {
        apiService.getPostById(postId,
            (data) => {
                setPost(data);
                setTitle(data.postTitle);
                setContent(data.postContent);
                setCategory(data.postCategory);
            }
        )
    }, [])

    // 수정 버튼을 눌렀을 때 실행할 기능 생성
    const handleUpdate = () => {
        const updateContent = {
            // controller DTD 명칭 : react 에서 value 값에 들어가 있는 명칭
            postId : postId,
            userId : post.userId,
            postTitle : title,
            postContent : content,
            postCategory: category,
            postStatus : "XX",
        }

    }

    return (
        <div className="container">
            <h2>게시물 수정</h2>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="일반">일반</option>
                <option value="공지사항">공지사항</option>
                <option value="질문">질문</option>
                <option value="후기">후기</option>
            </select>

            <button onClick={handleUpdate}>수정</button>
        </div>
    )
}

export default UpdatePost;