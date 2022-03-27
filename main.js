// Mini Nav

let burger = document.querySelector('.fa-bars');
let mini_nav = document.querySelector('.mini__nav ');
let nav_x = false;

burger.addEventListener('click', () => {
  if(!nav_x) {
    mini_nav.style.width = '100%';
    nav_x = true
  }
  else {
    mini_nav.style.width = '0%';
    nav_x = false;
  }
})

// Offers

let offer = document.querySelectorAll(".offer__txt");
let offers_div = document.querySelector(".offers__div");

let offersOld__price = document.querySelector(".offersOld__price");
let offersNew__price = document.querySelectorAll(".offersNew__price");
let price_arr = [];
let offersTxt_arr = [];
offer.forEach((e) => {
  offersTxt_arr.push(e);
  e.addEventListener("click", (ee) => {
    offersNew__price.forEach((e) => {
      price_arr.push(e);
    });
    let element = ee.target.dataset.id;
     if(!(e.classList.contains("offer_active"))){

      offersTxt_arr.forEach((e) => {
        if (e.classList.contains("offer_active")) {
          e.classList.remove("offer_active");
        }
      });
      e.classList.add("offer_active");
    }
    if (element == "offer_1") {
      offersOld__price.innerHTML = "2.899";
      price_arr[0].innerHTML = "2.399";
      price_arr[1].innerHTML = "2.099";
      price_arr[2].innerHTML = "2.099";
    } else if (element === "offer_2") {
      offersOld__price.innerHTML = "1.999";
      price_arr[0].innerHTML = "1.499";
      price_arr[1].innerHTML = "1.599";
      price_arr[2].innerHTML = "1.299";
    }
  });
});

// Benefits

let benefits_arrowLeft = document.querySelector(".thirdDiv__arrowLeft");
let benefits_arrowRight = document.querySelector(".thirdDiv__arrowRight");
let thirdDiv__rightF = document.querySelector(".thirdDiv__rightF");
let thirdDiv__rightS = document.querySelector(".thirdDiv__rightS");
let thirdDiv__rightF__num = document.querySelector(".thirdDiv__rightF__num");
let thirdDiv__rightS__num = document.querySelector(".thirdDiv__rightS__num");
let thirdDiv__rightF__h2 = document.querySelector(".thirdDiv__rightF__h2");
let thirdDiv__rightF__p  = document.querySelector('.thirdDiv__rightF__p');
let thirdDiv__rightS__h2 = document.querySelector(".thirdDiv__rightS__h2");
let thirdDiv__rightS__p = document.querySelector(".thirdDiv__rightS__p");

benefits_arrowLeft.addEventListener("click", () => {
  thirdDiv__rightF.style.backgroundColor = "#da2a1c";
  thirdDiv__rightS.style.backgroundColor = "#6295ac";
  thirdDiv__rightF__num.innerHTML = "1/3";
  thirdDiv__rightS__num.innerHTML = "2/3";
  thirdDiv__rightF__h2.innerHTML = `Uz svaku NEO tarifu možeš da ćaskaš i kuckaš NEOgraničeno`;
  thirdDiv__rightS__h2.innerHTML = `Ne možeš da prekoračis svoje gigabajte`;
  thirdDiv__rightS__p.innerHTML = `    NEO ima zaštitu od prekoračenja interneta u nacionalnom
    saobraćaju.`;
    thirdDiv__rightF__p.style.display = 'none';
    thirdDiv__rightS__h2.style.marginBottom = '1rem'
    thirdDiv__rightS__h2.style.width = '251px'
    thirdDiv__rightF__h2.style.paddingTop = '0px'
});

benefits_arrowRight.addEventListener("click", () => {
  thirdDiv__rightF.style.backgroundColor = "#6295ac";
  thirdDiv__rightS.style.backgroundColor = "#000";
  thirdDiv__rightF__num.innerHTML = "2/3";
  thirdDiv__rightS__num.innerHTML = "3/3";
  thirdDiv__rightF__h2.innerHTML = `Ne možeš da preskočiš svoje gigabajte `;
  thirdDiv__rightS__h2.innerHTML = `Aktiviraj preko Moj A1`;
  thirdDiv__rightS__h2.style.marginBottom = '-1rem'
  thirdDiv__rightS__h2.style.width = '200px'
  thirdDiv__rightF__h2.style.paddingTop = '6.5rem'
  thirdDiv__rightS__p.innerHTML = `Prepusti se neograničenom netu za Deezer i Hopster koje aktiviraš besplatno preko Moj A1 aplikacije uz NEO15 postpaid paket`;
  thirdDiv__rightF__p.style.display = 'block'
  thirdDiv__rightF__p.innerHTML =  `NEO ima zaštitu od prekoračenja interneta u nacionalnom saobraćaju.`
});

// Fifth Div

let handle_fifthDiv_arrow = true
let fifth__div = document.querySelector('.fifth__div');
let fifthDiv__arrowL = document.querySelector('.fifthDiv__arrowL');
let fifthDiv__arrowR = document.querySelector('.fifthDiv__arrowR');
let fifthDiv__dotsL = document.querySelector('.fifthDiv__dotsL');
let fifthDiv__dotsR = document.querySelector('.fifthDiv__dotsR');

fifthDiv__arrowR.addEventListener('click', () => {
  if(handle_fifthDiv_arrow) {
    fifth__div.style.background = "url('Images/fifthDiv_img2.png')"
    fifthDiv__arrowR.classList.add('fifth__div_arrow');
    if(fifthDiv__arrowR.classList.contains('fifth__div_arrowBack')) {
      fifthDiv__arrowR.classList.remove('fifth__div_arrowBack');
      fifthDiv__arrowR.classList.add('fifth__div_arrow');
    }
    fifthDiv__dotsL.style.backgroundColor = 'white';
    fifthDiv__dotsR.style.backgroundColor = '#da2a1c';
    handle_fifthDiv_arrow = false;
  }
  else if(!handle_fifthDiv_arrow) {
    fifth__div.style.background = "url('Images/fifthDiv_img.png')"
    fifthDiv__arrowR.classList.add('fifth__div_arrowBack');
    if(fifthDiv__arrowR.classList.contains('fifth__div_arrow')) {
      fifthDiv__arrowR.classList.remove('fifth__div_arrow');
      fifthDiv__arrowR.classList.add('fifth__div_arrowBack');
    }
    fifthDiv__dotsL.style.backgroundColor = '#da2a1c';
    fifthDiv__dotsR.style.backgroundColor = 'white';
    handle_fifthDiv_arrow = true;
  }
})

// Footer

let footerArrpw_up = document.querySelector('.footerArrpw_up');

footerArrpw_up.addEventListener('click', () => {
  window.scrollTo(0, 0);
})