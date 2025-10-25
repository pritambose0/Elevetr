import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    name?: string;
    email?: string;
    profilePic?: string;
    skills?: string[];
    currentFocus?: string;
    bio?: string;
  }

  interface Session {
    user: {
      _id?: string;
      name?: string;
      email?: string;
      profilePic?: string;
      skills?: string[];
      currentFocus?: string;
      bio?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    name?: string;
    email?: string;
    profilePic?: string;
    skills?: string[];
    currentFocus?: string;
    bio?: string;
  }
}
