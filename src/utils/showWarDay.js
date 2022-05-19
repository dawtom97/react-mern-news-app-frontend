export const showWarDay = () => {
    const startDate = new Date("02/24/2022");
    const currentDate = new Date();

    const calculate = currentDate.getTime() - startDate.getTime()
    return Math.round(calculate / (1000 * 3600 * 24));

}