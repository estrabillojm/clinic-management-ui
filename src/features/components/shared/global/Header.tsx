import { Breadcrumb } from "./Breadcrumb"

interface headerProps {
  title: string;
  description: string;
  actions?: React.ReactNode
}

export const Header = ({...props}:headerProps) => {
  return (
    <div className="mb-4 flex flex-col gap-2 border-20">
        <div className="flex justify-between">
          <span className="text-3xl">{props.title}</span>
          <div>
            {props.actions && props.actions}
          </div>
        </div>
        <span className="text-md text-gray-500 italic">{props.description}</span>
        <hr className="h-px border-0"></hr>
        <Breadcrumb title={props.title}/>
    </div>
  )
}
