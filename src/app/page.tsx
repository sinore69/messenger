"use client";
import { BiLogoMeta } from "react-icons/bi";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <BiLogoMeta className="pl-1" size={100} />
          <div className="pt-40">
            <button
              className="text-2xl "
              onClick={() => {
                router.push("/home/chats/none");
              }}
            >
              Click to sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
