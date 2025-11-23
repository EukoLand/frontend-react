import axios from "axios";

export default async function deleteToken(id: string) {
    axios.delete(`mc/token/${id}`);
}