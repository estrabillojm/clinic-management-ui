import { Breadcrumb } from "./Breadcrumb"

export const Header = () => {
  return (
    <div className="mx-6 mb-4 flex flex-col gap-2 ml-screen border-20 border-red-800 ">
        <span className="text-3xl">Administrator</span>
        <span className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aperiam?</span>
        <Breadcrumb />
    </div>
  )
}
