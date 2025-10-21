import { FiMinus } from "react-icons/fi";
import { Balance, BalanceTitle, BalanceValue, Container, History, HistoryLabel, Tokens, Transaction, TransactionDate, TransactionIcon, TransactionLabel, TransactionLeft, TransactionText, TransactionValue } from "./styles";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import Replenishing from "./components/replenishing";

interface ITransaction {
    id: string;
    label: string;
    date: string;
    time: string;
    type: 'refund' | 'buy' | 'replenishing';
    value: number;
}

const transactions: ITransaction[] = [
    {
        id: '1',
        label: 'Возврат',
        date: '01.10.2025',
        time: '14:59',
        type: 'refund',
        value: 16,
    },
    {
        id: '2',
        label: 'Покупка проходки',
        date: '01.10.2025',
        time: '14:45',
        type: 'buy',
        value: -16,
    },
    {
        id: '3',
        label: 'Пополнение',
        date: '01.10.2025',
        time: '14:30',
        type: 'replenishing',
        value: 16,
    },
]

export default function Wallet() {
    return(
        <Container>
            <Tokens>
                <Balance>
                    <BalanceTitle>
                        Баланс токенов
                    </BalanceTitle>
                    <BalanceValue>
                        0 <span>токенов</span>
                    </BalanceValue>
                </Balance>
                <Replenishing />
            </Tokens>
            <History>
                <HistoryLabel>
                    История транзакций
                </HistoryLabel>
                {
                    transactions.map(el => 
                        <Transaction key={el.id}>
                            <TransactionLeft>
                                <TransactionIcon $red={el.type === 'buy'}>
                                    {
                                        el.type === 'buy' 
                                            ? <FiMinus fill="inherit" stroke="inherit" size={20} />
                                            : el.type === 'refund'
                                            ? <HiMiniArrowUturnLeft fill="inherit" stroke="inherit" size={20} />
                                            :  <FaPlus fill="inherit" stroke="inherit" size={20} />
                                    }
                                </TransactionIcon>
                                <TransactionText>
                                    <TransactionLabel>
                                        { el.label }
                                    </TransactionLabel>
                                    <TransactionDate>
                                        { el.date }, { el.time }
                                    </TransactionDate>
                                </TransactionText>
                            </TransactionLeft>
                            <TransactionValue $red={el.value < 0}>
                                { el.value }
                            </TransactionValue>
                        </Transaction>
                    )
                }
            </History>
        </Container>
    )
}