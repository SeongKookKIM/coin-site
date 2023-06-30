"use client";
export default function AddMemo() {
  function handleFade() {
    document.querySelector(".popup").classList.add("unfade");
  }

  return (
    <li className="add-memo">
      <div
        onClick={() => {
          handleFade();
        }}
      >
        +
      </div>
      <p>메모 추가</p>
    </li>
  );
}
