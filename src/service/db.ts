interface DataLocal {
  name: string | null;
}

const dbName: DataLocal = {
  name: "TaskDatabase",
};

export const getDb = () => {
  return JSON.parse(localStorage.getItem(dbName.name ?? "") as string) || [];
};

export const setDb = (arr: []) => {
  return localStorage.setItem(dbName.name ?? "", JSON.stringify(arr));
};
