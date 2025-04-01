class ProductsPage{

constructor(page){

    this.page = page;
    this.contents = page.locator('._1XjE3T');
    this.Products = page.locator('._1BJVlg')
    this.secProducts = page.locator('._3490ry');

}

async goToProduct(){
    const count = await this.contents.count();
    for(let i=0;i<count;++i){
        if(await this.contents.nth(i).textContent() === "Beauty, Toys & More"){
            await this.contents.nth(i).hover();
            const count1 = await this.Products.count();
            for(let j=0;j<count1;++j){
                if(await this.Products.nth(j).textContent() === "Books"){
                    await this.Products.nth(j).hover();
                    const count2 = await this.secProducts.count();
                    for(let k=0;k<count2;++k){
                        if(await this.secProducts.nth(k).textContent() === "Non Fiction"){
                            await this.secProducts.nth(k).click();
                            break;
                        }
                    }
                break;
                }
                
            }
        break;
        }
    }


}

}
module.exports = {ProductsPage};