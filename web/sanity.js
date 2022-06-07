let PROJECT_ID = "y886976t";
let DATASET = "production";

let NavQUERY = encodeURIComponent(`*[_type == 'navbar'] | order(order) {
    _id, navItem, order 
  } `);
let NavURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${NavQUERY}`;

//fetch nav items
fetch(NavURL)
.then((response) =>
    response.json())
.then(({ result }) => {
    document.getElementById('sec1').innerHTML = result[0].navItem;
    document.getElementById('sec2').innerHTML = result[1].navItem;
    document.getElementById('sec3').innerHTML = result[2].navItem;
    document.getElementById('sec4').innerHTML = result[3].navItem;
    document.getElementById('sec6').innerHTML = result[4].navItem;
})
.catch((err) => console.error(err));




//fetch header section
let headerQUERY = encodeURIComponent('*[_type == "header"]')
let headerURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${headerQUERY}`;

fetch(headerURL)
.then((response) => response.json())
.then(({result}) => {
    document.getElementById('header-description').innerHTML = result[0].description;
    document.getElementById('header-title').innerHTML = result[0].title;
})



//fetch contact form title
let formTitleQuery = encodeURIComponent('*[_type == "Contact"]')
let formTitleURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${formTitleQuery}`;

fetch(formTitleURL)
.then((response) => response.json())
.then(({result}) => {
    document.getElementById('form-title').innerHTML = result[0].title;
})



//sorting and fetching input field placeholders 
let inputfieldQUERY = encodeURIComponent(`*[_type == 'Form'] | order(order) {
    _id, placeholder, order 
  } `);
let inputfieldURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${inputfieldQUERY}`;
fetch(inputfieldURL)
.then((response) => response.json())
.then(({result}) => {
    document.getElementById("name-field").placeholder = result[0].placeholder;
    document.getElementById("email-field").placeholder = result[1].placeholder;
    document.getElementById("phone-field").placeholder = result[2].placeholder;
    document.getElementById("company-field").placeholder = result[3].placeholder;
    document.getElementById("form-button").value = result[4].placeholder;
})
