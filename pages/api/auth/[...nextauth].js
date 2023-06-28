import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        id: { label: "Id", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        let db = (await connectDB).db("coin");
        let user = await db.collection("user").findOne({ id: credentials.id });
        if (!user) {
          console.log("해당 이름은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.id = user.id;
        token.user.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: "qwer1234",
  // secret: process.env.NEXTAUTH_SECRET,
  //@npm install @next-auth/mongodb-adapter
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
