import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from "./context"

const Submenu = () => {
  
  const { toggleSubmenu, sublinks, page: { page,links} } = useGlobalContext();

  return <aside className={`submenu ${toggleSubmenu && "show"}`}>
    <section>
      <h4>{page}</h4>
      <div className="sub-menu col-4">
        {links.map((link, index) => { 
          const {label,icon,url} = link
          return <a href={url} key={index}>
            {icon} { label}
          </a>
        })}
      </div>
    </section>
  </aside>
}

export default Submenu
