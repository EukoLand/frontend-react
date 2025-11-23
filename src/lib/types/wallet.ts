export interface ITransaction {
    id: string;
    description: string;
    createdAt: Date;
    type: 'PURCHASE' | 'DEPOSIT';
    amount: number;
}