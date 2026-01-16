import type { IAccount } from "@/lib/types/accounts";
import axios from "axios";

interface Response {
    id: string;
    nickname: string;
    createdAt: string;
    lastNicknameChangeAt: string;
}

export default async function getMainAccount(): Promise<IAccount> {
    const res = await axios.get<Response>("/player/main");
    console.log(res.data.nickname)
    return {
        ...res.data,
        createdAt: new Date(res.data.createdAt),
        lastNicknameChangeAt: new Date(res.data.lastNicknameChangeAt),
    };
}