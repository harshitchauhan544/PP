const arr = [10,20,30];

const ans = arr.reduce((acc,ele,idx,c) => { // acc (accumukator) holds the return value of previous iteration
    // ele -> holds the current element
    // idx -> holds the current idx
    // c -> holds the whole array
    console.log(acc + " - " + ele + " - " + idx + " " + c )
    return ele+acc;
},100); // 100 is the default initial value for acc

// without the default value , acc will store the initail value(index - 0) of arr,
// and start traversing from second index(1)

console.log(ans)

// shorter form (without redundant things)

const ans1 = arr.reduce((acc,ele) => {
    return acc + ele;
},0);

console.log(ans1)

