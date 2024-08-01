// authentication api routing
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database.js";
// handler functions
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //   session
  async session({ session }) {},
  //  sign in function
  async signIn({ profile }) {
    try {
        await connectDB();
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
  },
});

// export handler
export {handler as GET , handler as POST}