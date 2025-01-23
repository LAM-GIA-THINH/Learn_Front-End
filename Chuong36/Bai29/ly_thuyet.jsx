// truthy && falthy
// điều kiện dc check từ trái qua phải
if (true && true) {
    console.log("Everything was true!")  // Được log vì điều kiện đúng
} 
if (true && false) {
    console.log("Everything was true!")  // Không được log vì điều kiện sai
} 
if (false && true) {
    console.log("Everything was true!")  // Không được log vì điều kiện sai
} 
if (false && false) {
    console.log("Everything was true!")  // Không được log vì điều kiện sai
}

if (false && console.log("This code is running")) { //Không được thực thi
    // console.log("Everything was true!")
}

if (true && console.log("This code is running")) { //Sẽ được thực thi
    // console.log("Everything was true!")
}

if (console.log("This code is running") && false) { 
    // console.log("Everything was true!")
} 
//console.log("This code is running") được gọi trước. Sau đó, điều kiện trở thành false, vì vậy phần còn lại của if không được thực thi