export default function count72hours(startDate: Date | null): string {
    if(startDate === null) return "Никнейм можно поменять!";
    const now = new Date();
    const endDate = new Date(startDate.getTime() + 72 * 60 * 60 * 1000);

    const timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
        return "Никнейм можно поменять!"; // Если время истекло
    }

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24); // Часы
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60); // Минуты
    const seconds = Math.floor((timeDifference / 1000) % 60); // Секунды

    return `${hours} часов, ${minutes} минут, ${seconds} секунд до 72 часов с момента смены никнейма`;
}
