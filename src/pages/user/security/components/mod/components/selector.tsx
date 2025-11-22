import { IoIosArrowForward } from "react-icons/io";
import { Arrow, Container, Content, Dropdown, Line, Skeleton, Value, Variant } from "./selector-styled";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getModVariants from "@/lib/queries/security/modVariants";
import { toast } from "react-toastify";

interface Props {
    onChange: (type: string) => void;
    modelOpened: boolean;
    value: string | null;
}

export default function Selector({ modelOpened, onChange, value }: Props) {
    const [opened, setOpen] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null);
    const button = useRef<HTMLButtonElement>(null);
    const block = useRef<boolean>(false);
    const { data, isFetching, isError, refetch, failureCount } = useQuery({
        enabled: false,
        queryKey: ['modVariants'],
        queryFn: getModVariants,
    });

    useEffect(() => {
        if(modelOpened && failureCount < 1) refetch();
        if(isError && !block.current) {
            toast.error("Ошибка получения возможных модов");
            block.current = true;
        }
    }, [isError, modelOpened]);

    const open = () => {
        if(button.current === null || dropdown.current === null) return;
        button.current.disabled = true;
        dropdown.current.style.display = "flex";
        setTimeout(() => setOpen(true), 1);
        setTimeout(() => {
            if(button.current !== null) button.current.disabled = false;
        }, 300);
    }

    const close = () => {
        if(button.current === null || dropdown.current === null) return;
        button.current.disabled = true;
        setOpen(false);
        setTimeout(() => {
            if(dropdown.current !== null) {
                dropdown.current.style.display = "none";
            }
            if(button.current !== null) button.current.disabled = false;
        }, 300);
    }

    const select = (newValue: string) => {
        onChange(newValue);
        close();
    }

    const getLabel = () => {
        if(isFetching) return "Загрузка...";
        if(value === null) return "Выберите из списка...";
        return value;
    }

    return(
        <Container>
            {
                (isFetching || isError) && <Skeleton className="shimmer" />
            }
            <Content ref={button} onClick={opened ? close : open}>
                <Arrow $open={opened}>
                    <IoIosArrowForward size="100%" />
                </Arrow>
                <Line />
                <Value>
                    { 
                        getLabel()
                    }
                </Value>
            </Content>
            <Dropdown $open={opened} ref={dropdown} style={{ display: "none" }}>
                {
                    data !== undefined && data.map((el, index) => 
                        <Variant key={index} onClick={() => select(el)}>
                            { el }
                        </Variant>
                    )
                }
            </Dropdown>
        </Container>
    );
}