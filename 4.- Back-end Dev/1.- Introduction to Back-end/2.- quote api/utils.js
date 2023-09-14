const getRandomElement = (arr) => {
    if (!Array.isArray(arr)) throw new Error("Expected an array");
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFromAuthor = (arr, author) => {
    if (!Array.isArray(arr)) throw new Error("Expected an array");
    if (!(typeof author === "string")) throw new Error("Expected a string");
    return arr.filter((quote) => quote.person == author);
};

const deleteById = (arr, id) => {
    if (!Array.isArray(arr)) throw new Error("Expected an array");
    if (Number.isNaN(id)) throw new Error("Expected an integer");
    const idx = arr.findIndex(quote => quote.id == id);
    arr.splice(idx, 1);
};

module.exports = {
    getRandomElement,
    getFromAuthor,
    deleteById,
};
