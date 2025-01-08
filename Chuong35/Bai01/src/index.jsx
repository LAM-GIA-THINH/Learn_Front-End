import {createRoot} from "react-dom/client"
import App from "./App"
/**  
 * Thách thức:  
 *  
 * - Tạo một component App trong một file riêng.  
 *   Import nó vào file này và render.  
 * - Tạo một thư mục "components" và một component Header.  
 *   Render Header bên trong component App.  
 * - Làm theo thiết kế của Travel Journal để xây dựng  
 *   Header cho trang của chúng ta.  
 */  
const root = createRoot(document.getElementById("root"))
root.render(<App />)