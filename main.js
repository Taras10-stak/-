function flipCoin() {
    const resultElement = document.getElementById('result');

    const randomValue = Math.floor(Math.random() * 3);

    let result;
    if (randomValue === 0) {
        result = '1';
    } else if (randomValue === 1) {
        result = '$';
    } else {
        result = '%';
    }

    resultElement.textContent = `${result}`;
}



