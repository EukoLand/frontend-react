import { baseURL } from "@/main";

export default function getHead(nickname: string) {
    return baseURL + "media/pfp/" + nickname;
}