export const getImageUrl = (path) => {
    console.log(path);
    return new URL(`/assets/${path}`, import.meta.url).href;
};