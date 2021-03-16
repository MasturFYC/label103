import db, { sql } from '../../../config';
import {iPeople} from '../../../components/interfaces'

const apiPeople = {
  getPeoples: async (id: number): Promise<any | null> => {
    const result = await db.query(
      sql`SELECT t.group_id, t.people_id, t.name1, t.name2, t.post, t.street, t.city
      FROM peoples AS t
      WHERE t.group_id = ${id}
      ORDER BY t.city, t.name1`);
    if (result.length === 0) {
      return null;
    }
    return result;
  }, insertPeople: async (p: iPeople): Promise<any | null> =>  {
    const result = await db.query(
      sql`INSERT INTO peoples (group_id, name1, name2, post, street, city) VALUES (
        ${p.group_id}, ${p.name1}, ${p.name2}, ${p.post}, ${p.street}, ${p.city}
      )
      RETURNING people_id`);
    if (result.length === 0) {
      return null;
    }
    return { ...p, people_id: result[0].people_id };
  }, updatePeople: async (id: number, p: iPeople) => {
    const result = await db.query(
      sql`UPDATE peoples SET 
      group_id=${p.group_id}, name1=${p.name1}, name2=${p.name2}, post=${p.post}, street=${p.street}, city=${p.city}
      WHERE people_id = ${id}
      RETURNING *`);

    if (result.length === 0) {
      return null;
    }
    return result[0];
  }, deletePeople: async (id: number) => {
    const result = await db.query(
      sql`DELETE FROM peoples 
        WHERE people_id = ${id}
        RETURNING people_id`);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }
}

export default apiPeople;