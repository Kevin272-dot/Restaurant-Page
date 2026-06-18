import "../assets/styles/home.css";

export function renderHome() {
  const content = document.querySelector("#content");
  const main = document.createElement("div");
  content.textContent = "";
  const heroTextContainer = document.createElement("div");
  heroTextContainer.classList.add("hero-text-container");
  const mainHeading = document.createElement("h1");
  mainHeading.classList.add("hero-title");
  mainHeading.textContent = "Welcome to Apex Dining";
  heroTextContainer.appendChild(mainHeading);
  content.appendChild(heroTextContainer);
  const storySection = document.createElement("section");
  storySection.classList.add("home-story");
  const titleStory = document.createElement("h1");
  titleStory.classList.add("story-title");
  titleStory.textContent = "A Culinary Evolution";
  const story = document.createElement("p");
  story.classList.add("main-story");
  story.textContent =
    "At Apex Dining, we blend avant-garde culinary techniques with time-honored traditions. Every dish is a meticulously curated journey, highlighting seasonal, locally sourced ingredients transformed by passion.";
  storySection.append(titleStory, story);
  content.appendChild(storySection);
  const ambianceSection = document.createElement("section");
  ambianceSection.classList.add("home-ambiance");
  const ambianceTitle = document.createElement("h2");
  ambianceTitle.classList.add("amb-title");
  ambianceTitle.textContent = "The Chef’s Counter";
  const ambianceStory = document.createElement("p");
  ambianceStory.classList.add("amb-story");
  ambianceStory.textContent =
    "Led by our master kitchen brigade, the heart of Apex Dining beats in the careful rhythm of prep, precision, and performance. Every movement is deliberate, engineered to provide a seamless transition from raw elements to sophisticated culinary art.";
  ambianceSection.append(ambianceTitle, ambianceStory);
  content.appendChild(ambianceSection);
}
