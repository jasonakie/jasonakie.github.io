import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link style={{ textShadow: `none`, backgroundImage: `none`, color: "white"}} to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
        <header style={{marginBottom: `1rem`,height: `3rem`, position: "sticky", top: 0, zIndex: 100, backgroundColor:"black"}}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: "inline",lineHeight: `3rem`, marginLeft: `1rem`, color:"white"}}>Jason<i>kie</i></h3>
            </Link>
            <ul style={{listStyle: `none`, float: `right`, overflow:"hidden", lineHeight: `3rem`}}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        <div style={{ margin: `0rem auto`, maxWidth: 900, padding: `0rem 2rem` }}>
         {children}
        </div>
    </div>
  )
}