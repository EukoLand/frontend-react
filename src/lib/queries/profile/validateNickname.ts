import axios from "axios";

export default async function validateNickname(nickname: string): Promise<boolean> {
    try {
        const res = await  axios.get<boolean>(`/player/check-name/${nickname}`);
        return res.status === 200 ? res.data : false;
    } catch {
        return false;
    }
}