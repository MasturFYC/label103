export interface iGroup {
  group_id: number;
  name: string;
  peoples: iPeople[];
}

export interface iPeople {
  people_id: number;
  name1: string;
  name2?: string;
  post?: string;
  street?: string;
  city: string;
  group_id: number;
  group?: iGroup;
}