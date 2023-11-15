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
      {/* 상단 nav */}
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "36px" }}>{logos}</h4>
      </div>
      {logos.map((logo) => {
        return (
          <div className="list">
            <h4>
              {logo}
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
        );
      })}
    </div>
  );
}

export default App;
