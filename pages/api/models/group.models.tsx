import db, { sql } from '../../../config';
import {iGroup} from '../../../components/interfaces'

const apiGroup = {
  getGroup: async (id: number) => {
    return await db.query(
      sql`SELECT t.group_id, t.name
      FROM groups AS t
      WHERE t.group_id = ${id}`)
      .then(data => ([data[0], undefined]))
      .catch(error => Promise.resolve([undefined, error]));
  }
  , getGroups: async () => {
    return await db.query(
      sql`SELECT t.group_id, t.name
      FROM groups AS t
      ORDER BY t.name`)
      .then(data => ([data, undefined]))
      .catch(error => Promise.resolve([undefined, error]))
  }
  , insertGroup: async (g: iGroup) => {
    return await db.query(
      sql`INSERT INTO groups (name) VALUES (${g.name})
      RETURNING group_id`)
      .then(data => ([{ ...g, group_id: data[0].group_id }, undefined]))
      .catch(error => Promise.resolve([undefined, error]));
  }
  , updateGroup: async (id: number, g: iGroup) => {
    return await db.query(
      sql`UPDATE groups SET name = ${g.name}
      WHERE group_id = ${id}
      RETURNING *`).then(data => ([data[0], undefined]))
      .catch(error => Promise.resolve([undefined, error]));;
  }
  , deleteGroup: async (id: number) => {
    return await db.query(
      sql`DELETE FROM groups 
        WHERE group_id = ${id}
        RETURNING group_id`).then(data => ([{ group_id: data[0] }, undefined]))
      .catch(error => Promise.resolve([undefined, error]));
  }
}

export default apiGroup;