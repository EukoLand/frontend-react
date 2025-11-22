import type { LinkedAccount } from '@/lib/types/identify';
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccountStore {
    account: LinkedAccount | null;
    setAccount: (newAccount: LinkedAccount) => void;
}

export const useAccount = create<AccountStore>()(
    persist(
        (set) => ({
            account: null,
            setAccount: (newAccount: LinkedAccount) => set(() => ({ account: newAccount })),
        }),
        {
            name: 'account',
            storage: createJSONStorage(() => localStorage), 
        },
    )
)