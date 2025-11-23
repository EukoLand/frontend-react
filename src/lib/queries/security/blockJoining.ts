import axios from "axios";

export default async function blockJoining() {
    return (await axios.patch<{ activated: boolean }>("mc/auth/toggle")).data;
}