let PROJECT_ID = "wdvdkju6";
let DATASET = "production";

/*
    //fetch paragraphs
      let QUERY = encodeURIComponent('*[_type == "paragraphs"]');
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

            // fetch the paragraphs
            fetch(URL)
            .then((res) => res.json())
            .then(({ result }) => {
                document.getElementById('paragraph-one').innerHTML = result[2].paragraph;
                document.getElementById('paragraph-two').innerHTML = result[1].paragraph;
                document.getElementById('paragraph-three').innerHTML = result[6].paragraph;
                document.getElementById('paragraph-four').innerHTML = result[4].paragraph;
                document.getElementById('paragraph-five').innerHTML = result[5].paragraph;
                document.getElementById('paragraph-six').innerHTML = result[3].paragraph;
            })
            .catch((err) => console.error(err));

*/
        

           /* //fetch brand logo
            let logoQUERY= encodeURIComponent(`*[_type == "logo"]{
                logo,
                "url": logo.asset->url
              }`)
            let logoURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${logoQUERY}`;
            fetch(logoURL)
            .then((response) => response.json())
            .then(({result}) => {
                document.getElementById('brand-logo').src = result[0].url;
            }) */



            //sort nav items by order
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



            //fetch process section

            let processQUERY = encodeURIComponent(`*[_type == 'process']  | order(order) {
                _id, title, description, order, "url": icon.asset->url
              }  `);
            let processURL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${processQUERY}`;
            fetch(processURL)
            .then((response) => response.json())
            .then(({result}) => {
                console.log(result)
                document.getElementById("title-one").innerHTML = result[0].title;
                document.getElementById("description-one").innerHTML = result[0].description;
                document.getElementById("icon-one").src = result[0].url;

                document.getElementById("title-two").innerHTML = result[1].title;
                document.getElementById("description-two").innerHTML = result[1].description;
                document.getElementById("icon-two").src = result[1].url;

                document.getElementById("title-three").innerHTML = result[2].title;
                document.getElementById("description-three").innerHTML = result[2].description;
                document.getElementById("icon-three").src = result[2].url;

                document.getElementById("title-four").innerHTML = result[3].title;
                document.getElementById("description-four").innerHTML = result[3].description;
                document.getElementById("icon-four").src = result[3].url;

                document.getElementById("title-five").innerHTML = result[4].title;
                document.getElementById("description-five").innerHTML = result[4].description;
                document.getElementById("icon-five").src = result[4].url;

                document.getElementById("title-six").innerHTML = result[5].title;
                document.getElementById("description-six").innerHTML = result[5].description;
                document.getElementById("icon-six").src = result[5].url;

            })


