import axios from "axios";
import type { LinkedAccount } from "../types/accounts";
import { parseDate, parseDateOrNull } from "../utils/parseDate";

interface Result {
    id: string;
    nickname: string;
    createdAt: string;
    lastNicknameChangeAt: string;
}

export default async function getLinkedAccounts(): Promise<LinkedAccount[] | undefined> {
    const res = await axios.get<Result[]>("/player/all");
    return res.data.map(el => {
        return {
            ...el,
            createdAt: parseDate(el.createdAt),
            lastNicknameChangeAt: parseDateOrNull(el.lastNicknameChangeAt),
        };
    });
}