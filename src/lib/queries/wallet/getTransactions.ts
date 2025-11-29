import type { ITransaction } from "@/lib/types/wallet";
import { parseDate } from "@/lib/utils/parseDate";
import axios from "axios";

interface Response {
    content: {
        id: string;
        description: string;
        createdAt: string;
        type: 'PURCHASE' | 'DEPOSIT';
        amount: number;
    }[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    };
}

interface Result {
    content: ITransaction[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    };
}

export default async function getTransactions(page: number): Promise<Result> {
    const res = await axios.get<Response>(`wallet/transactions?page=${page}&size=5`);
    return {
        ...res.data,
        content: res.data.content.map(el => {
            return {
                ...el,
                createdAt: parseDate(el.createdAt),
            };
        }),
    };
}