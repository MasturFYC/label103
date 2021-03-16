import { sql, SQLQuery } from '../../../config';

export function nestQuerySingle(query: SQLQuery) {
  return sql`
    (SELECT row_to_json(x) FROM (${query}) x)
  `;
}
export function nestQuery(query: SQLQuery) {
  return sql`
    coalesce(
      (
        SELECT array_to_json(array_agg(row_to_json(x)))
        FROM (${query}) x
      ),
      '[]'
    )
  `;
}
