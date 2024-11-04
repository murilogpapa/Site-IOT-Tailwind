function Menu(e) {
    let list = document.querySelector('div.absolute');

    if (e.classList.contains('fa-bars')) {
        e.classList.remove('fa-bars');
        e.classList.add('fa-xmark');
        list.classList.add('h-[235px]');
        list.classList.add('opacity-80');
        list.classList.add('backdrop-opacity-100');
        list.classList.remove('mt-[1000rem]'); // Remove a margem alta quando aparece
        list.classList.add('mt-[0.1rem]'); // Adiciona a margem padrão quando aparece
    } else {
        e.classList.remove('fa-xmark');
        e.classList.add('fa-bars');
        list.classList.remove('h-[235px]');
        list.classList.remove('opacity-80');
        // list.classList.remove('backdrop-opacity-100');
        list.classList.remove('mt-[0.1rem]'); // Remove a margem padrão quando some
        list.classList.add('mt-[1000rem]'); // Adiciona a margem alta quando some
    }
}