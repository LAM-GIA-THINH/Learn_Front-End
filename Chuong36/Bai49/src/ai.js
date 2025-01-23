import Anthropic from "@anthropic-ai/sdk"
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 CẢNH BÁO: Đọc kỹ thông báo dưới đây! Bạn đã được cảnh báo! 👈🚨
// Hãy đảm bảo rằng bạn không đưa khóa API của mình vào bất kỳ kho lưu trữ nào
// và không triển khai dự án của mình trực tuyến ở bất kỳ nơi nào.
// Nếu không, bất kỳ ai cũng có thể kiểm tra mã nguồn của bạn và tìm thấy các khóa/tokens API của bạn.
// Nếu bạn muốn triển khai dự án này, bạn sẽ cần tạo một backend nào đó,
// có thể là của riêng bạn hoặc sử dụng một kiến trúc serverless để thực hiện các
// cuộc gọi API. Làm như vậy sẽ giúp giữ khóa API của bạn an toàn.

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}

const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
