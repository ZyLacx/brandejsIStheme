let brandejsMucitel = browser.runtime.getURL("assets/brandejsMucitel.jpg");
let brandejsVino = browser.runtime.getURL("assets/brandejsWine.jpg");
let brandejsMinecraft = browser.runtime.getURL("assets/brandejsMC.jpg");
let brandejsMatrix = browser.runtime.getURL("assets/brandejsMatrix.jpg");
let brandejsNeon = browser.runtime.getURL("assets/brandejsNeon.jpg");

let photos = [brandejsMucitel, brandejsVino, brandejsMinecraft, brandejsMatrix, brandejsNeon];

let rng = Math.floor(Math.random() * photos.length);

let main_menu_css = `    
    #content.motiv-titulka {
        background-image: url('${photos[rng]}');
        background-repeat: no-repeat;
        background-position: 75% 0;
        background-size: 550px auto;
    }`

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
    #app_menu.empty { background-color: transparent }`

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
        float: left;
        padding-left: 25%;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 20px; }`

let style = document.getElementsByTagName("style");
if (style.length == 0) {
    document.head.innerHTML += "<style>" + app_css + other_css + "</style>";
}
else {
    let main_page = document.getElementsByClassName("motiv-titulka");
    if (main_page.length == 0) {
        style[0].innerHTML += app_css + other_css;
    }
    else {
        style[0].innerHTML += main_menu_css + other_css;
    }
}


