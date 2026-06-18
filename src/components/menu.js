import "../assets/styles/menu.css";

export function renderMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "L'Étoile Menu";
  menuContainer.appendChild(menuTitle);

  const menuData = {
    "First Course:": [
      {
        name: "Seared Diver Scallops",
        desc: "Parsnip purée, crispy pancetta, brown butter citrus reduction",
        price: "28",
      },
      {
        name: "Heirloom Tomato & Burrata",
        desc: "Compressed heirloom tomatoes, artisanal burrata, wild arugula, 25-year balsamic",
        price: "24",
      },
      {
        name: "Wagyu Beef Tartare",
        desc: "Hand-cut Japanese Wagyu, capers, smoked egg yolk, toasted brioche points",
        price: "34",
      },
    ],
    "Main Entrées": [
      {
        name: "Pan-Roasted Chilean Seabass",
        desc: "Saffron risotto, baby bok choy, lemongrass infused ginger broth",
        price: "48",
      },
      {
        name: "Truffle-Crusted Filet Mignon",
        desc: "Center-cut prime filet, wild mushroom ragout, garlic-whipped pommes purée, demi-glace",
        price: "58",
      },
      {
        name: "Heritage Duck Breast",
        desc: "Crispy-skinned duck, sweet potato fondant, charred broccolini, blackberry gastrique",
        price: "46",
      },
    ],
  };
  for (const [category, items] of Object.entries(menuData)) {
    const section = document.createElement("section");
    section.classList.add("menu-section");
    const catTitle = document.createElement("h2");
    section.classList.add("category-title");
    catTitle.textContent = category;
    section.appendChild(catTitle);
    const table = document.createElement("table");
    table.classList.add("menu-table");
    items.forEach((item) => {
      const row = document.createElement("tr");
      row.classList.add("menu-row");
      const detailsCell = document.createElement("td");
      detailsCell.classList.add("menu-item-details");
      const items = document.createElement("td");
      items.classList.add("menu-item-details");
      const p1 = document.createElement("p");
      p1.classList.add("item-name");
      p1.textContent = `${item.name}`;
      const p2 = document.createElement("p");
      p2.classList.add("item-desc");
      p2.textContent = `${item.desc}`;
      detailsCell.append(p1, p2);
      const priceCell = document.createElement("td");
      priceCell.classList.add("menu-item-price");
      priceCell.textContent = item.price;
      row.append(detailsCell, priceCell);
      table.appendChild(row);
    });
    section.appendChild(table);
    menuContainer.appendChild(section);
  }
  content.appendChild(menuContainer);
}
