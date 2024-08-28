export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("sv-SE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};

export const isTimeToFeed = (lastFed: string, hours: number): boolean => {
    const lastFedTime = new Date(lastFed);
    const timeAgo = new Date();
    timeAgo.setHours(timeAgo.getHours() - hours)
    return lastFedTime < timeAgo
};