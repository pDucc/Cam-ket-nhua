window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let content = document.querySelector('.content');

    if (scrollY < window.innerHeight - 50) {
        content.style.transform = `translateY(${100 - (scrollY / (window.innerHeight - 50)) * 100}vh)`;
    }
});

// --------------

const logo = document.getElementById('logo-img');

window.addEventListener('scroll', function () {
    if (window.scrollY >= window.innerHeight) {
        setTimeout(() => {
            logo.src = 'img/MATERIALS/Asset 2@100x-8-white.png';
            logo.style.opacity = '1';
        }, 150);
    } else {
        setTimeout(() => {
            logo.src = 'img/MATERIALS/Asset 2@100x-8.png';
            logo.style.opacity = '1';
        }, 150);
    }
});

// --------------
let ds = document.querySelectorAll('.ds');
ds.forEach((v) => {
    Draggable.create(v, {
        bounds: wrapper,
        type: 'x,y',
        liveSnap: {
            points: [{ x: 50, y: 50 }],
            radius: 20,
        },
        onDragStart: function () {
            console.log('drag started');
        },
    });
});
// ----------------------
