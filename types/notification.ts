export interface INotification {
    title: string;
    message: string;
    date: string;
    type: string;
    link: string;
    id: string;
    isRead?: boolean;
}