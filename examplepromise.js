// Challenge Area
function addPromise(a,b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === "number" && typeof b === "number") {
            resolve(a + b);
        } else {
            reject("Must be both numerical");
        }
    });
}

addPromise(2,'a').then(function(success) {
    console.log("success", success);
}, function(error) {
    console.log("error", error);
});