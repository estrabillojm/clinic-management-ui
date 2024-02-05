export enum btnColor {
    success = 'cmssuccess',
    danger = 'red',
    default = 'dark'
}

interface buttonProps {
    text: string;
    color: btnColor;
    action?: () => void;
}

export const Button: React.FC<buttonProps> = ({text,color}:buttonProps) => {
    return (
        <button type="button" className={`focus:outline-none text-white bg-${color} hover:bg-${color} focus:ring-4 focus:ring-${color} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}>{text}</button>
    )
}