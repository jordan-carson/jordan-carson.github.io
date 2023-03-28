import { writable } from 'svelte/store';
// Initial theme config from current state
export const store = writable('');
console.log("Changing the value of theme to %s", store);
//
// import { writable } from 'svelte/store';
//
// export const theme = writable('');
//# sourceMappingURL=themes.js.map