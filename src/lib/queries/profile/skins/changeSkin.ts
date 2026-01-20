import axios from "axios";

export default async function changeSkin(skin: File, nickname: string) {
    const formData = new FormData();
    const blob = new Blob([
        new Uint8Array(
            await skin.arrayBuffer()
        )
    ], {
        type: skin.type
    });
    formData.append("file", blob);
    await axios.post(`/media/skin/${nickname}`, formData);
}