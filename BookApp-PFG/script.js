// Inicialización de ScrollOut
ScrollOut({
    targets: '[data-scroll]',
    onShown: function(el) {
        if (el.id === 'caida' || el.id === 'lluvia') {
            el.classList.add('animate__fadeIn');
            el.style.visibility = 'visible';
            el.style.opacity = 1;
        }
    },
    onHidden: function(el) {
        if (el.id === 'caida' || el.id === 'lluvia') {
            el.style.visibility = 'hidden';
            el.style.opacity = 1;
        }
    },
});



// congreso section 2
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Elements in section 2
    const parrafoizquierdoElement = document.getElementById('parrafoizquierdo');
    const parrafoderechoElement = document.getElementById('parrafoderecho');

    // Check if section 2 is in view
    const section2 = document.querySelector('.section2');
    const rect2 = section2.getBoundingClientRect();
    if (rect2.top >= -0 && rect2.bottom <= window.innerHeight) {
        // Apply animations for left paragraphs first, then right paragraphs
        parrafoizquierdoElement.classList.add('animate__fadeInLeft');
        setTimeout(() => {
            parrafoderechoElement.classList.add('animate__fadeInRight');
        }, ); // Delay for right paragraph
    } else {
        // Reverse animations
        parrafoizquierdoElement.classList.remove('animate__fadeInLeft');
        parrafoderechoElement.classList.remove('animate__fadeInRight');
    }
});

// jorge section 4
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Elements in section 4
    const parrafoizquierdoElement2 = document.getElementById('parrafoizquierdo2');
    const parrafoderechoElement2 = document.getElementById('parrafoderecho2');

    // Check if section 4 is in view
    const section4 = document.querySelector('.section4');
    const rect4 = section4.getBoundingClientRect();
    if (rect4.top >= 0 && rect4.bottom <= window.innerHeight) {
        parrafoizquierdoElement2.classList.add('animate__fadeInLeft');
        setTimeout(() => {
            parrafoderechoElement2.classList.add('animate__fadeInRight');
        },); // Delay for right paragraph
    } else {
        // Reverse animations
        parrafoizquierdoElement2.classList.remove('animate__fadeInLeft');
        parrafoderechoElement2.classList.remove('animate__fadeInRight');
    }
});




// copos section 6
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Elements in section 6
    const parrafoizquierdoElement3 = document.getElementById('parrafoizquierdo3');
    const parrafoderechoElement3 = document.getElementById('parrafoderecho3');

    // Check if section 6 is in view
    const section6 = document.querySelector('.section6');
    const rect6 = section6.getBoundingClientRect();
    if (rect6.top >= 0 && rect6.bottom <= window.innerHeight) {
        parrafoizquierdoElement3.classList.add('animate__fadeInLeft');
        setTimeout(() => {
            parrafoderechoElement3.classList.add('animate__fadeInRight');
        },);
    } else {
        parrafoizquierdoElement3.classList.remove('animate__fadeInLeft');
        parrafoderechoElement3.classList.remove('animate__fadeInRight');
    }
});



// prespectiva gente section 3
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || window.pageYOffset;
    let rotateValue = scrollPosition % 360; // Rotación continua
    let scaleValue = Math.max(1 - scrollPosition / 10000, 0.1); // Escala con un límite mínimo de 0.1

    let gentecircular = document.getElementById('gentecircular');
    gentecircular.style.transform = `rotate(${rotateValue}deg) scale(${scaleValue})`;
});



// Inicialización de ScrollOut para animar el texto de progreso

window.addEventListener('scroll', (e) => {
    let scrollPosition = window.scrollY || window.pageYOffset;
    const progressText = document.getElementById('progressText');

    if (scrollPosition > 50) {  // Ajusta este valor según sea necesario
        progressText.classList.add('final-position');
        progressText.classList.remove('animate__fadeInUpBig');
    } else {
        progressText.classList.remove('final-position');
        progressText.classList.add('animate__pulse');
    }
});

// prespectiva ojo
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || window.pageYOffset;
    let rotateValue = scrollPosition % 360; // Rotación continua
    let scaleValue = Math.max(1 - scrollPosition / 10000, 0.1); // Escala con un límite mínimo de 0.1

    let ojo = document.getElementById('ojo');
    ojo.style.transform = `rotate(${rotateValue}deg) scale(${scaleValue})`;
});













function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.poema1');

    sections.forEach(section => {
        const textElement = section.querySelector('article');
        const imageElement = section.querySelector('img');

        if (isElementInViewport(textElement)) {
            textElement.classList.add('animate');
        } else {
            textElement.classList.remove('animate');
        }

        if (isElementInViewport(imageElement)) {
            imageElement.classList.add('animate');
        } else {
            imageElement.classList.remove('animate');
        }
    });
}



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const section = document.querySelector('.poema1');
    const textElement = section.querySelector('.fuerza');
    const imageElement = section.querySelector('#muchas-manos');

    if (isElementInViewport(section)) {
        textElement.classList.add('animate-in');
        textElement.classList.remove('animate-out');
        imageElement.classList.add('animate-in');
        imageElement.classList.remove('animate-out');
    } else {
        textElement.classList.add('animate-out');
        textElement.classList.remove('animate-in');
        imageElement.classList.add('animate-out');
        imageElement.classList.remove('animate-in');
    }
}

window.addEventListener('scroll', handleScroll);

// Inicializa las animaciones al cargar la página
window.addEventListener('load', handleScroll);


// Variables y constantes
let lastScrollY = 0;
let currentFrame = 1;
const frameCount = 7;
const scrollControl = 300;
const frameSpeed = scrollControl / frameCount;
const gruffaloElement = document.getElementById('gruffalo');
let animationComplete = false;

// Función para actualizar el fotograma basado en el desplazamiento
function updateFrame(scrollY) {
    if (scrollY > lastScrollY) {
        currentFrame = Math.min(Math.floor(scrollY / frameSpeed) + 1, frameCount);
        gruffaloElement.src = `assets/images/characters/${currentFrame}.png`;
        if (currentFrame >= frameCount) {
            gruffaloElement.style.visibility = 'hidden';
            animationComplete = true;
        }
    } else {
        gruffaloElement.style.visibility = 'visible';
        animationComplete = false;
        currentFrame = Math.max(Math.floor(scrollY / frameSpeed) + 1, 1);
        gruffaloElement.src = `assets/images/characters/${currentFrame}.png`;
    }

    lastScrollY = scrollY;
}

// Evento de desplazamiento
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Elementos
    const textElement = document.getElementById('text');
    const forestElement = document.getElementById('forest');
    const rocksElement = document.getElementById('rocks');
    const caidaElement = document.getElementById('caida');

    // Efectos de paralaje para los elementos
    let newTextPosition = value * -0.2;
    let newForestPosition = value * 0.25;
    let newRocksPosition = value * -0.12;
    let newCaidaPosition = value * 0.20;

    // Ajustes de posición mínima
    if (newTextPosition < 30) {
        newTextPosition = 30;
    }
    if (newForestPosition < 30) {
        newForestPosition = 30;
    }
    if (newRocksPosition < 30) {
        newRocksPosition = 30;
    }
    if (newCaidaPosition < 40) {
        newCaidaPosition = 40;
    }

    // Aplicación de nuevas posiciones
    textElement.style.top = newTextPosition + '%';
    forestElement.style.top = newForestPosition + '%';
    rocksElement.style.top = newRocksPosition + '%';
    caidaElement.style.top = newCaidaPosition + '%';

    // Efectos de movimiento para las aves
    document.getElementById('bird1').style.top = value * -1.0 + 'px';
    document.getElementById('bird1').style.left = value * 1 + 'px';
    document.getElementById('bird2').style.top = value * -1.5 + 'px';
    document.getElementById('bird2').style.left = value * -5 + 'px';
    document.getElementById('rocks').style.top = value * 0.12 + 'px';
    document.getElementById('forest').style.top = value * 0.25 + 'px';
    document.getElementById('water').style.top = value * 0.15 + 'px';
    document.getElementById('caida').style.top = value * 0.50 + 'px';
   
  


    // Animación de desplazamiento del Gruffalo
    gruffaloElement.style.left = value * 0.1 + '%';

    // Actualizar el fotograma del Gruffalo basado en el desplazamiento
    updateFrame(value);

    // Cambiar la tipografía basada en el desplazamiento
    if (value < 10) {
        textElement.className = 'animate__animated ';
    } else if (value < 20) {
        textElement.className = 'animate__animated phase1';
    } else if (value < 30) {
        textElement.className = 'animate__animated phase2 ';
    } else if (value < 40) {
        textElement.className = 'animate__animated phase3 ';
    } else if (value < 50) {
        textElement.className = 'animate__animated phase4 ';
    } else if (value < 60) {
        textElement.className = 'animate__animated phase5 ';
    } else if (value < 70) {
        textElement.className = 'animate__animated phase6 ';
    } else if (value < 80) {
        textElement.className = 'animate__animated phase5 ';
    } else if (value < 90) {
        textElement.className = 'animate__animated phase4 ';
    } else if (value < 100) {
        textElement.className = 'animate__animated phase3 ';
    } else if (value < 110) {
        textElement.className = 'animate__animated phase2 ';
    } else {
        textElement.className = 'animate__animated animate__bounceOutUp';
    }
});



