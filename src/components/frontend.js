
import logo from '../logo.svg';
import style from '../assets/practiceFront.module.css';
import '../assets/borderColor.css';
import '../assets/menu.css'



function FrontEnd(){
  
  setInterval(function () {
    const show = document.querySelector("span[data-show]");
    const next = show.nextElementSibling || document.querySelector("span:first-child");
    const up = document.querySelector("span[data-up]");
  
    if (up) {
      up.removeAttribute("data-up");
    }
  
    show.setAttribute("data-up", "");  
    next.setAttribute("data-show", "");
    show.removeAttribute("data-show");
  }, 6000);

  function toggle() {
    let links = document.getElementById("links");
    let blob = document.getElementById("blob");
    blob.classList.toggle("open");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
  

  
return(
<>

<button className='animate-bg'>
  hola
</button>

<div className="animate-bg mydiv ">
        <h1 className="sometxt">
        Follow<br/>me!  
        </h1>
    </div>

<div className={style.typingDemo}>Computadora</div>
<textarea>Probando</textarea>
<img src={logo} className="app-logo" alt="logo" />
<a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>
      Turn your living room into
      <div className={style.mask}>
        <span data-show>Una frase</span>
        <span  >Segunda frase</span>
        <span  >Dale </span>
  

      </div>
    </h2>
       
</>


)
}

export default FrontEnd;