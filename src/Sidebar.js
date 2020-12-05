import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

import {useGlobalContext} from "./context"

const Sidebar = () => {
  const { toggleNavBar, closeNavBar } = useGlobalContext()
  
  return <div className={`sidebar-wrapper ${toggleNavBar && "show"}`}>
    <aside className="sidebar">
      <button className="close-btn" onClick={closeNavBar}><FaTimes /></button>
      <div className="sidebar-links">
        {sublinks.map((link, index) => <article key={index}>
          <h4>{link.page}</h4>
          <div className="sidebar-sublinks">
            {link.links.map((list, index) => {
              const {label,icon,url } = list;
                return (
                <div key={index} className="sidebar-sublinks">
                    <a href={url}>{icon}{label}</a>
                </div>
              )
            }
          )
        }
          </div>
        </article>)}
      </div>
    </aside>
  </div>
}

export default Sidebar
