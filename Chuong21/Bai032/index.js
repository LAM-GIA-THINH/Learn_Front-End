// "Để thực hiện short-circuiting, chúng ta sử dụng:

// Toán tử OR logic (||)
// Toán tử AND logic (&&)"


// /***** if else *****/
// if (jobHunter.jobSearchArea) {
//     console.log(`${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`)
// }
// else {
//     console.log(`${jobHunter.name}'s work location is Worldwide`)
// }

// /***** ternary *****/
// // const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide' 
// // console.log(`${jobHunter.name}'s work location is ${workLocation}`)

const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
}

const workLocation = jobHunter.jobSearchArea || 'Worldwide'
console.log(`${jobHunter.name}'s work location is ${workLocation}`)


