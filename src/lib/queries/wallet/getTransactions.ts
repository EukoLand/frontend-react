import type { ITransaction } from "@/lib/types/wallet";
import { parseDate } from "@/lib/utils/parseDate";
import axios from "axios";

interface Result {
    id: string;
    description: string;
    createdAt: string;
    type: 'PURCHASE' | 'DEPOSIT';
    amount: number;
}

export default async function getTransactions(): Promise<ITransaction[]> {
    const res = await axios.get<Result[]>("wallet/transactions");
    return res.data.map(el => {
        return {
            ...el,
            createdAt: parseDate(el.createdAt),
        };
    });
}