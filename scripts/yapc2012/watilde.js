(function (stdin) {
        var i = 13, count = 6, stdout = 28,  primes = [2, 3, 5, 7, 11];
        function primeIs(n) {
                var j = 0, k = Math.sqrt(n);
                for (j; primes[j] <= k; j += 1) {
                        if (n % primes[j] === 0) { return false; }
                }
                return true;
        }
        if (6 <= stdin) {
                (function () {
                        var maximum = Math.sqrt(stdin * (Math.log(stdin) + Math.log(Math.log(stdin))));
                        for (i; count <= stdin; i +=2) {
                                if (primeIs(i)) {
                                        if (i <= maximum) { primes[primes.length] = i; }
                                        stdout += i;
                                        count += 1;
                                }
                        }
                }());
        } else if (1 <= stdin && stdin <= 5) {
                stdout = 0;
                for (i = 0; i < stdin; i += 1) { stdout += primes[i]; }
        }
        console.log(stdout);
}(10000));

