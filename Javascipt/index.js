const navSlide = () => {
  const nav = document.querySelector(".nav-links")
  const menu = document.querySelector(".menu")
  const navLinks = document.querySelectorAll(".nav-links li")

  menu.addEventListener("click", () => {
    nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
      }
    })
  })
}


const mywork= document.querySelector('.cta-resume')
const github = document.querySelector('#github')
const linkedin = document.querySelector('#linkedin')
const medium = document.querySelector("#medium")
const behance = document.querySelector("#behance")


const handleResumeButton = () =>{
  mywork.addEventListener("click", ()=>{
    window.open("https://drive.google.com/file/d/1EsEy_lpfsoU6snBJK5sF0WzdaWUcWFdA/view?usp=sharing");
  })
}

const handleGitSocial = () =>{
  github.addEventListener("click", () =>{
    window.open("https://github.com/phvinayak017?tab=repositories")
  })
}

const handleLinkedInSocial = () =>{
  linkedin.addEventListener("click", () =>{
    window.open("https://www.linkedin.com/in/vinayak-hulabutti-593a7636/")
  })
}

const handleMediumSocial  = () =>{
  medium.addEventListener("click", () =>{
    window.open("https://medium.com/@ph_vinayak")
  })
}

const handleBehanceSocial = () =>{
  behance.addEventListener("click", () =>{
    window.open("https://www.behance.net/vinayakhulb31f")
  })
}


navSlide()

