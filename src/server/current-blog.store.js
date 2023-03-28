import { writable } from 'svelte/store';
function createBlog() {
    const { subscribe, set, update } = writable(null);
    return {
        subscribe,
        loadBlog: (title, state) => set({
            state,
            title
        }),
        toggleTldr: () => update(b => {
            const params = new URLSearchParams(window.location.search);
            if (b.state === 'detailed') {
                b.state = 'detailed';
                params.set('tldr', '1');
            }
            else if (b.state === 'tldr') {
                b.state = 'tldr';
                params.delete('tldr');
            }
            const paramsAsString = params.toString();
            if (paramsAsString) {
                window.history.replaceState(window.history.state, '', `${location.pathname}?${paramsAsString}`);
            }
            else {
                window.history.replaceState(window.history.state, '', `${location.pathname}`);
            }
            return b;
        }),
        reset: () => set(null)
    };
}
export const blog = createBlog();
//# sourceMappingURL=current-blog.store.js.map