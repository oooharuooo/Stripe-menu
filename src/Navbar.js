import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from "./context";

const Navbar = () => {
  const {openNavBar,sublinks} = useGlobalContext();

  return (
    <nav className="nav">
      
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="Logo" />
					<button className="btn toggle-btn" onClick={openNavBar}>
						<FaBars />
					</button>
				</div>
      </div>
      
			<ul className="nav-links">
				{sublinks.map((list) => (
					<li>
						<button className="link-btn">{list.page}</button>
					</li>
				))}
      </ul>
      
			{/* <button className="btn signin-btn">Sign in</button> */}
		</nav>
	);
}

export default Navbar
