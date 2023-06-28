import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  console.log(요청.body);
  let db = (await connectDB).db("coin");
  let findName = await db.collection("user").findOne({ name: 요청.body.name });
  let findId = await db.collection("user").findOne({ id: 요청.body.id });
  let findEmail = await db
    .collection("user")
    .findOne({ email: 요청.body.email });

  if (요청.method == "POST") {
    if (요청.body.name == "") {
      return 응답.status(400).json("이름을 적어주세요.");
    } else if (요청.body.id == "") {
      return 응답.status(400).json("아이디를 적어주세요.");
    } else if (요청.body.password == "") {
      return 응답.status(400).json("비밀번호를 적어주세요.");
    } else if (findName) {
      return 응답.status(400).json("이미 존재하는 이름입니다.");
    } else if (findId) {
      return 응답.status(400).json("이미 존재하는 아이디 입니다.");
    } else if (findEmail) {
      return 응답.status(400).json("이미 존재하는 이메일 입니다.");
    } else {
      const hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;

      await db.collection("user").insertOne(요청.body);
      응답.status(200).redirect(302, "/");
    }
  }
}
