import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Logout from "../LogoutBtn";

export default async function Main() {
  let session = await getServerSession(authOptions);
  return <>{session ? <Logout /> : <div>로그인 후 사용해주세요</div>}</>;
}
