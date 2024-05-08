"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

type Props = {
  session: any;
};

const SignInButton = ({ session }: Props) => {
  return (
    <Button
      variant="ghost"
      onClick={() => signIn("google")}
      className="ml-[-10px] px-3"
    >
      {session ? <span>{session.user.name}</span> : "Sign In"}
    </Button>
  );
};

export default SignInButton;
