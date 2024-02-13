import ActiveChat from "@/components/ActiveChat";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white flex flex-row">
      <div className=" w-60 flex flex-col items-center">
        <div className="p-2 bg-deluge-200 w-60">ActiveChat</div>
        <div className="h-1 w-60"></div>
        <ActiveChat></ActiveChat>
      </div>
      {children}
    </div>
  );
}
