function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');

    if (!weight || !height || height <= 0) {
        resultDiv.innerText = "Please enter valid weight and height";
        return;
    }
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
        }
    else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    }
    