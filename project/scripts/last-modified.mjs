export function updateLastModified() {
    const lastmod = document.querySelector("#lastmodified");
    if (lastmod) { 
        lastmod.textContent = `Last Updated: ${document.lastModified}`;
    }
}