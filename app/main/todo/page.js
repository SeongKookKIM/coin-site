import AddMemo from "./AddMemo";
import Memo from "./Memo";
import Popup from "./Popup";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Todo() {
  let session = await getServerSession(authOptions);

  return (
    <div className="todo-list">
      <Popup sessionName={session.user.name} />
      <h3>공동 메모장</h3>
      <ul>
        <AddMemo />
        <Memo />
      </ul>
    </div>
  );
}
