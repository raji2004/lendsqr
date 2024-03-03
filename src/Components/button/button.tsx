import  './button.scss'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset',
    children?: React.ReactNode
    text?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, type, children,style }) => {
    return (
        <button
            type={type}
            style={style}
            className={`${className} ${"button"}`}
            onClick={onClick}>
            {!children ? text : children}
        </button>
    )
}