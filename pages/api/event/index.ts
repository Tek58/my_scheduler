import { Event } from '.prisma/client'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: { body: { title: any; email: any } },
  res: { json: (arg0: Event) => void }
) {
  const { email } = req.body
  const startTime = '2021-10-01T00:00:00.000Z'
  const endTime = '2021-10-03T00:00:00.000Z'

  const result = await prisma.event.create({
    data: {
      title: 'Demo Title',
      startTime: startTime,
      endTime: endTime,
      userId: 1,
    },
  })

  const atendeesResult = await prisma.atendees.create({
    data: {
      eventId: result.id,
      email: email,
    },
  })
  res.json(result)
}
