const members = require('./member');

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const females = members.filter(item => item.gender == "여")
            resolve(females)
        }, 500)
    })
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const YBs = members.filter(item => item.status == "YB")
            resolve(YBs)
        }, 500)
    })
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const iOSs = members.filter(item => item.part == "iOS")
            resolve(iOSs)
        }, 500)
    })
}
getFemale(members) //
    .then(females => getYB(females))
    .then(YBs => getiOS(YBs))
    .then(iOSs => console.log(iOSs));