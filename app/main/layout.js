import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Logout from "../LogoutBtn";

export default async function Layout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <div className="main-wrapper">
      <div className="top-nav">
        <span>{session.user.name}</span>
        <p>님 반갑습니다!</p>
        {session ? <Logout /> : <div>로그인 후 사용해주세요</div>}
      </div>
      {children}
    </div>
  );
}
