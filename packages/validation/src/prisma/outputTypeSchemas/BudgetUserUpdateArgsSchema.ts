import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BudgetUserIncludeSchema } from '../inputTypeSchemas/BudgetUserIncludeSchema'
import { BudgetUserUpdateInputSchema } from '../inputTypeSchemas/BudgetUserUpdateInputSchema'
import { BudgetUserUncheckedUpdateInputSchema } from '../inputTypeSchemas/BudgetUserUncheckedUpdateInputSchema'
import { BudgetUserWhereUniqueInputSchema } from '../inputTypeSchemas/BudgetUserWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { BudgetArgsSchema } from "../outputTypeSchemas/BudgetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BudgetUserSelectSchema: z.ZodType<Prisma.BudgetUserSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  permission: z.boolean().optional(),
  userId: z.boolean().optional(),
  budgetId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  budget: z.union([z.boolean(),z.lazy(() => BudgetArgsSchema)]).optional(),
}).strict()

export const BudgetUserUpdateArgsSchema: z.ZodType<Prisma.BudgetUserUpdateArgs> = z.object({
  select: BudgetUserSelectSchema.optional(),
  include: BudgetUserIncludeSchema.optional(),
  data: z.union([ BudgetUserUpdateInputSchema,BudgetUserUncheckedUpdateInputSchema ]),
  where: BudgetUserWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default BudgetUserUpdateArgsSchema;
