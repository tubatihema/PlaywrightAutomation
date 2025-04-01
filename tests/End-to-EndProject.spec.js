const { test } = require("@playwright/test");
const {sign} = require('crypto');
const {IntializePage} = require('../pageObjects/IntializePage');
const {ProductsPage} = require('../pageObjects/ProductsPage');
const {FilterPage} = require('../pageObjects/FilterPage');

test.only('End-to-End test case',async ({page})=>{


    const contents = page.locator('._1XjE3T');

    const intializePage = new IntializePage(page);
    await intializePage.goTo();
    const productsPage = new ProductsPage(page);
    await productsPage.goToProduct();
    const filterPage = new FilterPage(page);
    await filterPage.applyFilter();
    await filterPage.getPrice();

})