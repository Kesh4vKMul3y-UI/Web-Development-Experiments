var globalVar = "I am a global var";

function showVarScope() {
    var localVar = "I am a local var";
    console.log(localVar);
    console.log(globalVar);
}

function showLetScope() {
    if (true) {
        let blockVar = "I am a block-scoped let";
        console.log(blockVar);
    }
}

function showConstScope() {
    const constantVar = "I am a constant";
    console.log(constantVar);
}

showVarScope();
showLetScope();
showConstScope();
