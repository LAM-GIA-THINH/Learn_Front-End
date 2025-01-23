1. **Lý do chính để sử dụng nested route là gì?**
   Khi chúng ta có một số UI chung giữa các route trong ứng dụng.

2. **"Layout Route" là gì?**
   Đây là route cha của các nested route, chỉ chứa phần UI sẽ được chia sẻ. Nó sử dụng một component `Outlet`.

3. **Component `<Outlet />` làm gì? Khi nào bạn sử dụng nó?**
   Chúng ta sử dụng nó bất cứ khi nào có một Route cha bao bọc các route con. Nó sẽ render `element` prop của route con phù hợp được định nghĩa trong route.

4. **"Index Route" là gì?**
   Đây là "route mặc định" mà chúng ta muốn render khi đường dẫn của route cha khớp. Nó cho phép chúng ta render một element bên trong `<Outlet />` của route cha tại cùng một đường dẫn với route cha.