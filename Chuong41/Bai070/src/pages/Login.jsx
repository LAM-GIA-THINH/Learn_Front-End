import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

/**
 * Thử thách: kết nối form để nó hoạt động (một nửa).
 * 
 * 1. Import hàm `loginUser` từ file api.js.
 * 2. Gọi `loginUser` khi form được submit và log dữ liệu
 *    trả về. Sử dụng "b@b.com" làm username và "p123" làm password.
 * 
 *    LƯU Ý: `loginUser` trả về một Promise, vì vậy bạn sẽ cần
 *    sử dụng `.then(data => {...})` để truy cập dữ liệu, hoặc
 *    định nghĩa một hàm async riêng bên trong `handleSubmit`.
 * 3. Đang được bổ sung (TBA - To Be Announced).
 */

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    
    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => console.log(data))
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
                <h3 className="login-first">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
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
                <button>Log in</button>
            </form>
        </div>
    )

}