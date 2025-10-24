import { CustomButton } from "@/ui/custom-button";
import Modal from "@/ui/modal";
import { useRef, useState, type ChangeEvent } from "react";
import { Buttons, CheckPreview, Context, Error, Form, ImageLoader, ImageLoaderBg, ImageLoaderContainer, PreviewData, PreviewName, PreviewSize, PreviewSkin } from "./style";
import { GrCloudUpload } from "react-icons/gr";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IForm {
    images: FileList | undefined;
}

interface PreviewImage {
    size: number;
    name: string;
    src: string;
}

export default function ChangeSkin() {
    const [open, setOpen] = useState<boolean>(false);
    const [anim, setAnim] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [checkPreviewState, setCheckPreview] = useState<PreviewImage>();
    const previewCheckerRef = useRef<HTMLImageElement>(null);
    const [preview, setPreview] = useState<PreviewImage>();
    const { register, watch, handleSubmit, setValue } = useForm<IForm>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            images: undefined,
        },
    });

    const curr = watch('images', undefined);

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
            setError(undefined)
            setCheckPreview(undefined)
            setPreview(undefined)
            setValue("images", undefined)
            setBlock(false)
        }, 950)
    }

    const onSubmit: SubmitHandler<IForm> = async (data) => {
        console.log(curr)
        try {
            if(data === undefined || data.images === undefined) {
                setError("Отсутствует изображение");
                return;
            }
            const image = data.images.item(0);
            if(image === null) {
                setError("Отсутствует изображение");
                return;
            }
            if(!["image/png", "image/jpg"].includes(image.type)) {
                setError("Изображение невалидного формата");
                return;
            }
            if(image.size / 1024 / 1024 > 5) {
                setError("Размер изображения не должен превышать 5МБ");
                return;
            }
        } catch {
            setError("Непредвиденная ошибка");
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.files === null) return;
        const image = event.target.files.item(0);
        if(image === null) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            if(e.target === null || e.target.result === null) {
                setError("Непредвиденная ошибка");
                return;
            }
            checkPreview({
                name: image.name,
                size: image.size / 1024,
                src: e.target.result.toString(),
            });
        }
        reader.readAsDataURL(image);
    }

    const checkPreview = (src: PreviewImage) => {
        if(
            previewCheckerRef.current === null
        ) return;
        setCheckPreview(src);
        previewCheckerRef.current.onload = function () {
            if(
                previewCheckerRef.current === null
            ) return;
            if(
                [64, 32].includes(previewCheckerRef.current.width) &&
                previewCheckerRef.current.height === 64
            ) {
                setError(undefined);
                setPreview(src);
            }
            else {
                setError("Размеры изображения невалидны");
                return;
            }
        }
    }

    return(
        <>
            <CheckPreview src={checkPreviewState?.src} ref={previewCheckerRef} />
            <CustomButton
                type="button"
                onClick={onOpen}
                disabled={block}
                $padding={[8, 0]}
                $size={["100%", "48px"]}
                $rounded={8}
                $background="var(--content-third)"
                $weight={500}
                $animation="background"
                $animationvalue="var(--content-fourth)"
            >
                Загрузить скин
            </CustomButton>
            <Modal anim={anim} block={block} open={open} onClose={onClose} label="Загрузить скин">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <ImageLoaderContainer $preview={preview !== undefined}>
                        <ImageLoaderBg>
                            {
                                preview === undefined
                                    ? 
                                    <>
                                        <GrCloudUpload size={48} stroke="rgba(255, 255, 255, .5)" />
                                        Нажмите для выбора файла
                                        <span>PNG, JPG до 5MB</span>
                                    </>
                                    : 
                                    <>
                                        <PreviewSkin src={preview.src} />
                                        <PreviewData>
                                            <PreviewName>
                                                {preview.name}
                                            </PreviewName>
                                            <PreviewSize>
                                                {
                                                    preview.size < 1024 
                                                        ? `${preview.size.toFixed(2)}КБ` 
                                                        : `${(preview.size/1024).toFixed(2)}МБ`
                                                }
                                            </PreviewSize>
                                        </PreviewData>
                                        <CustomButton
                                            onClick={() => {
                                                setPreview(undefined);
                                                setCheckPreview(undefined);
                                                setValue("images", undefined);
                                            }}
                                            $padding={[0, 0]}
                                            $background="none"
                                            $color="var(--red)"
                                            $font={14}
                                            $animation="scale"
                                        >
                                            Удалить
                                        </CustomButton>
                                    </>
                            }
                        </ImageLoaderBg>
                        {
                            preview === undefined && 
                                <ImageLoader type="file" {...register('images', {
                                    onChange: onChange,
                                })} />
                        }
                    </ImageLoaderContainer>
                    {
                        error !== undefined && <Error>{ error }</Error>
                    }
                    <Context>
                        <b>Требования:</b> Файл должен быть в формате PNG или JPG и иметь стандартные размеры скина Minecraft (64x64, 64x32).
                    </Context>
                    <Buttons>
                        <CustomButton
                            onClick={onClose}
                            $rounded={8}
                            $animation="background"
                            $animationvalue="var(--content-fourth)"
                            $background="var(--content-third)"
                            $font={16}
                            $weight={500}
                            $size={["calc(50% - 4px)", "auto"]}
                            $padding={[12, 16]}
                            $fullOn={600}
                        >
                            Отмена
                        </CustomButton>
                        <CustomButton
                            disabled={curr === undefined || curr.item(0) == null}
                            $rounded={8}
                            $animation="background"
                            $animationvalue="rgba(var(--red-rgb), .5)"
                            $background="var(--red)"
                            $font={16}
                            $weight={500}
                            $size={["calc(50% - 4px)", "auto"]}
                            $padding={[12, 16]}
                            $fullOn={600}
                        >
                            Загрузить
                        </CustomButton>
                    </Buttons>
                </Form>
            </Modal>
        </>
    )
}