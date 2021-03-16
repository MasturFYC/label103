import apiGroup from '../models/group.models'
import type { NextApiRequest, NextApiResponse } from 'next'
//import {iGroup} from '../../../components/interfaces'

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query && +req.query.id || 0;

  let result: Promise<any>;

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

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `Group with id: ${id} not found!` })
  }
}