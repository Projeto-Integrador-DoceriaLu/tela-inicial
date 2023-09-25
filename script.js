const slides1 = document.querySelectorAll('.slider1');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
let contador1 = 0;

function showSlide1(index1) {
    slides1.forEach((slider1, i1) => {
        if (i1 === index1) {
            slider1.style.display = 'flex';
            slider1.classList.add('active');
        } else {
            slider1.style.display = 'none';
            slider1.classList.remove('active');
        }
    });
}

function prevSlide1() {
    contador1--;
    if (contador1 < 0) {
        contador1 = slides1.length - 1;
    }
    showSlide1(contador1);
}

function nextSlide1() {
    contador1++;
    if (contador1 >= slides1.length) {
        contador1 = 0;
    }
    showSlide1(contador1);
}

prevBtn1.addEventListener('click', prevSlide1);
nextBtn1.addEventListener('click', nextSlide1);

showSlide1(contador1);

/*Carrossel 2*/

const slides2 = document.querySelectorAll('.slider2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
let contador2 = 0;

function showSlide2(index2) {
    slides2.forEach((slider2, i2) => {
        if (i2 === index2) {
            slider2.style.display = 'flex';
            slider2.classList.add('active');
        } else {
            slider2.style.display = 'none';
            slider2.classList.remove('active');
        }
    });
}

function prevSlide2() {
    contador2--;
    if (contador2 < 0) {
        contador2 = slides2.length - 1;
    }
    showSlide2(contador2);
}

function nextSlide2() {
    contador2++;
    if (contador2 >= slides2.length) {
        contador2 = 0;
    }
    showSlide2(contador2);
}

prevBtn2.addEventListener('click', prevSlide2);
nextBtn2.addEventListener('click', nextSlide2);

showSlide2(contador2);

/*Carrossel 3*/

const slides3 = document.querySelectorAll('.slider3');
const prevBtn3 = document.getElementById('prevBtn3');
const nextBtn3 = document.getElementById('nextBtn3');
let contador3 = 0;

function showSlide3(index3) {
    slides3.forEach((slider3, i3) => {
        if (i3 === index3) {
            slider3.style.display = 'flex';
            slider3.classList.add('active');
        } else {
            slider3.style.display = 'none';
            slider3.classList.remove('active');
        }
    });
}

function prevSlide3() {
    contador3--;
    if (contador3 < 0) {
        contador3 = slides3.length - 1;
    }
    showSlide3(contador3);
}

function nextSlide3() {
    contador3++;
    if (contador3 >= slides3.length) {
        contador3 = 0;
    }
    showSlide3(contador3);
}

prevBtn3.addEventListener('click', prevSlide3);
nextBtn3.addEventListener('click', nextSlide3);

showSlide3(contador3);

/*Carrossel 4*/

const slides4 = document.querySelectorAll('.slider4');
const prevBtn4 = document.getElementById('prevBtn4');
const nextBtn4 = document.getElementById('nextBtn4');
let contador4 = 0;

function showSlide4(index4) {
    slides4.forEach((slider4, i4) => {
        if (i4 === index4) {
            slider4.style.display = 'flex';
            slider4.classList.add('active');
        } else {
            slider4.style.display = 'none';
            slider4.classList.remove('active');
        }
    });
}

function prevSlide4() {
    contador4--;
    if (contador4 < 0) {
        contador4 = slides4.length - 1;
    }
    showSlide4(contador4);
}

function nextSlide4() {
    contador4++;
    if (contador4 >= slides4.length) {
        contador4 = 0;
    }
    showSlide4(contador4);
}

prevBtn4.addEventListener('click', prevSlide4);
nextBtn4.addEventListener('click', nextSlide4);

showSlide4(contador4);