export const getLocalStorage = (dbName: string) => {
    return JSON.parse(localStorage.getItem(dbName) as string) || [];
};

export const setLocalStorage = (dbName: string, db: any) => {
    localStorage.setItem(dbName, JSON.stringify(db));
};
