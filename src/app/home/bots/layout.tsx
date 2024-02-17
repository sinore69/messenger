import ActiveChat from "@/components/ActiveChat";
import BotList from "@/components/BotList";
export default function BotLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-white flex flex-row">
      <div className=" w-60 flex flex-col items-center">
        <div className="p-2 bg-deluge-200 lg:w-60 sm:w-48">Bots</div>
        <div className="h-1 lg:w-60 sm:w-48"></div>
        <BotList />
      </div>
      {children}
    </div>
  );
}
