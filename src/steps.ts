function displaySteps(n: number) {
    let steps = 1; // start with one step

    function recurse():any {
        console.log('#'.repeat(steps) + ' '.repeat(n-steps));
        steps += 1
        return steps <= n ? recurse() : '';
    }
    recurse()
}
