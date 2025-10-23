import { CustomButton } from "@/ui/custom-button";
import { useState } from "react"
import { Blocks, Buttons, Form, Input, InputContainer, InputLabel, InputValidation, Warning } from "./styles";
import { useForm, type SubmitHandler } from 'react-hook-form';
import Modal from "@/ui/modal";

interface Form {
    username: string;
}

export default function ChangeNick() {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<Form>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
    })

    const value = watch('username', '');

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
            reset()
            setBlock(false)
        }, 950)
    }


    const onSubmit: SubmitHandler<Form> = (data) => {
        console.log(data);
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
                                {...register('username', {
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
                                $invalid={errors.username !== undefined} 
                            />
                            {
                                value !== '' && 
                                    <InputValidation $error={errors.username !== undefined}>
                                        {
                                            errors.username !== undefined
                                                ? errors.username.message
                                                : '✓ Никнейм доступен'
                                        }
                                    </InputValidation>
                            }
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
                            disabled={value === '' || errors.username !== undefined}
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