import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Logout from "../LogoutBtn";
import Link from "next/link";

export default async function Layout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <div className="main-wrapper">
      <div className="top-nav">
        <nav>
          <ul>
            <li>
              <Link href="/main">코인</Link>
            </li>
            <li>
              <Link href="/main/movie">영화</Link>
            </li>
            <li>
              <Link href="/main/gallery">갤러리</Link>
            </li>
            <li>
              <Link href="/main/todo">To Do</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-user">
          <span>{session.user.name}</span>
          <p>님 반갑습니다!</p>
          {session ? <Logout /> : <div>로그인 후 사용해주세요</div>}
        </div>
      </div>
      {children}
    </div>
  );
}
