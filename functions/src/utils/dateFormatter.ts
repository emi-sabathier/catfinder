export const dateFormatter = (date: string | undefined): string => {
    const formattedDate = date ?? '0';
    return formattedDate.replace('T', ' ').slice(0, 19);
};
