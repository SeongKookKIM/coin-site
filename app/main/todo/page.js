import Memo from "./Memo";

export default function Todo() {
  return (
    <div className="todo-list">
      <div class="popup">
        <div class="content">
          <header>
            <p>노트 작성</p>
            <span>X</span>
          </header>
          <form action="#">
            <div class="row title">
              <label>제목</label>
              <input type="text" />
            </div>
            <div class="row descripttion">
              <label>내용</label>
              <input type="text"></input>
            </div>
            <button>ADD Note</button>
          </form>
        </div>
      </div>
      <h3>메모장</h3>
      <ul>
        <li className="add-memo">
          <div>+</div>
          <p>메모 추가</p>
        </li>

        <Memo />
      </ul>
    </div>
  );
}
