import Link from "next/link";
import SignInButton from "./SignInButton";
import { getAuthSessions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSessions();
  return (
    <nav className="fixed inset-x-0 top-0 backdrop-blur-sm z-[10] h-fit border-b border-zinc-200 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
        <Link
          href="/home/gallery"
          className="items-center hidden gap-2 sm:flex"
        >
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <p className="text-3xl font-bold">Emplate</p>
          </div>
        </Link>
        <div className="flex items-center">
          <Link href="/home/gallery" className="hover:underline">
            Gallery
          </Link>
          <span className="border border-zinc-500 h-[20px] mx-2 rounded-full rotate-12" />
          {session?.user && (
            <>
              <Link href="/home/create" className="hover:underline">
                Create Course
              </Link>
              <span className="border border-zinc-500 h-[20px] mx-2 rounded-full rotate-12" />

              <Link href="/home/settings" className="mr-3 hover:underline">
                Settings
              </Link>
            </>
          )}
          <ThemeToggle className="mr-3" />
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton session={session} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
