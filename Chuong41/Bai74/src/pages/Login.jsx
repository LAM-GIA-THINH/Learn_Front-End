import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host";

    /**
     * Thử thách: Sau khi đăng nhập, hãy đảm bảo người dùng được chuyển đến
     * trang mà họ ban đầu muốn truy cập thay vì luôn
     * chuyển đến route /host. Nếu người dùng không bị chuyển hướng
     * đến trang đăng nhập (tức là họ nhấp vào liên kết đến trang đăng nhập
     * thay vì bị chuyển hướng từ một route được bảo vệ), họ vẫn
     * sẽ được chuyển hướng đến /host theo mặc định.
     * 
     * Gợi ý: Bạn sẽ cần thêm mã vào AuthRequired.jsx và
     * Login.jsx.
     */
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
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