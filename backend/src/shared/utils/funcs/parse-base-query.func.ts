import { BaseQuery, skipDefault, takeDefault } from '../queries';

export const parseBaseQuery = (
  query: BaseQuery,
): { take: number; skip: number } => {
  const take = Number(query.take) || takeDefault;
  const skip = Number(query.skip) || skipDefault;

  return { take, skip };
};
