import type { ISession } from "@/lib/types/security";
import { parseDate, parseDateOrNull } from "@/lib/utils/parseDate";
import axios from "axios";

interface Response {
    id: string,
    system: string,
    host: string,
    lastUsedIp: string | null,
    location: string | null,
    lastLoginAt: string | null,
    createdAt: string,
}

export default async function getActiveTokens(): Promise<ISession[]> {
    const res = await axios.get<Response[]>('mc/token');
    return res.data.map(el => {
        return {
            ...el,
            lastLoginAt: parseDateOrNull(el.lastLoginAt),
            createdAt: parseDate(el.createdAt),
        }
    });
}