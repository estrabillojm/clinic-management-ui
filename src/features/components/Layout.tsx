
interface LayoutProps {
    Navbar: React.ReactElement,
    Sidebar: React.ReactElement,
    Header: React.ReactElement,
    Content: React.ReactElement,
}

const Layout: React.FC<LayoutProps> = ({Navbar,Sidebar,Header,Content}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <section className="w-full z-20 top-0 start-0 border-red-400">
            {Navbar}
        </section>
        <div className="flex flex-col">
            <section className="ml-[14em] mt-20 flex flex-col">
                {Header}
                {Content}
            </section>
            <section className="">
                {Sidebar}
            </section>
        </div>
    </div>
  )
}

export default Layout