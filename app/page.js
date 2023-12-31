import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Date from "./date";
import Clock from "./Clock";
import Btn from "./Btn";
import { RedirectToMain } from "./RedirectMain";

export default async function Home() {
  let session = await getServerSession(authOptions);

  return (
    <div className="home">
      {session ? (
        <RedirectToMain />
      ) : (
        <>
          {" "}
          <Btn name={"로그인"} go={"/login"} />
          <Btn name={"회원가입"} go={"/register"} />
          <Date />
          <Clock />
        </>
      )}
    </div>
  );
}
