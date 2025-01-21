Hiện tại, việc thiết lập các tham số truy vấn đang có một vấn đề lớn. 
Khi có nhiều tham số truy vấn, việc mã hóa cứng một tham số sẽ khiến các tham số khác
bị mất khi tương tác với ứng dụng. 
Ví dụ, nếu có tham số truy vấn "name=Jill" và 
sau đó nhấp vào nút hoặc liên kết, tham số truy vấn sẽ bị thay đổi thành "type=Sith" hoặc "type=Jedi",
tùy thuộc vào lựa chọn, và tham số "name=Jill" sẽ bị mất. Điều tương tự cũng xảy ra khi sử dụng nút clear.
Cách làm hiện tại chỉ hoạt động nếu chắc chắn không có tham số truy vấn nào khác, tuy nhiên, 
để đảm bảo tính đầy đủ và linh hoạt, nên sử dụng phương pháp kết hợp các tham số truy vấn thay vì thay thế hoàn toàn chúng.
