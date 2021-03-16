import apiPeople from '../models/people.models'
import type { NextApiRequest, NextApiResponse } from 'next'
//import {iPeople} from '../../../components/interfaces'

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query && +req.query.id || 0;
  let result: [][];
 
  switch (req.method) {
    case 'PUT':
      result = await apiPeople.updatePeople(id, req.body)
      break;
    case 'POST':
      result = await apiPeople.insertPeople(req.body)
      break;
    case 'DELETE':
      result = await apiPeople.deletePeople(id)
      break;
    case 'GET':
    default:
      result = await apiPeople.getPeoples(id);
  }
  const [data, error] = result;
  console.log(data)
  if (data) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `People with Group ID: ${id} not found!` })
  }
}