import { Breadcrumb } from "./Breadcrumb"

interface headerProps {
  title: string;
  description: string;
  actions?: React.ReactNode
}

export const Header = ({...props}:headerProps) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
        <div className="flex justify-between items-center border-b border-gray-400">
          <div className="flex flex-col">
            <span className="text-3xl">{props.title}</span>
            <span className="text-md text-gray-500 italic">{props.description}</span>
          </div>
          <div>
            {props.actions && props.actions}
            
          </div>
        </div>
        
        <hr className="h-px border-0"></hr>
        <Breadcrumb title={props.title}/>
    </div>
  )
}
