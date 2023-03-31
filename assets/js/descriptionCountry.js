const uri = location.search;
const nameCountry = decodeURI(uri.substring(1).split("name=")[1]);
const descriptionCountry = document.getElementsByClassName("description_country");

fetch("https://restcountries.com/v3.1/name/" + nameCountry)
.then((rest) => {
    return rest.json();
})
.then((data) => {
    const country = data[0];

    let divFlag = document.createElement("div");
    let elFlag = document.createElement("img");
    let divInformation = document.createElement("div");

    let articleCountryInformationOne = document.createElement("article");
    let name = document.createElement("h1");
    let nativeName = document.createElement("p");
    let population = document.createElement("p");
    let region = document.createElement("p");
    let sub = document.createElement("p");
    let capital = document.createElement("p");

    let articleCountryInformationTwo = document.createElement("article");
    let topLevelDomain = document.createElement("p");
    let currencies = document.createElement("p");
    let languages = document.createElement("p");

    let btnFooterInformation = document.createElement("article");

    divFlag.setAttribute("class", "flag");
    elFlag.src = country.flags.svg;

    divInformation.setAttribute("class", "information");

    articleCountryInformationOne.setAttribute("class", "country_information");

    name.innerHTML = country.name.common;

    nativeName.innerHTML = "<strong>Nome Nativo: </strong>" + country.name.common;

    population.innerHTML = "<strong>População: </strong>" + country.population;

    region.innerHTML = "<strong>Região: </strong>" + country.region;

    sub.innerHTML = "<strong>Sub Região: </strong>" + country.subregion;

    if (country.capital !== undefined) {
        capital.innerHTML = "<strong>Capital: </strong>" + country.capital[0];
    } else {
        resultCapital.innerHTML = "";
    }

    articleCountryInformationTwo.setAttribute("class", "country_information");

    topLevelDomain.innerHTML = "<strong>Top Level Domain: </strong>" + country.tld[0];

    let currency = Object.values(country.currencies)[0];
    currencies.innerHTML = "<strong>Moeda: </strong>" + currency.name;

    languages.innerHTML = "<strong>Idioma: </strong>" + Object.values(country.languages)[0];

    btnFooterInformation.setAttribute("class", "btn_footer_information");

    btnFooterInformation.innerHTML = "<p>Border Countries: </p>";

    let borders = country.borders;

    if (borders !== undefined) {
        country.borders.forEach((element, index) => {
            btnFooterInformation.innerHTML += "<span>" + country.borders[index] + "</span>";
        });
    }

    divFlag.appendChild(elFlag);

    divInformation.appendChild(articleCountryInformationOne);
    articleCountryInformationOne.appendChild(name);
    articleCountryInformationOne.appendChild(nativeName);
    articleCountryInformationOne.appendChild(population);
    articleCountryInformationOne.appendChild(region);
    articleCountryInformationOne.appendChild(sub);
    articleCountryInformationOne.appendChild(capital);

    divInformation.appendChild(articleCountryInformationTwo);
    articleCountryInformationTwo.appendChild(topLevelDomain);
    articleCountryInformationTwo.appendChild(currencies);
    articleCountryInformationTwo.appendChild(languages);

    divInformation.appendChild(btnFooterInformation);

    descriptionCountry[0].appendChild(divFlag);
    descriptionCountry[0].appendChild(divInformation);
})
.catch((error) => {
    console.log(error);
});

const btnBack = document.querySelectorAll('.btn-back, .icons-row-left');

btnBack.forEach((element, index) => {
    element.addEventListener("click", () => window.history.back());
});

// troca de tema
const theme = document.querySelector('.theme_mode span');
const root = document.querySelector(':root');

theme.addEventListener("click", function(e) {
    const valueTheme = e.target.innerHTML;
    alterTheme(valueTheme);

    if (e.target.innerHTML == 'Dark Mode') {
        e.target.innerText = 'Light Mode';
    } else {
        e.target.innerText = 'Dark Mode';
    }
});

function alterTheme(valueTheme) {

    let body = document.querySelector('body');
    let header = document.querySelector('.header');
    let header_theme_mode = document.querySelector('.theme_mode');
    let optionFilterHover = document.querySelector('.select-menu .options .option');
    let countries_header_filter_option = document.querySelector('.countries_header_filter option');
    let btn_back = document.querySelector('.btn-back');
    let icon_row_left = document.querySelector('.icons-row-left');
    let btn_footer_information = document.querySelectorAll('.btn_footer_information span');

    if (valueTheme == 'Dark Mode') {
        body.style.setProperty('background-color', 'hsl(207, 26%, 17%)');
        body.style.setProperty('color', 'hsl(0, 0%, 100%)');
        header.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        header.style.setProperty('box-shadow', 'hsl(209, 23%, 22%)');
        header_theme_mode.style.setProperty('color', 'hsl(0, 0%, 100%)');

        btn_back.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        btn_back.style.setProperty('color', 'hsl(0, 0%, 100%)');
        btn_back.style.setProperty('box-shadow', 'hsl(209, 23%, 22%)');

        icon_row_left.style.setProperty('filter', 'brightness(0) invert(1)');

        btn_footer_information.forEach(element => {
            element.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
            element.style.setProperty('color', 'hsl(0, 0%, 100%)');
        });

    } else if (valueTheme == 'Light Mode') {
        // body.style.setProperty('background-color', 'hsl(0, 0%, 98%)');
        // body.style.setProperty('color', 'hsl(0, 0%, 0%)');
        // header.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        // header.style.boxShadow = 'hsl(0, 0%, 52%)';

        // header_theme_mode.style.setProperty('color', 'hsl(0, 0%, 0%)');

        // btn_back.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        // btn_footer_information.style.setProperty('background-color', 'hsl(0, 0%, 100%)');




        body.style.setProperty('background-color', 'hsl(0, 0%, 98%)');
        body.style.setProperty('color', 'hsl(0, 0%, 0%)');
        header.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        header.style.setProperty('box-shadow', 'hsl(0, 0%, 52%)');
        header_theme_mode.style.setProperty('color', 'hsl(0, 0%, 0%)');

        btn_back.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        btn_back.style.setProperty('color', 'hsl(0, 0%, 0%)');
        btn_back.style.setProperty('box-shadow', 'hsl(0, 0%, 52%)');

        icon_row_left.style.setProperty('filter', 'brightness(0) invert(0)');

        btn_footer_information.forEach(element => {
            element.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
            element.style.setProperty('color', 'hsl(0, 0%, 0%)');
        });
    }
}
        