const createRandomNum = (min = 0, max = 150) => Math.floor(Math.random() * (max - min) + min);
export default createRandomNum;
