
interface buttonProps {
    text: string;
    color: keyof typeof btnColor;
    action?: () => void;
}

enum btnColor {
    'success' = 'green',
    'danger' = 'red',
    'default' = 'dark'
}

export const Button = ({...props}:buttonProps) => {
    return (
        <button type="button" className={`focus:outline-none text-white bg-${btnColor[props.color]}-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>{props.text}</button>
    )
}