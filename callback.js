// Callback function
function show(some) {
    console.log(some)
}

function add(a, b) {
    let sum = a + b;
    show(sum)
}

add(5, 5)

// Course process callback functions

const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
    console.log('Enrollment is in process');
    setTimeout(function () {
        if (paymentSuccess == true) {
            callback()
        } else {
            console.log('Enrollment failed !')
        }
    }, 2000)
}

function progress(callback) {
    console.log('Course is in progress');

    setTimeout(function () {
        callback()
    }, 3000)
}

function getCertificate() {
    setTimeout(function () {
        if (marks >= 80) {
            console.log('Congratulations !!! you got the Certificate')
        } else {
            console.log('You have failed to achive the mark... sorry !')
        }
    }, 1000)
}

enroll(function () {
    progress(getCertificate);
})