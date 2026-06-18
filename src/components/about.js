import "../assets/styles/about.css";

export function renderAbout() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  const aboutTitle = document.createElement("h1");
  aboutTitle.classList.add("about-title");
  aboutTitle.textContent = "Our Story";
  aboutContainer.appendChild(aboutTitle);
  const heritageSection = document.createElement("section");
  heritageSection.classList.add("about-section", "heritage-block");

  const heritageSubtitle = document.createElement("h2");
  heritageSubtitle.classList.add("about-subtitle");
  heritageSubtitle.textContent = "The Legacy of Apex";

  const heritageText = document.createElement("p");
  heritageText.classList.add("about-text");
  heritageText.textContent =
    "Founded with a vision to redefine fine dining, Apex Dining stands at the intersection of classical gastronomy and modern innovation. What began as an intimate culinary passion project has evolved into a sanctuary for sensory exploration, right in the heart of the city.";

  heritageSection.append(heritageSubtitle, heritageText);
  aboutContainer.appendChild(heritageSection);

  const chefSection = document.createElement("section");
  chefSection.classList.add("about-section", "chef-block");

  const chefSubtitle = document.createElement("h2");
  chefSubtitle.classList.add("about-subtitle");
  chefSubtitle.textContent = "Culinary Leadership";

  const chefText = document.createElement("p");
  chefText.classList.add("about-text");
  chefText.textContent =
    "Under the meticulous guidance of our Executive Chef, the kitchen brigade sources only the finest seasonal ingredients from local legacy farms and international boutique purveyors. Every plate serves as a canvas reflecting discipline, artistic expression, and unparalleled taste.";

  chefSection.append(chefSubtitle, chefText);
  aboutContainer.appendChild(chefSection);

  content.appendChild(aboutContainer);
}
