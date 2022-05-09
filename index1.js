function rename() {
    // var fs = require('fs')
    // fs.readdirSync('./images/').forEach((element,index) => {
    //     fs.rename(`./images/${element}`,'./newImages/KANGAROOHEADPROPS' + index + '.png',function(err) {
    //         if (err) console.log(err)
    //     })
    // });
    // for (let x = 0; x <= 13; ++x) {
    //     fs.rename('./images/','./newImages/KOALA' + x + '.png',function(err) {
    //         if (err) console.log(err)
    //     })
    // }

    const fs = require('fs');
    for (let i = 1; i <= 700; i++) {
        const fileName = `./images/${i}.json`;
        const file = require(fileName);
        file.description = "The IndigeNFT Collection has a number of traits, and accessories that are elements of my journey of life, and they all have a unique fusion of my original Aboriginal art and design placed within each IndigeNFT Fam Character. As the IndigeNFT Collection shows many subtle elements of traits of past and present individual people in the world from history, celebrities, famous people, captured within each of the IndigeNFT Fam characters. Each IndigeNFT Fam character is left to the imagination of the collector/buyer.";
        file.properties.total_supply = 2000
        fs.writeFile(fileName,JSON.stringify(file),function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(file));
            console.log('writing to ' + fileName);
        });
    }
}

rename()