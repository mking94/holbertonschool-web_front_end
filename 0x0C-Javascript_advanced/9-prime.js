function countPrimeNumbers() {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        let flag = true;
        for(let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
            }
        }
        if (flag) {
            counter +=1;
        }
    }
    return counter + 1;
}
let starttime = performance.now();
countPrimeNumbers();
console.log("Execution time of printing countPrimeNumbers was " + (starttime -  performance.now()) +  " milliseconds.");
