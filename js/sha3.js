
(function () {
    'use strict';
    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var input = document.getElementById('input');
    
    document.getElementById('calculate').addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            document.getElementById('result').innerText = web3.sha3(input.value);
        }
    );
}());