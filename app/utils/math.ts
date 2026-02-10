export function getFibonacci(n: number): number[] {
    if (n < 0) return [];
    if (n === 0) return [0];
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}

export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export function getGCD(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

export function getHCF(arr: number[]): number {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => getGCD(acc, val));
}

export function getLCM(arr: number[]): number {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => {
        if (acc === 0 || val === 0) return 0;
        return Math.abs(acc * val) / getGCD(acc, val);
    });
}
