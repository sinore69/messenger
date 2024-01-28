import ActiveChat from "@/components/ActiveChat";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-gray-400 flex flex-row">
      <div className=" w-2/12 flex flex-col items-center">
        <div className="p-2">ActiveChat</div>
        <ActiveChat></ActiveChat>
      </div>
      {children}
    </div>
  );
}
