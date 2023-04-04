const countryArticleElement = document.getElementsByClassName("countries");

let dataCountries = [];

fetch("https://restcountries.com/v3.1/all")
.then((rest) => {
    return rest.json();
})
.then((data) => {

    const countries = data;

    listCountries(countries);
})
.catch((error) => {
    console.log(error);
});

const optionMenu = document.querySelector(".select-menu"),
        selectBtn = document.querySelector(".countries_header_filter"),
        options = document.querySelectorAll(".option"),
        placeholderSelect = document.querySelector(".text-placeholder");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", (e) => {
        let selectOption = e.target.innerText;
        placeholderSelect.innerText = selectOption;

        optionMenu.classList.remove("active");

        fetch("https://restcountries.com/v3.1/region/" + selectOption)
        .then((rest) => {
            return rest.json();
        })
        .then((data) => {
            const countries = data;
            let countriesArticle = document.querySelectorAll('.article_country');

            countriesArticle.forEach(element => {
                element.remove();
            });

            listCountries(countries);
        });

        console.log(dataCountries);
    });
});

const search = document.querySelector(".countries_header_search");

search.addEventListener("input", e => {
    const filter = e.target.value.toLowerCase();

    dataCountries.forEach(country => {
        const isVisible = country.name.toLowerCase().includes(filter);
        country.element.classList.toggle("hide", !isVisible);
    });
});

function listCountries(countries) {
    dataCountries = countries.map((country) => {

        let article = document.createElement("article");

        let flag = document.createElement("img");
        let name = document.createElement("h2");
        let population = document.createElement("h3");
        let resultPopulation = document.createElement("span");
        let region = document.createElement("h3");
        let resultRegion = document.createElement("span");
        let capital = document.createElement("h3");
        let resultCapital = document.createElement("span");

        flag.setAttribute('class', 'flag');
        flag.src = country.flags.png;
        flag.alt = "Bandeira do(a)" + country.name.common;
        flag.title = "Bandeira do(a)" + country.name.common;

        name.setAttribute('class', 'country');
        name.innerHTML = country.name.common;

        population.innerHTML = "População: ";
        resultPopulation.innerHTML = country.population;

        region.innerHTML = "Região: ";
        resultRegion.innerHTML = country.region;

        capital.innerHTML = "Capital: ";

        if (country.capital !== undefined) {
            resultCapital.innerHTML = country.capital[0];
        } else {
            resultCapital.innerHTML = "";
        }

        article.setAttribute("class", "article_country");

        article.appendChild(flag);
        article.appendChild(name);
        article.appendChild(population);
        population.appendChild(resultPopulation);
        article.appendChild(region);
        region.appendChild(resultRegion);
        article.appendChild(capital);
        capital.appendChild(resultCapital);
        countryArticleElement[0].appendChild(article);

        const articleCountry = article;

        articleCountry.addEventListener("click", (e) => {
            window.location.href = "http://localhost/rest-countries-api-with-color-theme-switcher-master/assets/views/description_country.html?name=" + country.name.common;
        });

        return { name: country.name.common, element: articleCountry }
    })
}

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
    let countries_header_search = document.querySelector('.countries_header_search');
    let countries_header_filter = document.querySelector('.countries_header_filter');
    let selectFilter = document.querySelector('.select-menu .options');
    // let optionFilterHover = document.querySelector('.select-menu .options .option');
    let countries_header_filter_option = document.querySelector('.countries_header_filter option');
    let countries_article = document.querySelectorAll('.countries article');
    // let btn_back = document.querySelector('.btn-back');
    // let btn_footer_information = document.querySelector('.btn_footer_information span');
    let countries_header_filter_div = document.querySelector('.countries .countries_header div');

    if (valueTheme == 'Dark Mode') {
        body.style.setProperty('background-color', 'hsl(207, 26%, 17%)');
        body.style.setProperty('color', 'hsl(0, 0%, 100%)');
        header.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        header.style.setProperty('box-shadow', 'hsl(209, 23%, 22%)');
        // root.style.setProperty('--dark-gray', 'none');
        header_theme_mode.style.setProperty('color', 'hsl(0, 0%, 100%)');

        countries_header_search.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        countries_header_search.style.setProperty('color', 'hsl(0, 0%, 100%)');
        countries_header_search.style.boxShadow = 'hsl(209, 23%, 22%)';
        
        countries_header_filter.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        countries_header_filter.style.boxShadow = 'hsl(209, 23%, 22%)';

        selectFilter.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        // countries_header_filter_option.style.setProperty('', '');
        countries_article.forEach(element => {
            element.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
            element.style.boxShadow = 'hsl(209, 23%, 22%)';
        });
        // btn_back.style.setProperty('background-color', 'hsl(209, 23%, 22%)');
        // btn_footer_information.style.setProperty('background-color', 'hsl(209, 23%, 22%)');

        countries_header_filter_div.style.boxShadow = 'hsl(209, 23%, 22%)';

    } else if (valueTheme == 'Light Mode') {
        body.style.setProperty('background-color', 'hsl(0, 0%, 98%)');
        body.style.setProperty('color', 'hsl(0, 0%, 0%)');
        header.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        header.style.boxShadow = 'hsl(0, 0%, 52%)';

        header_theme_mode.style.setProperty('color', 'hsl(0, 0%, 0%)');

        countries_header_search.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        countries_header_search.style.setProperty('color', 'hsl(0, 0%, 0%)');

        countries_header_search.style.boxShadow = 'hsl(0, 0%, 52%)';
        
        countries_header_filter.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        countries_header_filter.style.boxShadow = 'hsl(0, 0%, 52%)';

        selectFilter.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        // countries_header_filter_option.style.setProperty('', '');
        countries_article.forEach(element => {
            element.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
            element.style.boxShadow = 'hsl(0, 0%, 52%)';
        });
        // btn_back.style.setProperty('background-color', 'hsl(0, 0%, 100%)');
        // btn_footer_information.style.setProperty('background-color', 'hsl(0, 0%, 100%)');

        countries_header_filter_div.style.boxShadow = 'hsl(0, 0%, 52%)';
    }
}