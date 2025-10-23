const TOKEN_KEY = "jwt";

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const setToken = (token) =>
    localStorage.Storage.setItem(TOKEN_KEY, token);

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};