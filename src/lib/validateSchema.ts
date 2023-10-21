import { z } from "zod"

export const contactSchema = z.object({
	name: z.string().min(1, { message: "名前を入力してください" }),
	email: z.string().email({ message: "メールアドレスを正しく入力してください" }),
	message: z.string().min(10, { message: "メッセージは10文字以上にしてください" })
});
