import Sidebar from "@/components/Sidebar"
export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex flex-row gap-x-0">
        <Sidebar />
        {children}
      </section>
    )
  }