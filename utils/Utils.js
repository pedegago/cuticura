export const scrollToTop = () => {
    const fn = () => {
        if (document.documentElement.scrollTop > 0){
            window.scrollBy(0, -50);
        } else {
            clearInterval(i);
        }
    };

    const i = setInterval(fn, 10);
};

export const toDetails = (name) => {
    return `/details/${name.replace(/\s+/g, "-").toLowerCase()}`;
};

export const beautifyCategory = (category) => {
    return category.replace(/-+/g, " ");
};