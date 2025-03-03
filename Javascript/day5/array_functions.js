

const getData = () => {
    const name = prompt("Enter Name")
    console.log(name)

    const numOfSub = prompt("No. of Subject");
    const n = parseInt(numOfSub) // OR parseFloat OR Number 

    return n;

};

const getSub = (num) => {
    const record = {};
    for(let i=0;i<num;i++){
        const subName = prompt(`Name of Subject ${i+1} `);
        const marks = prompt(`Marks in ${subName}`);
        record[subName] = marks;
    }

    return record
};

const getpct = (record,n) => {
    let t = 0;
    let numOfSub = 0;
    const marks = Object.values(record) // to get an array of values of object

    // func to add values

    // const add = (ele) => {
    //     // t is globall for this function
    //     t = t + ele;
    // }

    // marks.forEach(add);

    // OR

    marks.forEach( (v) => {
        t += v;
        numOfSub += 1;
    })

    return t/numOfSub;;
};

// const n = getData();

// const record = getSub(n);

const record = {
    'a' : 91,
    'b' : 72,
    'c' : 62
}

const pct = getpct(record);
console.log(pct)

const highScore = (record) => {
    // const val = Object.values(record); // OR [ .keys() -> keys ] OR  [ .entries() -> pair ]
    const val = Object.entries(record); // OR [ .keys() -> keys ] OR  [ .entries() -> pair ]

    let mx = 0;
    let name = "";
    val.forEach( (ele) => {
        if(ele[1] > mx){
             mx = ele[1];
             name = ele[0];
        }
    })
    console.log(name)
    return mx;
};

const hsc = highScore(record);
console.log("high score is " + hsc);

const getgrades = (pct) => {
    const grades = [
        [50,"C"],
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"]
    ]

    let ans = 'F';
    grades.forEach( (ele) => {
        if(pct >= ele[0]){
            ans = ele[1]
        }
    })

    return ans;


};

const grade = getgrades(pct);
console.log("Grade is : " +grade)
