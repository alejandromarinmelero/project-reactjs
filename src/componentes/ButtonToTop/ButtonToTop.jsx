import React, {useEffect} from 'react'
import { useState } from 'react';
import './style.scss';

const ButtonToTop = () => {

    const [scroll, setScroll] = useState();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scroll]);


  return (
    <div onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }} className={window.scrollY > 200 ? 'to-top' : 'hide-to-top'}>
        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sort-up.png" alt='top'/>
    </div>
  )
}

export default ButtonToTop