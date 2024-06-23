import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryUncheckedCreateNestedManyWithoutParentInputSchema } from './CategoryUncheckedCreateNestedManyWithoutParentInputSchema';
import { TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema } from './TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  userId: z.string(),
  parentId: z.string().optional().nullable(),
  children: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateInputSchema;
