import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"

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

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}
//nếu host vans ko load gì hãy check lại xem hostId trong database có phải kiểu string hay ko
export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

/* 
Điều này 👇 không phải là việc bạn thường cần làm. Thay vào đó, bạn nên thiết lập các quy tắc bảo mật của Firebase 
để chỉ người dùng đã đăng nhập mới có thể chỉnh sửa thông tin về vans của họ.

https://firebase.google.com/docs/rules

Tôi chỉ để lại đoạn này ở đây vì mục đích học tập, vì tôi đã mất khá nhiều thời gian để tìm ra hàm `documentId()` 
cho phép bạn sử dụng bộ lọc `where()` trên thuộc tính ID của tài liệu. (Bởi vì thông thường, nó chỉ kiểm tra các thuộc tính dữ liệu (`data()`) của tài liệu, nghĩa là bạn không thể dùng `where("id", "==", id)`).

Nó cũng minh họa cách bạn có thể kết hợp nhiều lệnh gọi bộ lọc `where` liên tiếp.
*/

// export async function getHostVan(id) {
//     const q = query(
//         vansCollectionRef,
//         where(documentId(), "==", id),
//         where("hostId", "==", "123")
//     )
//     const snapshot = await getDocs(q)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans[0]
// }

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