import axios from "axios";

export default async function getBalance() {
    return (await axios.get<{ balance: number }>("wallet/balance")).data.balance;
}