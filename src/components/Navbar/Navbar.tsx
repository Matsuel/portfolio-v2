import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo'

const Navbar = () => {
    const [linkSelected, setLinkSelected] = useState(-1);

    const handleLinkClick = (index:number) => {
        if (linkSelected === index) {
          setLinkSelected(-1);
        } else {
          setLinkSelected(index);
        }
      };

    const linksHref=["#home","#about","#projects","#contact"]
    const linksName=["Home","About","Projects","Contact"]

  return (
    <div className='navbar-wrapper'>
        <div className="navbar-logo-wrapper">
            <a href="/" className="navbar-logo">
                <Logo />
            </a>
        </div>
        <div className="navbar-links">
            {[0,1,2,3].map((index)=>(
                <div className="link" key={index}>
                    <a href={linksHref[index]}
                    className={`a-link ${linkSelected === index ? 'active-link' : ''}`}
                    onClick={() => handleLinkClick(index)}
                    >
                        <span className='num-link'>0{index+1}.</span> {linksName[index]}
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Navbar