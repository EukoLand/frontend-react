import axios from "axios";

export default async function getBlockStatus(): Promise<boolean> {
    return (await axios.get("mc/auth/status")).data;
}