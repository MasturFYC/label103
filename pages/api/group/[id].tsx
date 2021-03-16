import apiGroup from '../models/group.models'
import type { NextApiRequest, NextApiResponse } from 'next'
//import {iGroup} from '../../../components/interfaces'

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query && +req.query.id || 0;

  let result: any;

  switch (req.method) {
    case 'PUT':
      result = await apiGroup.updateGroup(id, req.body)
      break;
    case 'POST':
      result = await apiGroup.insertGroup(req.body)
      break;
    case 'DELETE':
      result = await apiGroup.deleteGroup(id)
      break;
    case 'GET':
    default:
      result = await apiGroup.getGroup(id);

  }

  const [data, error] = result;
  if (data) {
    res.status(200).json(data);
  } else {
    console.log(error.message)
    res.status(404).json({ message: error.message })
  }
}