import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { BudgetPeriodConfigWhereInputSchema } from './BudgetPeriodConfigWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumBudgetPeriodTypeFilterSchema } from './EnumBudgetPeriodTypeFilterSchema';
import { BudgetPeriodTypeSchema } from './BudgetPeriodTypeSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BudgetRelationFilterSchema } from './BudgetRelationFilterSchema';
import { BudgetWhereInputSchema } from './BudgetWhereInputSchema';

export const BudgetPeriodConfigWhereUniqueInputSchema: z.ZodType<Prisma.BudgetPeriodConfigWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    budgetId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    budgetId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  budgetId: z.string().optional(),
  AND: z.union([ z.lazy(() => BudgetPeriodConfigWhereInputSchema),z.lazy(() => BudgetPeriodConfigWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BudgetPeriodConfigWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BudgetPeriodConfigWhereInputSchema),z.lazy(() => BudgetPeriodConfigWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumBudgetPeriodTypeFilterSchema),z.lazy(() => BudgetPeriodTypeSchema) ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  budget: z.union([ z.lazy(() => BudgetRelationFilterSchema),z.lazy(() => BudgetWhereInputSchema) ]).optional(),
}).strict());

export default BudgetPeriodConfigWhereUniqueInputSchema;
