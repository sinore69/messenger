import ActiveChat from "@/components/ActiveChat";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white flex flex-row">
      <div className=" w-60 flex flex-col items-center">
        <div className="p-2 bg-deluge-200 lg:w-60 sm:w-48">ActiveChat</div>
        <div className="h-1 lg:w-60 sm:w-48"></div>
        <ActiveChat></ActiveChat>
      </div>
      {children}
    </div>
  );
}
