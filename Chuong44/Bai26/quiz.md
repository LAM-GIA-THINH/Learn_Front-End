Tìm Từ Ghép Vần trong Mảng
Viết một hàm xác định những chuỗi trong mảng là từ ghép vần của cụm từ "Bob Ziroll Teacher". Hàm nhận hai tham số: cụm từ để so sánh và mảng các từ ghép vần. Hàm trả về một mảng mới gồm những từ ghép vần trùng khớp với cụm từ gốc. 

Ví dụ đầu vào: "treat", ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Ví dụ đầu ra: ["tater", "teart", "tetra"]

Để giải quyết bài toán tìm anagram, chúng ta cần viết một hàm `isAnagramInArray()` nhận vào một cụm từ và một mảng các cụm từ, và trả về một mảng các từ trong mảng anagram mà là anagram của cụm từ cần so sánh.

### Cách giải quyết:
1. **Chuẩn hóa cụm từ**: Để so sánh các từ với nhau, ta sẽ chuyển tất cả chúng về dạng chữ thường và loại bỏ các ký tự không phải chữ cái (khoảng trắng, dấu câu, v.v.).
2. **Sắp xếp các chữ cái**: Để xác định xem hai từ có phải là anagram hay không, ta sẽ sắp xếp các chữ cái của chúng theo thứ tự và so sánh.
3. **Kiểm tra anagram**: Dùng phương pháp trên để kiểm tra các từ trong mảng anagram xem có phải là anagram của cụm từ đầu vào hay không.

### Cách triển khai:

```javascript
function isAnagramInArray(phrase, arr) {
    // Hàm chuẩn hóa cụm từ: chuyển thành chữ thường và bỏ khoảng trắng
    const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    // Chuẩn hóa cụm từ so sánh
    const normalizedPhrase = normalize(phrase);

    // Lọc mảng anagram và kiểm tra xem từ có phải là anagram của cụm từ không
    return arr.filter(anagram => normalize(anagram) === normalizedPhrase);
}

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
```

### Giải thích:
1. **`normalize()`**: Hàm này sẽ chuyển đổi cụm từ thành chữ thường, loại bỏ khoảng trắng và sắp xếp các chữ cái theo thứ tự.
2. **`normalizedPhrase`**: Đây là phiên bản chuẩn hóa của cụm từ đầu vào.
3. **`arr.filter()`**: Dùng phương pháp `filter()` để lọc ra những từ trong mảng `arr` có dạng chuẩn hóa giống với `normalizedPhrase`.

### Kết quả:
Hàm sẽ trả về một mảng các từ trong `anagrams` mà là anagram của `"Bob Ziroll Teacher"`.