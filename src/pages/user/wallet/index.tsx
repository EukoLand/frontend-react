import { FiMinus } from "react-icons/fi";
import { 
    Balance, 
    BalanceDigits, 
    BalanceSubtitle, 
    BalanceTitle, 
    BalanceValue, 
    Container, 
    History, 
    HistoryLabel, 
    PageButton, 
    PagesContainer, 
    Tokens, 
    Transaction, 
    TransactionDate, 
    TransactionIcon, 
    TransactionLabel, 
    TransactionLeft, 
    TransactionText, 
    TransactionValue 
} from "./styles";
import { FaPlus } from "react-icons/fa6";
import Replenishing from "./components/replenishing";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getBalance from "@/lib/queries/wallet/getBalance";
import getTransactions from "@/lib/queries/wallet/getTransactions";
import { formatDateAndTime } from "@/lib/utils/fotmatDate";
import { useRef } from "react";

export default function Wallet() {
    const page = useRef<number>(0);
    const { data: balance } = useQuery({
        queryKey: ['balance'],
        queryFn: getBalance,
    }); 

    const { data: transactions, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTransactions(page.current),
        placeholderData: keepPreviousData,
    });

    const changePage = (newPage: number) => {
        page.current = newPage;
        refetch();
    }

    const getPagesArray = (amount: number, current: number) => {
        if(current <= 3) return [...Array(amount <=5 ? amount : 5)].map((_, index) => index);
        if(current >= amount-2) return [
            0,
            ...[...Array(amount)].map((_, index) => index).slice(amount-4),
        ];
        return [
            0,
            ...[...Array(amount)].map((_, index) => index).slice(current-1, current+2),
            amount-1,
        ];
    }

    return(
        <Container>
            <Tokens>
                <Balance>
                    <BalanceTitle>
                        Баланс токенов
                    </BalanceTitle>
                    <BalanceValue>
                        <BalanceDigits>
                            { balance }
                        </BalanceDigits>
                         <BalanceSubtitle>токенов</BalanceSubtitle>
                    </BalanceValue>
                </Balance>
                <Replenishing />
            </Tokens>
            <History>
                <HistoryLabel>
                    История транзакций
                </HistoryLabel>
                {
                    transactions !== undefined && 
                    <>
                        {
                            transactions.content.map(el => 
                                <Transaction key={el.id}>
                                    <TransactionLeft>
                                        <TransactionIcon $red={el.type === 'PURCHASE'}>
                                            {
                                                el.type === 'PURCHASE' 
                                                    ? <FiMinus fill="inherit" stroke="inherit" size={20} />
                                                    :  <FaPlus fill="inherit" stroke="inherit" size={20} />
                                            }
                                        </TransactionIcon>
                                        <TransactionText>
                                            <TransactionLabel>
                                                { el.description }
                                            </TransactionLabel>
                                            <TransactionDate>
                                                { formatDateAndTime(el.createdAt )}
                                            </TransactionDate>
                                        </TransactionText>
                                    </TransactionLeft>
                                    <TransactionValue $red={el.type === 'PURCHASE' }>
                                        { el.type === 'DEPOSIT' ? '+' : '-' }{ el.amount }
                                    </TransactionValue>
                                </Transaction>
                            )
                        }
                        <PagesContainer>
                            {
                                getPagesArray(
                                    transactions.page.totalPages,
                                    transactions.page.number
                                ).map((el) => (
                                    <PageButton 
                                        $current={el === transactions.page.number}
                                        onClick={() => changePage(el)}
                                    >
                                        { el+1 }
                                    </PageButton>
                                ))
                            }
                        </PagesContainer>
                    </>
                }
            </History>
        </Container>
    )
}