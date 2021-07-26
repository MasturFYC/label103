import db, { sql } from '../../../config';
import {iPeople} from '../../../constants/interfaces'

const apiPeople = {
  getPeoples: async (id: number): Promise<any | null> => {
    return await db.query(
      sql`SELECT t.group_id, t.people_id, t.name1, t.name2, t.post, t.street, t.city
      FROM peoples AS t
      WHERE t.group_id = ${id}
      ORDER BY t.city, t.name1`)
    .then(data => ([data, undefined]))
    .catch(error => Promise.resolve([undefined, error]));
  }, insertPeople: async (p: iPeople): Promise<any | null> =>  {
    return await db.query(
      sql`INSERT INTO peoples (group_id, name1, name2, post, street, city) VALUES
      (${p.group_id}, ${p.name1}, ${p.name2}, ${p.post}, ${p.street}, ${p.city})
      RETURNING people_id`)
      .then(data => ([{...p, people_id: data[0].id}, undefined]))
      .catch(error => Promise.resolve([undefined, error]));
  }, updatePeople: async (id: number, p: iPeople) => {
    return await db.query(
      sql`UPDATE peoples SET 
      group_id=${p.group_id}, name1=${p.name1}, name2=${p.name2}, post=${p.post}, street=${p.street}, city=${p.city}
      WHERE people_id = ${id}
      RETURNING *`)
      .then(data => ([data[0], undefined]))
      .catch(error => Promise.resolve([undefined, error]));
    }
  , deletePeople: async (id: number) => {
    return await db.query(
      sql`DELETE FROM peoples 
        WHERE people_id = ${id}
        RETURNING people_id`)
        .then(data => ([{people_id: data[0].id} as any, undefined]))
        .catch(error => Promise.resolve([undefined, error]));
  }
}

export default apiPeople;