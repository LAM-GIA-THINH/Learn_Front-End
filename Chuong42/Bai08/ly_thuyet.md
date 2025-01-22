# Code Splitting là gì?

○ Thay vì luôn import code "nặng", 
bạn có thể import có điều kiện 
chỉ khi/nếu cần.

○ Chia nhỏ thời gian tải xuống, để các 
tính năng chính của bạn không bị chặn bởi 
kết nối chậm

○ Đôi khi bỏ qua hoàn toàn những 
code không cần thiết

# Nó hoạt động như thế nào?

○ Sử dụng hàm "dynamic import" - 
import()

○ Kết hợp import() với
React.lazy() để chỉ tải một
component "nặng" khi cần

○ Sử dụng <Suspense> để cung cấp một
giao diện dự phòng trong khi "lazy
component" đang tải
