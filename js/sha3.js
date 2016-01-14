
(function () {
    'use strict';
    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var input = document.getElementById('input');
    
    document.getElementById('calculate').addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            var current = web3.sha3(input.value);
            document.getElementById('result').value = current;
        }
    );
}());


[{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"proposal","type":"uint8"}],"name":"vote","outputs":[],"type":"function"},{"inputs":[{"name":"_numProposals","type":"uint8"}],"type":"constructor"}]