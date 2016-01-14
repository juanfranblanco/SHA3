
(function () {
    'use strict';
    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var abiString = document.getElementById('abi');

    document.getElementById('calculateAbi').addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            var abi = JSON.parse(abiString.value);
            var output = "";
            
            for (var i = 0; i < abi.length; i++){
                    var element = abi[i];
                    
                    if((element.type === "function" || element.type === "event") && element.name != null){
                        
                        var signature = getSignature(element);
                        var signatureSha3Encoded = web3.sha3(signature);
                        
                        if(element.type === "function"){
                            signatureSha3Encoded = signatureSha3Encoded.substring(0,8);
                        }
                        
                        output = output + signature + " " + signatureSha3Encoded + "\n";
                    }
                }
                
            document.getElementById('resultAbi').innerHTML = output;
        }
    );
    
    function getSignature(element)
    {
            var signature = element.name + "(";
            var first = true;
            for(var x =0; x < element.inputs.length; x++){
                var input = element.inputs[x];
                if(!first) signature = signature + ",";
                signature = signature + input.type;
                first = false;
            }
            signature = signature + ")";
         return signature;
    }

}());


