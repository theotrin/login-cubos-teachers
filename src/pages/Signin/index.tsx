import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo copy.svg';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './styles.css';


function SignIn(){
    const {handleGetToken, handleAddToken} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        try {
            if(!email){
                throw new Error('Email is required');
            }
            if(!password){
                throw new Error('Password is required');
            }
            const response = await api.post('/login',{
                email,
                password
            })

            const {accessToken} = response.data;

            handleAddToken(accessToken);
            navigate('/main');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = handleGetToken();

        if(token){
            navigate('/main')
            return
        }
    }, [])

    return(
        <div className='container container-sign-in'>
            <div className='sign-in'>
            <img src={Logo} alt='logo' />

                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <input 
                    type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                    <span>
                        Não tem cadastro?  
                        <Link to=''>Clique aqui!</Link>
                    </span>

                    <button className='btn-pink'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;