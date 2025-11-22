import type { IModer } from "./moderators";

export interface ISanction {
    id: string;
    targetPlayerNickname: string;
    reason: string;
    issued: string;
    duration: string;
    expiresAt: string;
    permanent: boolean;
    expired: boolean;
    moderator: IModer;
    sanctions: AccessSanction[];
}

export interface IExpiredSanction {
    id: string;
    character: string;
    image: string;
    reason: string;
    issued: string;
    duration: string;
    expires: string;
    expired: boolean;
    moderator: string;
    sanctions: string[];
}

export interface AccessSanction {
    title: string;
    description: string;
}