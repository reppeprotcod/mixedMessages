
const createMessage = (arr1, arr2) => {
    let i = Math.floor(Math.random()*(arr1.length-1));
    let j = Math.floor(Math.random()*(arr2.length-1));
    let message = `${arr1[i]} ${arr2[j]}`;
    return message;
}
export {createMessage};