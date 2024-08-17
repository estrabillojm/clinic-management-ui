export const calculateBMI = (weight: number, height: number): number => {
    if (height === 0) return 0;
    return Math.round((weight / (height * height)) * 10000);
};