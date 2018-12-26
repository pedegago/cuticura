export const toDetails = (name) => {
    return `/details/${name.replace(/\s+/g, "-").toLowerCase()}`;
};