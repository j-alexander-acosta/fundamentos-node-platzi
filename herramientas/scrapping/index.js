const puppeteer = require('puppeteer');

(async () => {
    // Nuestro codigo
    console.log('Lanzamos un navegador, Iniciando scrapping');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
        headless: false });

    const page = await browser.newPage();
    await page.goto('https://www.platzi.com/');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    });

    console.log(titulo1);

    console.log('Navegador lanzado, abriendo pagina');
    browser.close();
    console.log('Pagina abierta, cargando');
})();