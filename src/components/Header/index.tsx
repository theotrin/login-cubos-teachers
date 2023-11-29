import './styles.css'
import Logo from '../../assets/logo copy.svg'
import ArrowBack from '../../assets/arrow-back.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
    showBack?: boolean;
}

function Header({showBack}: Props){
    const navigate = useNavigate();

    return(
        <header>
        {
            showBack &&
            <img src={ArrowBack} 
            alt='arrow-back' 
            className='arrow-back'
            onClick={() => navigate(-1)}
            />
        }
            <img src={Logo} alt='Logo'/>
        </header>
    )
}

export default Header;