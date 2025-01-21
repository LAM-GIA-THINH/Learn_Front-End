import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyAo3EgrEkGnr6mblcjKHNHtZuakTcIaRm8",
  authDomain: "vanlife-81ae9.firebaseapp.com",
  projectId: "vanlife-81ae9",
  storageBucket: "vanlife-81ae9.firebasestorage.app",
  messagingSenderId: "317493661625",
  appId: "1:317493661625:web:09741a66bbd350553ef068"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Tái cấu trúc các hàm lấy dữ liệu bên dưới.






export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}