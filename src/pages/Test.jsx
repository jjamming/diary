import './test.css'
import { useNavigate } from 'react-router-dom';
const Test = () => {
    const nav = useNavigate();

    const onClickButton = () => {
        nav('/new')
    }
    const onClickHome = () => {
        nav('/');
    }
    return (
       
        <>
         <div className='Header'>
            <p className='world-peas' onClick={onClickHome}>World Peas</p>
            <p className='text'onClick={onClickButton}>Shop</p>
            <p className='text'onClick={onClickButton}>Newstand</p>
            <p className='text'onClick={onClickButton}>Who we are</p>
            <p className='text'onClick={onClickButton}>My profile</p>
            <button className='Cart'>Basket (3)</button>
        </div>
        <p className='Main'>We’re farmers, purveyors, and eaters of organically grown food.</p>
        </>
    )
}

export default Test;