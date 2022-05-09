function makeNFTS (number) {

    for (x = 0; x <= number; ++x){
        var fs = require('fs');
        const nft = {
            'id': x,
            'nftIndex': x,
            'version': 1,
            'name': 'Indige-nft-' + x,
            'description': null,
            'contractName': 'test_collection_indige',
            'image': 'ipfs://Qmag4rEBsPvkEGxvVZhKy2Ezm5oj6rF3wsnNWsHVba5yE2/indige-' + x + '.jpg',
            'artist': 'Generic Artist',
            'attributes': null,
            'properties': {
              'collection': 'indige100',
              'collectionId': 'john_smith_gumbula/indige100',
              'totalSupply': 100,
              'externalUrl': 'ipfs://Qmag4rEBsPvkEGxvVZhKy2Ezm5oj6rF3wsnNWsHVba5yE2/indige-' + x + '.jpg',
              'animationUrl': null
            },
            'localization': {
              'uri': null,
              'locales': ['en'],
              'default': 'en'
            }
          }
        console.log(nft)

        let json = JSON.stringify(nft);
        fs.writeFileSync('./indige-test/indige-' + x + '.json', json)
    }
}

makeNFTS(1)