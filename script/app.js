const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".navbar-mobile");
const remoteWorkshopBtn = document.querySelector(".tab-item.remote");
const inPersonWorkshopBtn = document.querySelector(".tab-item.in-person");
const remoteGuidelines = document.querySelector(".remote.workshop");
const inPersonGuidelines = document.querySelector(".in-person.workshop");

const toggleMenu = () => {
  mobileMenu.classList.toggle("show");
};

menuIcon.addEventListener("click", toggleMenu);

const showRemoteWorkshopDetails = () => {
  inPersonWorkshopBtn.classList.remove("active");
  remoteWorkshopBtn.classList.add("active");
  inPersonGuidelines.style.display = "none";
  remoteGuidelines.style.display = "flex";
};

const showInPersonWorkshopDetails = () => {
  remoteWorkshopBtn.classList.remove("active");
  inPersonWorkshopBtn.classList.add("active");
  inPersonGuidelines.style.display = "flex";
  remoteGuidelines.style.display = "none";
};

remoteWorkshopBtn.addEventListener("click", showRemoteWorkshopDetails);
inPersonWorkshopBtn.addEventListener("click", showInPersonWorkshopDetails);
