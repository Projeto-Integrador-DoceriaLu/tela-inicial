function menuShow() {
    let navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        document.querySelector('.icon').src = "assets/botão-menu.svg";
    } else {
        navMenu.classList.add('open');
        document.querySelector('.icon').src = "assets/botão-fechar-menu.svg";
    }
}

//CARROSSEL

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const radioButtons = document.querySelectorAll('[name="click"]');
let contador = 0;

setInterval( function () {
    nextSlide ();
}, 5000)

function showSlide(pagina) {
    slides.forEach((slide, i) => {
        if (i === pagina) {
            slide.style.display = 'flex';
            slide.classList.add('active');
            radioButtons[i].checked = true;
        } else {
            slide.style.display = 'none';
            slide.classList.remove('active');
        }
    });
}


function prevSlide() {
    contador--;
    if (contador < 0) {
        contador = slides.length - 1;
    }
    showSlide(contador);
}

function nextSlide() {
    contador++;
    if (contador >= slides.length) {
        contador = 0;
    }
    showSlide(contador);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

radioButtons.forEach((radio, pagina) => {
    radio.addEventListener('change', () => {
        contador = pagina;
        showSlide(contador);
    });
});

showSlide(contador);

