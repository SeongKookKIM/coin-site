import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("coin");
  let find = await db
    .collection("memo")
    .findOne({ _id: new ObjectId(요청.body._id) });
  let change = { title: 요청.body.title, description: 요청.body.description };
  console.log(요청.body);

  if (요청.method == "POST") {
    if (find.name == 요청.body.name) {
      let result = await db
        .collection("memo")
        .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: change });

      응답.status(200).redirect(302, "/main/todo");
    } else {
      return 응답.status(400).json("수정 권한이 없습니다");
    }
  }
}
