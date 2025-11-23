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

export default function Wallet() {
    const { data: balance } = useQuery({
        queryKey: ['balance'],
        queryFn: getBalance,
    }); 

    const { data: transactions } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
        placeholderData: keepPreviousData,
    });

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
                    transactions !== undefined && transactions.map(el => 
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
            </History>
        </Container>
    )
}