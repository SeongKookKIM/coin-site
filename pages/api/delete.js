import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  //   console.log(session);
  if (요청.method == "POST") {
    const db = (await connectDB).db("coin");
    let find = await db
      .collection("memo")
      .findOne({ _id: new ObjectId(요청.body) });
    // console.log(find);
    if (session.user.name == find.name) {
      let result = await db
        .collection("memo")
        .deleteOne({ _id: new ObjectId(요청.body) });
      return 응답.status(200).redirect(302, "/main/todo");
    } else {
      return 응답.status(400).json("삭제 권한이 없습니다.");
    }
  }
}
