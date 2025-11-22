import type { IAccount } from "@/lib/types/accounts";
import axios from "axios";

interface Response {
    id: string;
    nickname: string;
    createdAt: string;
    lastNicknameChangeAt: string;
}

export default async function getOtherAccounts(): Promise<IAccount[]> {
    const res = await axios.get<Response[]>("/player/all");
    return res.data.map(el => { 
        return {
            ...el,
            createdAt: new Date(el.createdAt),
            lastNicknameChangeAt: new Date(el.lastNicknameChangeAt),
        }
    });
}