const numbCateg = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${numbCateg.length}`);

numbCateg.forEach(function (el) {
    const list = el.querySelector("h2");
    const listEl = el.querySelectorAll("li");
    console.log(`Category:`, list.textContent);
    console.log(`Elements:`, listEl.length);
})