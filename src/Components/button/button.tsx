import  './button.scss'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset',
    children?: React.ReactNode
    text?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties
    variant?: 'default'| 'outline'
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, type, children,style,variant }) => {
    return (
        <button
            type={type}
            style={style}
            className={`${className} ${variant === 'default'?"button": variant === 'outline'? 'outline':'button'}`}
            onClick={onClick}>
            {!children ? text : children}
        </button>
    )
}