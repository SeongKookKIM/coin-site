import Date from "./date";
import Clock from "./Clock";
import Btn from "./Btn";

export default async function Home() {
  return (
    <div className="home">
      <Btn name={"로그인"} go={"/login"} />
      <Btn name={"회원가입"} go={"/register"} />
      <Date />
      <Clock />
    </div>
  );
}
