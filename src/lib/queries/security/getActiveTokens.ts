import type { ISession } from "@/lib/types/security";
import { parseDate, parseDateOrNull } from "@/lib/utils/parseDate";
import axios from "axios";

interface Response {
    content: {
        id: string,
        system: string,
        host: string,
        lastUsedIp: string | null,
        location: string | null,
        lastLoginAt: string | null,
        createdAt: string,
    }[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    }
}

interface Result {
    content: ISession[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    }
}

export default async function getActiveTokens(page: number): Promise<Result> {
    const res = await axios.get<Response>(`mc/token?page=${page}&size=5`);
    return {
        ...res.data,
        content: res.data.content.map(el => {
            return {
                ...el,
                lastLoginAt: parseDateOrNull(el.lastLoginAt),
                createdAt: parseDate(el.createdAt),
            }
        }),
    }
}