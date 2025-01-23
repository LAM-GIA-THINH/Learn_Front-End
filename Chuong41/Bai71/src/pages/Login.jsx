import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

/**
 * Thử thách: Viết mã cho trường hợp lỗi 🙁
 * 3. Thêm một trạng thái `status` và mặc định là "idle". Khi 
 *    biểu mẫu đăng nhập bắt đầu gửi, đặt trạng thái là "submitting". Khi
 *    việc gửi hoàn tất và dữ liệu đã được trả về, đặt lại trạng thái
 *    thành "idle".
 * 4. Vô hiệu hóa nút khi trạng thái `status` là "submitting"
 *    (điều này có thể yêu cầu tìm kiếm trên Google nếu bạn chưa làm việc này
 *    trước đây).
 * 5. Thêm một trạng thái `error` và mặc định là `null`. Khi 
 *    biểu mẫu được gửi, đặt lại lỗi thành `null`. Nếu có lỗi từ 
 *    `loginUser` (thêm `.catch(err => {...})` trong chuỗi promise),
 *    đặt lỗi thành lỗi được trả về.
 * 6. Hiển thị `error.message` bên dưới `h1` nếu có lỗi trong trạng thái
 */

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    
    const location = useLocation()
    
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
                setError(null)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {
                error?.message &&
                <h3 className="login-error">{error.message}</h3>
            }
            
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}