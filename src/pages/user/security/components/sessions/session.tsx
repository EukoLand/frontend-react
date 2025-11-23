import { GoKey, GoTrash } from "react-icons/go";
import { Content, Data, Delete, Line, ModalButtons, ModalText, SessionContainer, Title } from "./styles";
import Modal from "@/ui/modal";
import { useState } from "react";
import { CustomButton } from "@/ui/custom-button";
import formatDate from "@/lib/utils/fotmatDate";
import type { ISession } from "@/lib/types/security";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteToken from "@/lib/queries/security/deleteToken";

export default function Session(
    { 
        id, 
        system,
        host,
        lastUsedIp,
        location,
        lastLoginAt,
        createdAt,
    }: ISession
) {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const client = useQueryClient();
    const invalidate = () => {
        setTimeout(() => client.invalidateQueries({
                                        queryKey: ['activeKeys'],
                                    })
        , 500)
    }
    const { mutate } = useMutation({
        mutationKey: ['delete-token'],
        mutationFn: (id: string) => deleteToken(id),
        onSuccess: invalidate,
        onError: invalidate,
    });

    const onOpen = () => {
        setBlock(true);
        setOpen(true)
        setTimeout(() => setBlock(false), 1100)
    }

    const onClose = () => {
        setBlock(true)
        setAnim(true)
        setTimeout(() => {
            setOpen(false)
            setAnim(false)
            setBlock(false)
        }, 950)
    }

    const onDelete = (id: string) => {
        onClose();
        setTimeout(() => mutate(id), 1000);
    }
    
    return(
        <SessionContainer>
            <Content>
                <Title>
                    <GoKey fill="var(--red)" size={20} />
                    Ключ #{id}
                </Title>
                <Data>
                    <Line>
                        <span>Создан:</span> {formatDate(createdAt)}
                    </Line>
                    <Line>
                        <span>Последнее использование:</span> {lastLoginAt !== null ? formatDate(lastLoginAt) : 'никогда'}
                    </Line>
                    <Line>
                        <span>Устройство:</span> {system} ({host})
                    </Line>
                    <Line>
                        <span>Последний ip:</span> {lastUsedIp === null ? 'неизвестно' : lastUsedIp} ({location})
                    </Line>
                </Data>
            </Content>
            <Delete onClick={onOpen}>
                <GoTrash stroke="inherit" size={20} />
            </Delete>
            <Modal 
                open={open} 
                onClose={onClose} 
                anim={anim} 
                block={block} 
                label="Деактивировать ключ?"
            >
                <ModalText>
                    После деактивации этот ключ перестанет работать и мод потребуется скачать заново. Это действие нельзя отменить.
                </ModalText>
                <ModalButtons>
                    <CustomButton
                        onClick={onClose}
                        $rounded={8}
                        $animation="background"
                        $animationvalue="var(--content-fourth)"
                        $background="var(--content-third)"
                        $font={16}
                        $weight={500}
                        $fullOn={800}
                        $size={["calc(50% - 4px)", "auto"]}
                        $padding={[12, 16]}
                    >
                        Отмена
                    </CustomButton>
                    <CustomButton
                        onClick={() => onDelete(id)}
                        $rounded={8}
                        $animation="background"
                        $animationvalue="rgba(var(--red-rgb), .5)"
                        $background="var(--red)"
                        $font={16}
                        $weight={500}
                        $fullOn={800}
                        $size={["calc(50% - 4px)", "auto"]}
                        $padding={[12, 16]}
                    >
                        Деактивировать
                    </CustomButton>
                </ModalButtons>
            </Modal>
        </SessionContainer>
    )
}