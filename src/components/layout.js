import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import "./styles.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { slide as Menu } from 'react-burger-menu'

const CustomLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <AnchorLink offset="-100" className="nav-links" to={props.to}>{props.children}</AnchorLink>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
       
        <header style={{marginBottom: `1rem`,height: `3.5rem`, position: "sticky", top: 0, zIndex: 100, backgroundColor:"black"}}>
        {/* <Menu right> */}
               
            {/* </Menu> */}
            <AnchorLink offset="-100" to="/#top" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: "inline",lineHeight: `3.5rem`, marginLeft: `1rem`, color:"white"}}>Jason<i>kie</i></h3>
            </AnchorLink>
           
            <ul style={{listStyle: `none`, float: `right`, overflow:"hidden", lineHeight: `3rem`}}>
            <CustomLink className="menu-item" to="/#work" >Works</CustomLink>
               <CustomLink className="menu-item" to="/#skills" >Skills</CustomLink>
               <CustomLink className="menu-item" to="/#education">Education</CustomLink>
               <CustomLink className="menu-item" to="/contact/">Contact</CustomLink>
            </ul>
            
            
        </header>
      
        <div style={{ margin: `0rem auto`, maxWidth: 900, padding: `0rem 2rem` }}>
         {children}
        </div>
    </div>
  )
}