import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Sesssion {
    user: {
      message: string;
      token: string;
    };
  }
}
