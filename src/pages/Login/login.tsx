import './login.scss';
import Logo from '../../assets/logo.svg';
import welcome from '../../assets/welcome.svg';
import { Button, Input } from '../../Components';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate()

  const submitForm = (e: any) => {
    e.preventDefault();
    navigate('/Home')
  }

  return (
    <div className='login'>
      <div className='left'>
        <img src={Logo} alt="" className='logo' />
        <img src={welcome} alt=""  className='img'/>
      </div>

      <form className='right' onSubmit={submitForm}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <h2>Forgot Password?</h2>
        <Button type='submit' text='Log in' />
      </form>

    </div>
  )
}