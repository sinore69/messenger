import ActiveChat from "@/components/ActiveChat";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white flex flex-row border-l-2 border-deluge-300 ">
      <div className=" w-2/12 flex flex-col items-center">
        <div className="p-2">ActiveChat</div>
        <ActiveChat></ActiveChat>
      </div>
      {children}
    </div>
  );
}
