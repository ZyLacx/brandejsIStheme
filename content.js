let photos = [browser.runtime.getURL("assets/brandejsWine.jpg"),
                browser.runtime.getURL("assets/brandejsMatrix.jpg"),
                browser.runtime.getURL("assets/brandejsNeon.jpg")];

let other_css = `
    ul.is-switch { float: left; }
    #prepinace > ul > li > a { text-align: left; }
    #app_menu.empty { background-color: transparent; }
    .zivot_column { margin-top: 120px; }
    .motiv-titulka .app_header_motiv_switch { 
        float: none;
        right: 0;
        top: 0 !important; }
    .ikony { 
        float: left;`;
if (document.body.classList.contains("motiv-tmavy")){
    photos.concat(browser.runtime.getURL("assets/brandejsMucitel.png"), browser.runtime.getURL("assets/brandejsMC.png"));
}
else {
    photos.concat(browser.runtime.getURL("assets/brandejsMC.jpg"), browser.runtime.getURL("assets/brandejsMucitel.jpg"));
    other_css += `padding-left: 25%;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 20px;`;
}
    other_css += "}";

let rng = Math.floor(Math.random() * photos.length);

let main_menu_css = `    
#content.motiv-titulka {
    background-image: url('${photos[rng]}');
    background-repeat: no-repeat;
    background-position: 75% 0;
    background-size: 550px auto;
}`;

let app_css = `
    #app_header_image {
        background-image: url('${photos[rng]}');
        background-size: auto 100%;
        background-position: 462px;
        display: block !important;
        top: -195px;
    }
    #app_header_image::after {
        background-image:  none;
    }
    #app_menu.empty { background-color: transparent }`;

let style = document.createElement("style");
let main_page = document.getElementsByClassName("motiv-titulka");
if (main_page.length == 0) {
    style.innerText = app_css + other_css;
}
else {
    style.innerText = main_menu_css + other_css;
}

document.head.appendChild(style)