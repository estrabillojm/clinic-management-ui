

const calculateBMI = (weightKg = 0, heightCm = 0) => {

    
    let heightM = heightCm / 100;

    // Calculate BMI
    let bmi = weightKg / (heightM * heightM);

    
    return Number(bmi.toFixed(2));
}

export default calculateBMI;