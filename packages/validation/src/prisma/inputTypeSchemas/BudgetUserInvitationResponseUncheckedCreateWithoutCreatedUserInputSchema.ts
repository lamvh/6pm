import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInputSchema: z.ZodType<Prisma.BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  acceptedAt: z.coerce.date().optional().nullable(),
  declinedAt: z.coerce.date().optional().nullable(),
  invitationId: z.string()
}).strict();

export default BudgetUserInvitationResponseUncheckedCreateWithoutCreatedUserInputSchema;
