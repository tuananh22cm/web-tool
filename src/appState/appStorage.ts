let appStorage: Storage;

if (localStorage !== undefined && localStorage !== null) {
    appStorage = localStorage;
}
else {
    appStorage = sessionStorage;
}

export {
    appStorage
};

