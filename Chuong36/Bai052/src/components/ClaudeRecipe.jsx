import ReactMarkdown from "react-markdown"
/**
 * Thử thách: Hãy xem bạn có thể tìm ra cách sử dụng gói
 * react-markdown để render `props.recipe` thành các phần tử React
 * thay vì văn bản markdown thông thường không.
 * 
 * Sử dụng liên kết trong slide để truy cập trực tiếp vào
 * hướng dẫn của gói này về cách sử dụng nó.
 * 
 * Sử dụng lớp `suggested-recipe-container` trên thẻ <section>
 * dưới đây để có một số kiểu dáng miễn phí 🙂
 */

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}