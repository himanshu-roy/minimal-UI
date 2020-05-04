const btnGroup = document.querySelector('.btn-group');
const btns = [...btnGroup.querySelectorAll('button')];
const check = document.querySelector('[type="checkbox"]');
const lolPrice = document.querySelector('.lol');
const icePrice = document.querySelector('.ice');
const saving = document.querySelector('.last');
const lolServing = document.querySelector('.lolServe');
const iceServing = document.querySelector('.iceServe');
const suffix = [...document.querySelectorAll('.para')];
let plan;


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const serving = parseInt(e.target.dataset.value);
        if(!check.checked) {
            plan = 'annual';
        } else {
            plan = 'monthly';
        }

        if(plan === 'monthly') {
            const lollipop = serving * 1;
            const iceCandy = serving * 2;
            const save = iceCandy - lollipop;

            suffix.forEach(item => {
                item.textContent = 'Per month';
            })
            lolPrice.textContent = '$' + lollipop + ' ';
            icePrice.textContent = '$' + iceCandy + ' ';
            saving.textContent = '$' + save + ' ';
            lolServing.textContent = `For ${serving} serving`;
            iceServing.textContent = `For ${serving} serving`;
        } else {
            const lollipop = serving * 0.5;
            const iceCandy = serving * 1;
            const save = iceCandy - lollipop;

            suffix.forEach(item => {
                item.textContent = 'Annually';
            })
            lolPrice.textContent = '$' + lollipop + ' ';
            icePrice.textContent = '$' + iceCandy + ' ';
            saving.textContent = '$' + save + ' ';
            lolServing.textContent = `For ${serving} serving`;
            iceServing.textContent = `For ${serving} serving`;
        }
    })
})

