import apiCategory from '../models/group.models'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await apiCategory.getGroups();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `Groups table is empty!` })
  }
}