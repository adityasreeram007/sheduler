const TokenGenerator = require('uuid-token-generator');
module.exports={

    generateToken:()=>{
        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
        var token=tokgen2.generate();
        return token

    },
    

}