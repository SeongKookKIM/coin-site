import BackBtn from "@/app/BackBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function Edit(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db("coin");
  let result = await db
    .collection("memo")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="edit">
      <div className="content">
        <header>
          <p>메모 수정</p>
        </header>
        <form action="/api/edit" method="POST">
          <div className="row title">
            <label>제목</label>
            <input name="title" defaultValue={result.title}></input>
          </div>
          <div className="row descripttion">
            <label>내용</label>
            <textarea
              name="description"
              defaultValue={result.description}
            ></textarea>
          </div>
          <input
            style={{ display: "none" }}
            type="text"
            name="name"
            defaultValue={session.user.name}
          ></input>
          <input
            style={{ display: "none" }}
            type="text"
            name="date"
            defaultValue={`${new Date().getFullYear()}년 ${
              new Date().getMonth() + 1
            }월 ${new Date().getDate()}일`}
          ></input>
          <input
            style={{ display: "none" }}
            name="_id"
            defaultValue={result._id.toString()}
          ></input>
          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
}
