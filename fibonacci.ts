function fibonacci(size: number): number[] {
    if (size <= 0) {
        return [];
    }
    else if (size === 1) {
        return [0];
    }
    else if (size === 2) {
        return [0, 1];
    }
    let arr = [0, 1];
    for (let i = 2; i < size; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(fibonacci(20))
