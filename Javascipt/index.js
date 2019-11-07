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

navSlide()