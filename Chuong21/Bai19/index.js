import { studentsArr } from './studentsArr.js';

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent) => 
        total + currentStudent.grade, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))