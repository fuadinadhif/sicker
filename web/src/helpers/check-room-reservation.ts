import { RoomStatus } from "@/types/room-status";

export function checkRoomReservation(
  date: Date,
  roomStatus: RoomStatus | undefined
): boolean {
  const reservations = roomStatus?.reservations;
  const targetTime = date.getTime();
  const now = Date.now();
  const ninetyDaysFromNow = now + 90 * 24 * 60 * 60 * 1000;

  if (targetTime < now || targetTime > ninetyDaysFromNow) {
    return true;
  }

  if (reservations) {
    for (const { startDate, endDate } of reservations) {
      const startTime = new Date(startDate).getTime();
      const endTime = new Date(endDate).getTime();

      if (targetTime >= startTime && targetTime <= endTime) {
        return true;
      }
    }
  }

  return false;
}
