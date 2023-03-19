import logo from "../src/logo.jpg"

export default function Navbar() {
    
    return <nav className = "nav">
        <img src={logo} alt="" className="logo" />
      
       <ul>
        <li className= "active">
            <a href = "/">Home</a>
          </li>
        <li>
            <a href = "/about">About</a>
        </li>
        <li>
            <a href = "/books">Books</a>
        </li>
        <li>
            <a href = "/newrelease">New Release</a>
        </li>
        <li>
            <a href = "/contact">Contact</a>
        </li>
        <li>
            <a href = "/login">Log In</a>
        </li>
       </ul>
       <div className="search">
        <input class="srch" type="search" name="" placeholder="Type To Text"></input>
        <a href="#"><button class="btn">Search</button></a>
       </div>
    </nav>
}

function CustomLink({href,children,...props}){
    const path = window.location.pathname
    
    return (
        <li className={path === href ? "active" : ""}>
            <a href = {href}  {...props}>
                {children}
            </a>
        </li>
    )
}