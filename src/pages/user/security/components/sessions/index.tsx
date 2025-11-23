import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Session from "./session";
import { Container, Header, NoTokens, NoTokensContainer, NoTokensUndertitle } from "./styles";
import getActiveTokens from "@/lib/queries/security/getActiveTokens";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Sessions() {
    const block = useRef<boolean>(false);
    const { data, isError } = useQuery({
        queryKey: ['activeKeys'],
        queryFn: getActiveTokens,
        placeholderData: keepPreviousData,
    });

    useEffect(() => {
        if(block.current === false && isError) {
            block.current = true;
            toast.error("Невозможно получить активные сессии")
        }
    }, [isError]);

    return(
        <Container>
            <Header>
                Активные ключи модов
            </Header>
            {
                (data !== undefined && data.length === 0) || isError
                ? <NoTokensContainer className="shimmer">
                        <NoTokens>
                            Активные ключи не найдены
                        </NoTokens>
                        <NoTokensUndertitle>
                            Вы можете создать новый, для этого нажмите "скачать мод"
                        </NoTokensUndertitle>
                    </NoTokensContainer>
                : data !== undefined && data.map(el => 
                            <Session 
                                id={el.id}
                                key={el.id}
                                createdAt={el.createdAt}
                                host={el.host}
                                lastLoginAt={el.lastLoginAt}
                                lastUsedIp={el.lastUsedIp}
                                location={el.location}
                                system={el.system}
                            />
                )
            }
        </Container>
    )
}