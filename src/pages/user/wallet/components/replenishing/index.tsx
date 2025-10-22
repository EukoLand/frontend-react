import { CustomButton } from "@/ui/custom-button";
import Modal from "@/ui/modal";
import { useState, type ReactNode } from "react";
import { 
    Block, 
    BlockLabel, 
    Buttons, 
    Line, 
    MethodContainer, 
    MethodIcon, 
    MethodLabel, 
    MethodLeft, 
    MethodSubtitle,
    MethodText, 
    PaymentMethods, 
    Subvalue, 
    SummaryBlock, 
    SummaryContainer, 
    SummaryTitle, 
    SummaryValue, 
    Value, 
    ValueContainer, 
    Values 
} from "./styled";
import { FaDiscord, FaRegCreditCard } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

const values = [10, 14, 16, 18, 24]

interface PaymentMethod {
    icon: ReactNode;
    color: string; // в виде r, g, b
    label: string;
    currency: string;
    subtitle: string;
    perOne: number;
}

const methods: PaymentMethod[] = [
    {
        icon: <FaRegCreditCard stroke="rgb(43, 127, 255)" fill="rgb(43, 127, 255)" size={24} />,
        color: '43, 127, 255',
        label: 'Банковская карта',
        currency: '$',
        subtitle: 'ЕС, Украина, Казахстан (Stripe)',
        perOne: 0.1,
    },
    {
        icon: <FaDiscord stroke="rgb(97, 95, 255)" fill="rgb(97, 95, 255)" size={24} />,
        color: '97, 95, 255',
        label: 'Тикет Discord',
        currency: '₽',
        subtitle: 'Российские карты',
        perOne: 8,
    },
]

export default function Replenishing() {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const [curr, setCurr] = useState<number | undefined>(undefined);
    const [currency, setCurrency] = useState<PaymentMethod | undefined>(undefined);

    const onOpen = () => {
        setBlock(true);
        setOpen(true);
        setTimeout(() => setBlock(false), 1100)
    }

    const onClose = () => {
        setBlock(true)
        setAnim(true)
        setTimeout(() => {
            setOpen(false)
            setAnim(false)
            setCurr(undefined)
            setCurrency(undefined)
            setBlock(false)
        }, 950)
    }

    const formatCurrency = (value: number) => {
        if(currency === undefined) return '—';
        else if(['₽'].indexOf(currency?.currency) !== -1) return `${value.toFixed(2)}${currency.currency}`
        else return `${currency.currency} ${value.toFixed(2)}`
    }

    return(
        <>
            <CustomButton
                $padding={[12, 24]}
                $rounded={8}
                $background="var(--content-third)"
                $outline="1px solid var(--content-fourth)"
                $font={16}
                $weight={600}
                $animation="background"
                $animationvalue="rgba(255, 255, 255, .1)"
                onClick={onOpen}
                disabled={block}
            >
                Пополнить кошелёк
            </CustomButton>
            <Modal 
                block={block}
                onClose={onClose} 
                open={open} 
                anim={anim}
                label="Пополнение кошелька"
            >
                <Block>
                    <BlockLabel>
                        Выберите сумму
                    </BlockLabel>
                    <Values>
                        {
                            values.map((el, index) => 
                                <ValueContainer $chosen={el == curr} onClick={() => setCurr(el)} key={index}>
                                    <Value>
                                        { el }
                                    </Value>
                                    <Subvalue>
                                        токенов
                                    </Subvalue>
                                </ValueContainer>
                            )
                        }
                        <ValueContainer $chosen={false} disabled title="Временно недоступно">
                            <Value>
                                ...
                            </Value>
                            <Subvalue>
                                своя сумма
                            </Subvalue>
                        </ValueContainer>
                    </Values>
                </Block>
                {
                    curr !== undefined && 
                        <>
                            <SummaryContainer>
                                <SummaryBlock>
                                    <SummaryTitle>
                                        Токены:
                                    </SummaryTitle>
                                    <SummaryValue>
                                        { curr }
                                    </SummaryValue>
                                </SummaryBlock>
                                <SummaryBlock>
                                    <SummaryTitle>
                                        Цена за токен:
                                    </SummaryTitle>
                                    <SummaryValue>
                                        { currency === undefined ? '—' : formatCurrency(currency.perOne) }
                                    </SummaryValue>
                                </SummaryBlock>
                                <Line />
                                <SummaryBlock>
                                    <SummaryTitle $main>
                                        Итого:
                                    </SummaryTitle>
                                    <SummaryValue $main>
                                        { currency !== undefined ? formatCurrency(curr*currency.perOne) : '—' }
                                    </SummaryValue>
                                </SummaryBlock>
                            </SummaryContainer>
                            <Block>
                                <BlockLabel>
                                    Способ оплаты
                                </BlockLabel>
                                <PaymentMethods>
                                    {
                                        methods.map((el, index) => 
                                            <MethodContainer 
                                                key={index} 
                                                $curr={el === currency}
                                                onClick={() => setCurrency(el)}
                                            >
                                                <MethodLeft>
                                                    <MethodIcon $color={el.color}>
                                                        { el.icon }
                                                    </MethodIcon>
                                                    <MethodText>
                                                        <MethodLabel>
                                                            { el.label }
                                                        </MethodLabel>
                                                        <MethodSubtitle>
                                                            { el.subtitle }
                                                        </MethodSubtitle>
                                                    </MethodText>
                                                </MethodLeft>
                                                <GrStatusGood 
                                                    style={{ 
                                                        opacity: el === currency ? '1' : '0',
                                                        transitionDuration: `200ms`,
                                                    }} 
                                                    size={24} 
                                                    stroke="var(--red)" 
                                                    fill="var(--red)" 
                                                />
                                            </MethodContainer>
                                        )
                                    }
                                </PaymentMethods>
                            </Block>
                        </>
                }
                <Buttons>
                    <CustomButton
                        onClick={onClose}
                        disabled={anim || !open}
                        type="button"
                        $background="var(--content-third)"
                        $animation="background"
                        $animationvalue="var(--content-fourth)"
                        $size={["calc(50% - 8px)", "48px"]}
                        $padding={[0, 0]}
                        $rounded={8}
                        $font={18}
                    >
                        Отмена
                    </CustomButton>
                    <CustomButton
                        disabled={curr === undefined || currency === undefined}
                        $background="var(--red)"
                        $animation="background"
                        $animationvalue="rgba(var(--red-rgb), .7)"
                        $size={["calc(50% - 8px)", "48px"]}
                        $padding={[0, 0]}
                        $rounded={8}
                        $font={18}
                    >
                        Изменить
                    </CustomButton>
                </Buttons>
            </Modal>
        </>
    )
}