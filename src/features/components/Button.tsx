export enum btnColor {
    success = 'cmssuccess',
    danger = 'red',
    default = 'dark'
}

interface buttonProps {
    text: string;
    color: btnColor;
    type?: "button" | "submit";
    action?: () => void;
}

export const Button: React.FC<buttonProps> = ({text, action, type="button"}:buttonProps) => {
    return (
        <button 
        type={type}
        className={`focus:outline-none text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-500-600 dark:hover:bg-green-500-700 dark:focus:ring-green-500-800`}
        onClick={action}
        >{text}</button>
    )
}