const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

document.getElementById("lastmodified").textContent = document.lastModified;

const navElement = document.querySelector('nav');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    menuButton.classList.toggle('open');

    menuButton.textContent = menuButton.classList.contains('open') ? '✕' : '☰';
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah",
    dedicated: "1981, November 16",
    area: 148236,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg"

  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October 27",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September 7",
    area: 42652,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
  }

];

const templeContainer = document.querySelector(".gallery");
const heading = document.querySelector("main h2");
const navLinks = document.querySelectorAll(".navigation a");

function createTempleCard(temple) {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";

    card.append(name, location, dedicated, area, image);
    return card;
}

function displayTemples(templeList) {
    templeContainer.innerHTML = "";
    templeList.forEach((temple) => {
        templeContainer.appendChild(createTempleCard(temple));
    });
}

function getYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0], 10);
}

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.textContent.trim();
        heading.textContent = filter;

        if (filter === "Old") {
            displayTemples(temples.filter((t) => getYear(t.dedicated) < 1900));
        } else if (filter === "New") {
            displayTemples(temples.filter((t) => getYear(t.dedicated) > 2000));
        } else if (filter === "Large") {
            displayTemples(temples.filter((t) => t.area > 90000));
        } else if (filter === "Small") {
            displayTemples(temples.filter((t) => t.area < 10000));
        } else {
            displayTemples(temples);
        }
        navElement.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.textContent = "☰";
    });
});

displayTemples(temples);