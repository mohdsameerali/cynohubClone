import React from 'react'
export default function Navbar() {

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var navbar = document.getElementById('navSection');
    
        switch(true) {
            case (scrollPosition < 1000):
                navbar.style.backgroundColor = 'orange';
          break;
            case (scrollPosition >= 1000 && scrollPosition < 1380):
                navbar.style.backgroundColor = 'purple';
          break;
            case (scrollPosition >= 1380 && scrollPosition < 1830):
                navbar.style.backgroundColor = 'orange';
          break;
        case (scrollPosition >= 1830 && scrollPosition <2500 ):
                    navbar.style.backgroundColor = 'purple';
              break;
            case (scrollPosition >= 2500 && scrollPosition <3150 ):
                        navbar.style.backgroundColor = 'orange';
                  break;
                case (scrollPosition >= 3150 && scrollPosition <4500 ):
                            navbar.style.backgroundColor = 'purple';
                break;
                case (scrollPosition >= 4500 && scrollPosition <5500 ):
                                navbar.style.backgroundColor = 'orange';
                break;
                case (scrollPosition >=6600 && scrollPosition <7380 ):
                      navbar.style.backgroundColor = 'purple';
                break;
                case (scrollPosition >= 7380 && scrollPosition <8000 ):
                      navbar.style.backgroundColor = 'orange';
                break;

                case (scrollPosition >= 8000 && scrollPosition <9000 ):
                     navbar.style.backgroundColor = 'purple';
                                        break;
            default:
                navbar.style.backgroundColor = 'black';
                break;
        }
    });




  return (
<>
<section id='navSection' className='container-fluid   black'>
    <div className='container'>
    <nav className="navbar navbar-expand-lg  bg-ligh  bg-ligh navbar-light " id='navbar'>
        <a className="navbar-brand  " href="./"><span id='hubcol'>Cynohub</span></a>

        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav d-flex">
                <li className="nav-item ">
                    <a id="nav" className="nav-link text-center  active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item ">
                    <a id="nav" className="nav-link text-center " href="#"  aria-current="page" >Academics</a>  
                </li>
                <li className="nav-item ">
                    <a id="nav" className="nav-link text-center  " href="#"  aria-current="page" >Placements</a>
                </li> 
                <li className="nav-item  dropdown">
                    <a id="nav" className="nav-link text-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Upskilling</a>
                        <ul className="dropdown-menu">
                            <li><a id="nav" className="dropdown-item" href="#">Robotics</a></li>
                            <li><a id="nav" className="dropdown-item" href="#">IELTS</a></li>
                            <li><a id="nav" className="dropdown-item" href="#">Full Stack developement</a></li>
                        </ul>
                </li> 
                <li className="nav-item ">
                    <a id="nav" className="nav-link " aria-current="page" href="#">Contact</a>
                </li>
                                 
            </ul>

        </div>
    </nav>
    </div>
</section>

</>

  )
}





