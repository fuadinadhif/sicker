import { Request, response, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRoomStatus(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const status = await prisma.room.findUnique({
      where: { id: Number(id) },
      include: {
        RoomRate: { select: { startDate: true, endDate: true, rate: true } },
        Reservation: {
          select: { startDate: true, endDate: true, status: true },
        },
      },
    });

    return res.status(200).json({
      data: {
        id: status?.id,
        type: status?.type,
        defaultPrice: status?.defaultRate,
        roomRates: status?.RoomRate,
        reservations: status?.Reservation,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ response: { ok: false }, message: "Server error" });
  }
}
