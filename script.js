function calculatePrediction() {
    let input = document.getElementById('previousValues').value;
    let previousValues = input.split(',').map(parseFloat);

    // Validate input
    if (previousValues.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.';
        return;
    }

    // Weighted average prediction model
    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < previousValues.length; i++) {
        let weight = Math.pow(2, i); // More recent values have exponentially more weight
        totalWeight += weight;
        weightedSum += previousValues[previousValues.length - 1 - i] * weight;
    }

    let nextPrediction = weightedSum / totalWeight;

    // Display the result
    document.getElementById('result').innerHTML = `
        Predicted next flight time: ${nextPrediction.toFixed(2)}x
        <br><br>
        Previous flight times: ${previousValues.map(v => v.toFixed(2)).join(', ')}
    `;
}