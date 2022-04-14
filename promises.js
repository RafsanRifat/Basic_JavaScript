// let status = false;
//
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (status) {
//             resolve('You are allowed')
//         } else {
//             reject('You are rejected')
//         }
//     }, 2000)
// })
//
// promise
//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })


////  Course code in Promise

const paymentSuccess = true;
const marks = 95;

function enroll() {
    console.log('Enroll is in process')

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve()
            } else {
                reject('Enroll failed due to payment')
            }
        }, 2000)
    })
    return promise;
}


function progress() {
    console.log('Course is in progress');

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 90) {
                resolve()
            } else {
                reject('You was not able to get enough number in the exam, so you are rejected')
            }
        }, 3000);
    })
    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate');

    let promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congratulations !!! your certificate is ready ')
        }, 2000)
    });
    return promise;
}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


async function course() {
    try {
        await enroll()
        await progress()
        let message = await getCertificate()
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}

course()