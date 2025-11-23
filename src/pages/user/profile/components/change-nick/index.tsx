import { CustomButton } from "@/ui/custom-button";
import { useState } from "react"
import { Blocks, Buttons, Form, Input, InputContainer, InputLabel, InputValidation, Warning } from "./styles";
import { useForm, type SubmitHandler } from 'react-hook-form';
import Modal from "@/ui/modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import validateNickname from "@/lib/queries/profile/validateNickname";
import { useDebouncedCallback } from 'use-debounce';
import changeNickname from "@/lib/queries/profile/changeNickname";
import { toast } from "react-toastify";
import { useAccount } from "@/store/account";

interface IForm {
    nickname: string;
}

export default function ChangeNick() {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const [input, setInput] = useState<boolean>(false);
    const account = useAccount((store) => store.account);
    
    const { register, handleSubmit, formState: { errors, isValid }, watch, reset } = useForm<IForm>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
    })

    const value = watch('nickname', '');

    // Функция запроса валидации
    const { data, isFetching, isError, refetch } = useQuery({
        queryKey: ['validateKey'],
        queryFn: () => validateNickname(value),
        enabled: false,
    }); 

    // Функция запроса на смену ника
    const { data: result, isPending, mutateAsync } = useMutation({
        mutationKey: ['changeNick'],
        mutationFn: ({ id, nickname }: { id: string, nickname: string }) => changeNickname({ id, nickname }),
    });
    
    // Функция запроса на проверку валидации с задержкой для ввода
    const checkNickname = useDebouncedCallback(() => {
        if (!isValid) return;
        refetch();
        setInput(false);
    }, 500);
    
    // Функция для получения текста валидации
    const validationFn = useDebouncedCallback(() => {
        if(errors.nickname?.message !== undefined) return errors.nickname.message;
        if(isFetching) return "Проверяем";
        if(isError) return "Ошибка";
        return data ? "✗ Никнейм недоступен" : "✓ Никнейм доступен"; 
    }, 500);

    // Открытие модалки
    const onOpen = () => {
        setBlock(true);
        setOpen(true);
        setTimeout(() => setBlock(false), 1100)
    }

    // Закрытие модалки
    const onClose = () => {
        setBlock(true)
        setAnim(true)
        setTimeout(() => {
            setOpen(false)
            setAnim(false)
            reset()
            setBlock(false)
        }, 950)
    }

    // Отправляем новый ник
    const onSubmit: SubmitHandler<IForm> = async (data) => {
        if(account === null) {
            toast.error("Аккаунт не выбран");
            return;
        }
        const response = await mutateAsync({ id: account.id, ...data });
        if(response) toast.success("Никнейм успешно сменён!");
        else toast.error("Ошибка смены никнейма");
    }

    return(
        <>
            <CustomButton
                onClick={onOpen}
                $padding={[0, 0]}
                $size={['120px', '48px']}
                $background="var(--red)"
                $animation="background"
                $animationvalue="rgba(var(--red-rgb), .75)"
                $rounded={8}
                $fullOn={400}
                disabled={block}
            >
                Изменить
            </CustomButton>
            <Modal 
                block={block}
                open={open} 
                anim={anim} 
                onClose={onClose}
                label="Изменить никнейм"
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Blocks>
                        <InputContainer>
                            <InputLabel>
                                Новый никнейм
                            </InputLabel>
                            <Input 
                                {...register('nickname', {
                                    onChange: () => {
                                        setInput(true);
                                        checkNickname();
                                    },
                                    required: {
                                        value: true,
                                        message: 'Необходимо ввести новый никнейм'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9_]+$/,
                                        message: 'Новый никнейм содержит недопустимые символы'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Никнейм слишком короткий'
                                    },
                                    maxLength: {
                                        value: 16,
                                        message: 'Никнейм слишком длинный'
                                    }
                                })}
                                placeholder="Введите новый никнейм"
                                $invalid={errors.nickname !== undefined} 
                            />
                            <InputValidation $fetching={value === '' || isFetching || input} $error={errors.nickname !== undefined || isError || data === true}>
                                {
                                    validationFn()
                                }
                            </InputValidation>
                        </InputContainer>
                        <Warning>
                            <span>Внимание:</span> Следующее изменение будет доступно через 72 часа.
                        </Warning>
                    </Blocks>
                    <Buttons>
                        <CustomButton
                            onClick={onClose}
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
                            disabled={value === '' || errors.nickname !== undefined || isFetching || input}
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
                </Form>
            </Modal>
        </>
    )
}