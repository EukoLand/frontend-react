import type { IExpiredSanction, ISanction } from "@/types/sanctions"
import { Block, Header } from "./styles"
import Sanction from "./components/sanction"
import Punishment from "./components/punishment"

const sanctions: ISanction[] = [
    {
        id: '1',
        character: 'all',
        duration: '7д',
        expires: '08.10.2025, 17:30',
        expired: true,
        issued: '01.10.2025, 17:30',
        moderator: {
            image: 'https://mc-heads.net/avatar/Corin_Wicks',
            role: 'Модератор',
            username: 'Gravedigger',
        },
        reason: 'Использование читов',
        sanctions: [
            {
                title: 'Вход на сервер',
                description: 'Вы не можете подключиться к игровому серверу',
            },
            {
                title: 'Доступ к игровым каналам Discord',
                description: 'Ограничен доступ к игровым каналам сервера',
            },
        ]
    },
    {
        id: '2',
        character: 'Steve',
        duration: 'Навсегда',
        expires: 'Никогда',
        expired: false,
        issued: '28.09.2025, 13:15',
        moderator: {
            image: 'https://mc-heads.net/avatar/Syn7esis',
            role: 'Модератор',
            username: 'Syn7esis',
        },
        reason: 'Оскорбление игроков',
        sanctions: [
            {
                title: 'Общение в глобальном чате',
                description: 'Вы не можете писать в глобальный чат',
            },
            {
                title: 'Личные сообщения в игре',
                description: 'Вы не можете отправлять личные сообщения',
            },
        ]
    },
]

const punishments: IExpiredSanction[] = [
    {
        id: '1',
        character: 'Steve',
        duration: '3д',
        expired: true,
        expires: '23.09.2025, 17:30',
        image: 'https://mc-heads.net/avatar/Phemida',
        issued: '20.09.2025, 17:30',
        moderator: 'Phemida',
        reason: 'Флуд в чате',
        sanctions: [
            'Текстовые каналы Discord',
            'Общение в глобальном чате',
            'Личные сообщения в игре',
            'Текстовые каналы Discord',
            'Общение в глобальном чате',
            'Личные сообщения в игре',
            'Текстовые каналы Discord',
            'Общение в глобальном чате',
            'Личные сообщения в игре',
        ],
    }
]

export default function Sanctions() {
    return  <>
                <Block>
                    <Header>
                        Активные наказания
                    </Header>
                    {
                        sanctions.map(el => <Sanction key={el.id} {...el} />)
                    }
                </Block>
                <Block>
                    <Header>
                        История наказаний
                    </Header>
                    {
                        punishments.map(el => <Punishment key={el.id} {...el} />)
                    }
                </Block>
            </>
}