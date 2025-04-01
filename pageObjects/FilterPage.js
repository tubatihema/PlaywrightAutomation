class FilterPage{
    
    constructor(page){
        this.page = page;
        this.scroll = page.locator('(//div[@class="PYKUdo"])[2]');
        this.price = page.locator('.Nx9bqj');
        this.sort = page.locator('._0H7xSG');
    }

async applyFilter(){    
    
    
    const bb = await this.scroll.boundingBox();
    await this.page.waitForTimeout(3000);
    await this.page.mouse.move(bb.x+bb.width/2,bb.y+bb.height/2);
    await this.page.waitForTimeout(3000);
    await this.page.mouse.down();
    await this.page.waitForTimeout(3000);
    await this.page.mouse.move(bb.x-40,bb.y+bb.height/2);
    await this.page.waitForTimeout(3000);
    await this.page.mouse.up();
    
}
async getPrice(){
    await this.sort.click();
    const count2 = await this.price.count();
    for(let i=0;i<count2;++i){
        if(this.price.nth(i).textContent() >= 500){
            console.log("Filter havent applieed");
            break;
        }
    }
    console.log("Success");


}
}
module.exports = {FilterPage};