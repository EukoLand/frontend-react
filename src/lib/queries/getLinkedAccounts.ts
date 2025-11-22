import axios from "axios";
import type { LinkedAccount } from "../types/accounts";

export default async function getLinkedAccounts(): Promise<LinkedAccount[] | undefined> {
    const res = await axios.get<LinkedAccount[]>("/player/all");
    if(res.status == 200) return res.data;
    else return undefined;
}