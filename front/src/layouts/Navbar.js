import React from 'react'
import logo  from './../assets/images/Ml.png'
function Navbar() {
  return (
    <div>
     
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>

      <section>
      <div id='logo'></div>
  <nav>
    <ul class="menuItems">
   
    
      <li><a href='#' data-item='Home'>Home</a></li>
      <li><a href='#' data-item='About'>About</a></li>
      <li><a href='#' data-item='Projects'>Projects</a></li>
      <li><a href='#' data-item='Portfolio'>Portfolio</a></li>
      <li><a href='#' data-item='Contact'>Contact</a></li>
    </ul>
  </nav>

</section>
    </div>
  )
}

export default Navbar