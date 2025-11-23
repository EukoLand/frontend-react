export interface ISession {
    id: string,
    system: string,
    host: string,
    lastUsedIp: string | null,
    location: string | null,
    lastLoginAt: Date | null,
    createdAt: Date,
}