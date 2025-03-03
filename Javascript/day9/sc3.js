console.log("A");

const f1 = () => {
    console.log("H");
}

setTimeout(() => {
    console.log("N")

    setTimeout(() => {
        console.log("P");
    }, 1000);
    f1();
    console.log("B")
}, 1000);

console.log("C")