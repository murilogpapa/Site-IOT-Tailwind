function Menu(e) {
    let list = document.querySelector('div.absolute');

    if (e.classList.contains('fa-bars')) {
        e.classList.remove('fa-bars');
        e.classList.add('fa-xmark');
        list.classList.add('h-[235px]');
        list.classList.add('opacity-80');
        list.classList.add('backdrop-opacity-100');

    } else {
        e.classList.remove('fa-xmark');
        e.classList.add('fa-bars');
        list.classList.remove('h-[235px]');
        list.classList.remove('opacity-80');
        // list.classList.remove('backdrop-opacity-100');
    }
}