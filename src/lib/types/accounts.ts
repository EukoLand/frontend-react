export interface IAccount {
    id: string;
    // image: string;
    nickname: string;
    createdAt: Date;
    lastNicknameChangeAt: Date;
    // isOnline: boolean;
}

export interface LinkedAccount {
    id: string;
    nickname: string;
    createdAt: string;
}