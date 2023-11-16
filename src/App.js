/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let post = "피자 맛집"; //자료 잠깐 저장할 땐 변수와 state사용
  // 변수와는 달리 값이 변경되면 자동 렌더링이 가능함
  let [글제목, b] = useState("햄버거 메뉴 추천");
  //온갖거 스테이트 사용 X
  let [logos, setBlog] = useState(["블로그임 ㅎㅇ", "리액트독학", "뭐먹지"]);

  let [like, setLike] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "36px" }}>{글제목}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...logos].sort((a, b) => a.localeCompare(b, "ko"));
          setBlog(copy);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...logos]; // ... 객체를 가져오는 문법(["블로그임 ㅎㅇ", "리액트독학", "뭐먹지"]). 이 때, 대괄호가 해제되면서 배열의 주소도 달라짐.(destructuring) deep copy
          if (copy[0] === "카페야 꺼져") copy[0] = "블로그임";
          else copy[0] = "카페야 꺼져";
          setBlog(copy);
        }}
      >
        눌러봥
      </button>
      <div className="list">
        <h4>
          {logos[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
            style={{ cursor: "pointer" }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>11월 15일 발행</p>
      </div>

      <div className="list">
        <h4>
          {logos[1]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
            style={{ cursor: "pointer" }}
          ></span>
        </h4>
        <p>11월 15일 발행</p>
      </div>
      <div className="list">
        <h4>
          {logos[2]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
            style={{ cursor: "pointer" }}
          ></span>
        </h4>
        <p>11월 15일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
