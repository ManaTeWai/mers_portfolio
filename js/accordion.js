const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll(".feature__link")

// for (let i=0; i<btns.length; i++) {
//     btns[i].addEventListener("click", () => console.log(btns[i]));
// }

btns.forEach((btnitem, index) => {
    btnitem.addEventListener("click", () => {
        btns.forEach((btnitem) => {
            btnitem.classList.remove('feature__link_active')
        })
        btnitem.classList.add('feature__link_active')
        lists.forEach((listitem) => {
            listitem.classList.add('hidden')
        })
        lists[index].classList.remove('hidden')
    })
})