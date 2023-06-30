export default function Memo() {
  return (
    <li className="memo">
      <div className="memo-details">
        <p>Title</p>
        <span>내용@@@@@@@@</span>
      </div>
      <div className="memo-bottom">
        <p>작성자</p>
        <div className="memo-settings">
          <span>2023년 6월 30일</span>
          <span className="settings-origin">...</span>
          <div className="settings">
            <ol>
              <li>수정</li>
              <li>삭제</li>
            </ol>
          </div>
        </div>
      </div>
    </li>
  );
}
