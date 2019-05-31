/* eslint-disable no-use-before-define */

let _modal = false;

export const activateMenu = (elem, subElem) => {
    const elems = Array.from(document.querySelectorAll(elem));
    if (elems.length) {
        elems.forEach((el) => {
            el.addEventListener('click', (e) => {
                const subEl = Array.from(document.querySelectorAll(subElem))[0];
                if (subEl) {
                    // eslint-disable-next-line no-unused-expressions
                    if (_modal) {
                        subEl.classList.remove('active');
                        bodyOverflow();
                    } else {
                        subEl.classList.add('active');
                        bodyOverflow();
                    }
                }
            });
        });
    }
};

const bodyOverflow = () => {
    if (_modal) {
        document.body.classList.remove('overflow-hidden');
        _modal = false;
    } else {
        document.body.classList.add('overflow-hidden');
        _modal = true;
    }
};
