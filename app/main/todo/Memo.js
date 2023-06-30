import { connectDB } from "@/util/database";
import MemoSetting from "./MemoSetting";

export default async function Memo() {
  const db = (await connectDB).db("coin");
  let result = await db.collection("memo").find().toArray();

  return (
    <>
      {result.map((it, i) => {
        return (
          <li className="memo">
            <div className="memo-details">
              <p>{it.title}</p>
              <span>{it.description}</span>
            </div>
            <div className="memo-bottom">
              <p>{it.name}</p>
              <MemoSetting date={it.date} result={result} i={i} />
            </div>
          </li>
        );
      })}
    </>
  );
}
