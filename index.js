window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let content = document.querySelector('.content');

    if (scrollY < window.innerHeight - 50) {
        content.style.transform = `translateY(${100 - (scrollY / (window.innerHeight - 50)) * 100}vh)`;
    }
});

// --------------

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
