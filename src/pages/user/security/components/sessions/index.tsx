import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Session from "./session";
import { Container, Header, NoTokens, NoTokensContainer, NoTokensUndertitle, PageButton, PagesContainer } from "./styles";
import getActiveTokens from "@/lib/queries/security/getActiveTokens";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Sessions() {
    const page = useRef<number>(0);
    const block = useRef<boolean>(false);
    const { data, isError, isFetching, refetch } = useQuery({
        queryKey: ['activeKeys'],
        queryFn: () => getActiveTokens(page.current),
        placeholderData: keepPreviousData,
    });

    const changePage = (newPage: number) => {
        page.current = newPage;
        refetch();
    }

    const getPagesArray = (amount: number, current: number) => {
        if(current <= 3) return [...Array(amount <=5 ? amount : 5)].map((_, index) => index);
        if(current >= amount-2) return [
            0,
            ...[...Array(amount)].map((_, index) => index).slice(amount-4),
        ];
        return [
            0,
            ...[...Array(amount)].map((_, index) => index).slice(current-1, current+2),
            amount-1,
        ];
    }

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
                isFetching && data === undefined &&
                        <NoTokensContainer className="shimmer">
                            <NoTokens>
                                Поиск активных ключей
                            </NoTokens>
                            <NoTokensUndertitle>
                                Пожалуйста подождите...
                            </NoTokensUndertitle>
                        </NoTokensContainer>
            }
            {
                data !== undefined && (
                    data.content.length === 0 || isError
                    ? <NoTokensContainer className="shimmer">
                            <NoTokens>
                                Активные ключи не найдены
                            </NoTokens>
                            <NoTokensUndertitle>
                                Вы можете создать новый, для этого нажмите "скачать мод"
                            </NoTokensUndertitle>
                        </NoTokensContainer>
                    : data !== undefined && 
                        <>
                            {
                                data.content.map(el => 
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
                            <PagesContainer>
                                {
                                    getPagesArray(
                                        data.page.totalPages,
                                        data.page.number
                                    ).map((el) => (
                                        <PageButton 
                                            $current={el === data.page.number}
                                            onClick={() => changePage(el)}
                                        >
                                            { el+1 }
                                        </PageButton>
                                    ))
                                }
                            </PagesContainer>
                        </>
                )
            }
        </Container>
    )
}