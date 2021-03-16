import db, { sql } from '../../../config';

const apiGroup = {
  getGroup: async (id: number) => {
    const result = await db.query(
      sql`SELECT t.group_id, t.name
      FROM groups AS t
      WHERE t.group_id = ${id}`);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }
  , getGroups: async () => {
    const result = await db.query(
      sql`SELECT t.group_id, t.name
      FROM groups AS t
      ORDER BY t.name`);
    if (result.length === 0) {
      return null;
    }
    return result;
  }, insertGroup: async (data: any) => {
    const result = await db.query(
      sql`INSERT INTO groups (name) VALUES (${data.name})
      RETURNING group_id`);
    if (result.length === 0) {
      return null;
    }
    return { ...data, group_id: result[0].group_id, peoples: [] };
  }, updateGroup: async (id: number, data: any) => {
    const result = await db.query(
      sql`UPDATE groups SET name = ${data.name}
      WHERE group_id = ${id}
      RETURNING *`);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }, deleteGroup: async (id: number) => {
    const result = await db.query(
      sql`DELETE FROM groups 
        WHERE group_id = ${id}
        RETURNING group_id`);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }
}

export default apiGroup;