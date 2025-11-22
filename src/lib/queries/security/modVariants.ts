import axios from "axios";

export default async function getModVariants(): Promise<string[]> {
    const res = await axios.get<string[]>("/mc/mod");
    return res.data;
}