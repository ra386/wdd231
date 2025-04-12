export function updateLastModified() {
    const lastmod = document.querySelector("#lastmodified");
    if (lastmod) { // Check if element exists (safety)
        lastmod.textContent = `Last Updated: ${document.lastModified}`;
    }
}