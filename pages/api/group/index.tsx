import apiGroup from '../models/group.models'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [data, error] = await apiGroup.getGroups();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: error.message })
  }
}