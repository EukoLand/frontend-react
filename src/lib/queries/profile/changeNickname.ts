import axios from "axios";

interface Response {
    id: string;
    nickname: string;
    createdAt: string;
    lastNicknameChangeAt: string;
}

export default async function changeNickname(data: { id: string,  nickname: string}) {
    try {
        const res = await axios.put<Response>("/player/nickname", data);
        if (res.status === 200 && res.data.id === data.id && res.data.nickname === data.nickname) return true;
        return false;
    } catch {
        return false;
    }
}