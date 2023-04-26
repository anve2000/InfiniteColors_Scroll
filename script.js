const container = document.querySelector('.container');

let cnt = 0;
// console.log(container);

const ranCol = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}


const loadMore = () => {
    const child = document.createElement('div');
    child.classList.add('child');
    for (let i = 0; i < 3; i++) {
        const grandchild = document.createElement('div');
        grandchild.classList.add('grandchild');
        grandchild.style.backgroundColor = ranCol();
        grandchild.innerText = cnt++;
        child.appendChild(grandchild);

    }

    container.appendChild(child);
}

for (let i = 0; i < 3; i++) {
    loadMore();
}

container.addEventListener('scroll', (e) => {
    const { scrollHeight, scrollTop, clientHeight } = container;
    // console.log(scrollHeight, ' ', scrollTop, ' ', clientHeight);
    // console.log(getIcon(852))
    if (scrollHeight <= scrollTop + clientHeight) {
        loadMore();
    }
})



