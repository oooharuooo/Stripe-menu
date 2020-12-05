import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from "./context";

const Navbar = () => {
  const {openNavBar,openSubmenu,closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const text = e.target.textContent
    openSubmenu(text);
  }
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
				<li>
					<button
						className="link-btn"
						onMouseOver={displaySubmenu}
						// onMouseLeave={closeSubmenu}
					>
						products
					</button>
				</li>
				<li>
					<button
						className="link-btn"
						onMouseOver={displaySubmenu}
						// onMouseLeave={closeSubmenu}
					>
						developers
					</button>
				</li>
				<li>
					<button
						className="link-btn"
						onMouseOver={displaySubmenu}
						// onMouseLeave={closeSubmenu}
					>
						company
					</button>
				</li>
			</ul>

			<button className="btn signin-btn" onMouseOver={openSubmenu}>
				Sign in
			</button>
		</nav>
	);
}

export default Navbar
