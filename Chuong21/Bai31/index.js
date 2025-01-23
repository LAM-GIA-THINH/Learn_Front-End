const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

function findPriceExtremes(arr){
/*
Thử thách:
2. Tìm số lớn nhất trong mảng 
   và lưu trữ nó vào biến hằng 'highest'. 
3. Tìm số nhỏ nhất trong mảng 
   và lưu trữ nó vào biến hằng 'lowest'. 
*/

    const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}

/*
Thử thách:
1. Gọi hàm này với một mảng chứa 
   tất cả dữ liệu từ 4 mảng ở trên.
*/
findPriceExtremes([
    ...averageSharePriceByMonthQ1,
    ...averageSharePriceByMonthQ2,
    ...averageSharePriceByMonthQ3,
    ...averageSharePriceByMonthQ4
])