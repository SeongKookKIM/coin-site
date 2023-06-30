import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(400).json("제목을 적어주세요");
    } else if (요청.body.description == "") {
      return 응답.status(400).json("내용을 적어주세요.");
    }

    const db = (await connectDB).db("coin");
    let result = await db.collection("memo").insertOne(요청.body);
    return 응답.status(200).redirect(302, "/main/todo");
  }
}
