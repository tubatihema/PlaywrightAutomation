const { test } = require("@playwright/test");
const {sign} = require('crypto');

test.only('End-to-End test case',async ({page})=>{


    const contents = page.locator('._1XjE3T');
    await this.page.goto("https://www.flipkart.com/")
    const count = await contents.count();
    for(let i=0;i<count;++i){
        if(await contents.nth(i).textContent() === "Beauty, Toys & More"){
            await contents.nth(i).hover();
            const Products = page.locator('._1BJVlg');
            const count1 = await Products.count();
            for(let j=0;j<count1;++j){
                if(await Products.nth(j).textContent() === "Books"){
                    await Products.nth(j).hover();
                    const secProducts = page.locator('._3490ry');

                    const count2 = await secProducts.count();
                    for(let k=0;k<count2;++k){
                        if(await secProducts.nth(k).textContent() === "Non Fiction"){
                            await secProducts.nth(k).click();
                            break;
                        }
                    }
                break;
                }
                
            }
        break;
        }
    }
    // const select = page.locator('div[class="tKgS7w"] select');
    // await select.selectOption('₹500');
    const scroll = await page.locator('.PYKUdo').last();
    await page.waitForTimeout(3000);
    const bb = await scroll.boundingBox();
    await page.waitForTimeout(3000);
    await page.mouse.move(bb.x+bb.width/2,bb.y+bb.height/2);
    await page.waitForTimeout(3000);
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(bb.x-40,bb.y+bb.height/2);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(4000);
    const price = page.locator('.Nx9bqj');
    const count2 = await price.count();
    for(let i=0;i<count2;++i){
        if(price.nth(i).textContent() >= 500){
            console.log("Filter havent applieed");
            break;
        }
    }
    console.log("Success");

})

test('Function check',async({page})=>{
    const contents = page.locator('._1XjE3T');
    
    await page.goto("https://www.flipkart.com/");
    const count = await contents.count();
    for(let i=0;i<count;++i){
        if(await contents.nth(i).textContent() === "Mobiles"){
            await contents.nth(i).click();
            break;
        }
    }
   
   

})