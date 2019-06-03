/* eslint-disable no-use-before-define */

let _modal = false;
const modalBackground = document.createElement('div');
modalBackground.classList.add('n-shadow');

export const activateMenu = (button, nav) => {
    let close = nav.querySelector('.js-close');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        setModal(nav);
    });

    modalBackground.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            setModal();
        });
    }

    const setModal = () => {
        if (_modal) {
            closeModal();
        } else {
            openModal();
        }
    };

    const closeModal = () => {
        document.body.classList.remove('overflow-hidden');
        modalBackground.remove();
        nav.classList.remove('active');
        button.classList.remove('active');
        _modal = false;
    };

    const openModal = () => {
        document.body.classList.add('overflow-hidden');
        document.body.appendChild(modalBackground);
        nav.classList.add('active');
        button.classList.add('active');
        _modal = true;
    };
};
