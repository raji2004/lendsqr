import  "./input.scss";

export interface InputProps {
    labelName?: string;
    id?: string;
    onChange?: React.ChangeEventHandler;
    placeholder: string;
    type: 'email'|'password'|'text';
    className?: string;
}

export const Input: React.FC<InputProps> = ({ labelName, ...rest }) => {
    const { id, className } = rest;
    return(
        <div className='inputContainer'>
           
            <input className={className} {...rest}/>
        </div>
    )
}