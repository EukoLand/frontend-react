import axios from "axios";

export default async function getOwnMod(type: string): Promise<void> {
    axios.get(`/mc/mod/${type}/generate`);
}