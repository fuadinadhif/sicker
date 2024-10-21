export interface RoomStatus {
  id: number;
  title: string;
  defaultPrice: number;
  roomRates: { startDate: string; endDate: string; rate: number }[];
  reservations: { startDate: string; endDate: string }[];
}
