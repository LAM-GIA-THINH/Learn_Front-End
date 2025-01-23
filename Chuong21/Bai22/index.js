function getPropertyHtml() {
/*
THÁCH THỨC CỰC KHÓ 💪

Hiển thị một thẻ cho mỗi bất động sản trong mảng `propertyForSaleArr` (trong thư mục 'properties'). Mỗi thẻ sẽ có hình ảnh, vị trí bất động sản, giá, nhận xét và kích thước tổng thể của bất động sản tính theo mét vuông (mỗi đối tượng có một mảng chứa kích thước các phòng riêng lẻ tính bằng mét vuông).

Nếu không có mảng bất động sản nào được truyền vào hàm `getPropertyHtml`, thì bất động sản mẫu được lưu trữ trong `placeholderPropertyObj` (trong thư mục 'properties') sẽ được hiển thị thay thế.

Đây là mã JS mà tôi muốn bạn sử dụng để hoàn thành thử thách 👇
- import/export
- .map()
- .join()
- Phân rã đối tượng
- .reduce()
- Tham số mặc định

HTML và CSS đã được làm sẵn cho bạn.
Dưới đây là mẫu HTML 👇. Thay thế tất cả những gì VIẾT HOA với dữ liệu bất động sản.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>VỊ TRÍ BẤT ĐỘNG SẢN</h2>
        <h3>GIÁ GBP</h3>
        <p>NHẬN XÉT</p>
        <h3>KÍCH THƯỚC TỔNG CỘNG M2</h3>
    </div>
</section> 
*/

}

/***** Sửa đổi 👇 bằng cách chỉ thêm một đối số vào lời gọi hàm. *****/

document.getElementById('container').innerHTML = getPropertyHtml()