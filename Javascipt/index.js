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




const handleResumeButton = () =>{
  const mywork= document.querySelector('.cta-resume')
  mywork.addEventListener("click", ()=>{
    window.open("https://drive.google.com/file/d/1EsEy_lpfsoU6snBJK5sF0WzdaWUcWFdA/view?usp=sharing");
  })
}

const handleGitSocial = () =>{
  const github = document.querySelector('#github')
  github.addEventListener("click", () =>{
    console.log("is open")
    window.open("https://github.com/phvinayak017?tab=repositories")
  })
}

const handleLinkedInSocial = () =>{
  const linkedin = document.querySelector('#linkedin')
  linkedin.addEventListener("click", () =>{
    window.open("https://www.linkedin.com/in/vinayak-hulabutti-593a7636/")
  })
}

const handleMediumSocial  = () =>{
  const medium = document.querySelector("#medium")
  medium.addEventListener("click", () =>{
    window.open("https://www.medium.com/@ph_vinayak")
  })
}

const handleBehanceSocial = () =>{
  const behance = document.querySelector("#behance")
  behance.addEventListener("click", () =>{
    window.open("https://www.behance.net/vinayakhulb31f")
  })
}

handleGitSocial()
handleLinkedInSocial()
handleMediumSocial()
handleBehanceSocial()
handleResumeButton()

navSlide()

