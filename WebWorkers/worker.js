var arrayResult=[];


self.addEventListener('message', function calcularFibonacci(e) {
        var i;
        fibo = 1;
        fibo2 = 1;
        for(i = 0; i < e.data; i++) {
        fibo = fibo + fibo2;
        fibo2 = fibo - fibo2;
        arrayResult[i]=fibo;
        }
        self.postMessage(arrayResult);
}, false);

