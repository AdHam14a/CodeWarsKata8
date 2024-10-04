function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    else {
        let positives = input.filter((e) => e > 0).length;
        let negatives = input.filter((e) => e < 0).reduce((acc, curr) => acc + curr, 0);
        input = [positives, negatives];
        return input;
    }
}

console.log(countPositivesSumNegatives(null));
