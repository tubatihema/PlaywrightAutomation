class IntializePage{


constructor(page){

    this.page = page;

}

async goTo(){
    await this.page.goto("https://www.flipkart.com/")
}

}
module.exports = {IntializePage};