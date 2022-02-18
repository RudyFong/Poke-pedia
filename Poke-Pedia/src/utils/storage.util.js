export const storageKeys = {
  'MYLIST_POKEMON' : 'listpokemonOwn',
  'DETAIL_POKEMON' : 'detailpokemonOwn',
};

// // methods for storing and retrieving objects
// const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// export const get = (key) => localStorage.getItem(key).then((value) => JSON.parse(value));



// export const getPokeList = (key) => localStorage.getItem(key).then((value) => JSON.parse(value));
// export const setPokeList = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getPokeList = (key) => localStorage.getItem(key);
export const setPokeList = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getPokeDetail = (key) => localStorage.getItem(key);
export const setPokeDetail = (key, value) => localStorage.setItem(key, JSON.stringify(value));
