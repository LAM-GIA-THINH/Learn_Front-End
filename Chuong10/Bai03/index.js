let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Sử dụng vòng lặp for để xuất ra console như sau:

5 quốc gia lớn nhất trên thế giới:
- China
- India
- United States
- Indonesia
- Pakistan
*/

console.log("5 quốc gia lớn nhất trên thế giới:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}
