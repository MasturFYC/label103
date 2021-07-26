import React, { useState, MouseEvent, useReducer } from 'react'
//import { useRouter } from 'next/router'
//import useSWR from 'swr'
import Image from "next/image";
import { iPeople } from '../constants/interfaces'
import styles from './people.module.css'

/*
export type PeopleGroupType = {
  groupId: number
}
*/

export type PeopleGroupType = {
  updateSample: Function,
  lengthSample: number,
  downloadPdf: Function,
  groupId: number
}

// type Action =
//  | {type: 'INSERT', people: iPeople}
//  | {type: 'DELETE', id: number}
//  | {type: 'UPDATE', id: number, people: iPeople}


type ActionType = {
  peoples: iPeople[];
}

enum ActionKind {
  Load = 'LOAD',
  Insert = 'INSERT',
  Delete = 'DELETE',
  Update = 'UPDATE',
}
/*
type Action = {
  type: ActionKind,
  people: iPeople,
  id: number,
  peoples: iPeople[]
}
*/
const myPeoples: ActionType = {
  peoples: []
}

type Action =
  | { type: ActionKind.Load, peoples: iPeople[] }
  | { type: ActionKind.Insert, people: iPeople }
  | { type: ActionKind.Delete, id: number }
  | { type: ActionKind.Update, id: number, people: iPeople }


function reducer(state: iPeople[], action: Action): iPeople[] {

  switch (action.type) {
    case ActionKind.Load:
      //console.log(action.peoples)
      return [...action.peoples];
    case ActionKind.Insert:
      return [...state, action.people];
    case ActionKind.Update:
      return state.map(p => p.people_id === action.id ? action.people : p)
    case ActionKind.Delete:
      return state.filter((x: iPeople) => x.people_id !== action.id);
    default:
      return state;
  }
}

const PeopleGroup = ({ updateSample, lengthSample, downloadPdf, groupId: baseId }: PeopleGroupType) => {
  //const [isDeleteMode, setIsDeleteMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  //const { query } = useRouter()
  //const baseId = query.id;
  // const baseId = query.id;
 // const baseUrl: any = () => query.id && `/api/people/${query.id}`;
  //const { data, error, mutate } = useSWR<iPeople[], Error>(baseUrl, fetcher);
  //const initData: iPeople = initPeople(parseInt(`${query.id}`));
  const initData: iPeople = initPeople(parseInt(`${baseId}`));
  const [data, dispatch] = useReducer(reducer, []);

  //console.log(data)
  //if (error) return <div>Error: {error.message}</div>

  const updateSampleData = React.useCallback((peoples: iPeople[]) => {

    if (peoples) {
      let nLength: number = peoples.length < lengthSample ? peoples.length : lengthSample || 0;
      //console.log(nLength)
      updateSample(peoples.filter((p: iPeople, i: number) => { return i < nLength }));
    }
  }, [lengthSample])

  React.useEffect(() => {
    // data && data.length && updateSampleData(data)
    updateSampleData(data)
  }, [data, lengthSample])


  React.useEffect(() => {
    var isLoaded: boolean = false;
    if (!isLoaded && baseId) {
      //console.log(baseId)
      fetcher(`/api/people/${baseId}`).then(res => {
        dispatch({
          type: ActionKind.Load,
          peoples: res
        })
      })
    }
    return () => {
      isLoaded = true;
    }
  }, [baseId])

  if (!data) return <div>Loading...</div>

  const reload = async (p: iPeople) => {
    const i = currentIndex
    const json: iPeople | any = await fetchUpdate(`/api/people/${p.people_id}`, p);

    if (null === json) return;

    /*
    const newData: iPeople[] = [];

    //console.log('Nama-1 sudah digunakan!', json)

    if (json.isError) {
      return
    }

    let n = -1;

    for (let j = 0; j < data.length; j++) {
      if (data[j].people_id === json.people_id) {
        newData.push(json)
        n = j;
      } else {
        newData.push(data[j])
      }
    }

    if (p.people_id === 0) {
      newData.push(json)
      setCurrentIndex(data.length + 1)
    }
    //console.log(json)
    */

    if (json.isError) {
      return
    }

    if(p.people_id === 0) {
      dispatch({
        type: ActionKind.Insert,
        people: json
      })
      setCurrentIndex(data.length+1)
    } else {
    dispatch({
      type: ActionKind.Update,
      id: p.people_id,
      people: json
    })
  }
    //    mutate([...newData], false);
    //updateSampleData(newData)
    // const nLength: number = newData.length < lengthSample ? newData.length : lengthSample;
    // updateSample(newData.filter((p, i)=>{return i < nLength}));
    //setCurrentIndex(i);
  }

  const deletePeople = async (id: number) => {
    const test = confirm("Anda yakin ingin menghapus data orang ini?")
    if (true === test) {
      const json = await fetchDelete(`/api/people/${id}`);
      //console.log(json)
      if (json) {
        /*
        const newData: iPeople[] = data.filter(x => x.people_id !== id);
        */
        dispatch({
          type: ActionKind.Delete,
          id: id,
        });
        setCurrentIndex(-1)

        //mutate([...newData], false);
        //updateSampleData(newData)
        //        setCurrentIndex(-1)
        //setIsDeleteMode(false)
        // const nLength: number = newData.length < lengthSample ? newData.length : lengthSample;
        // updateSample(newData.filter((p, i)=>{return i < nLength}));

      }
    }
  }


  return (
    <React.Fragment>
      <button style={{ marginBottom: '25px' }} onClick={(e) => {
        downloadPdf(data)
      }}>
        Download
      </button>

      <PeopleTable>
        {
          data && [...data, initData].map((p: iPeople, i: number) =>
          (
            <tr key={`key-${i}`}>
              {currentIndex === i ?
                <td colSpan={4}>
                  <PeopleForm people={p} reload={reload} remove={deletePeople} />
                </td> :
                <React.Fragment>
                  <td>{p.people_id > 0 && <Image src='/images/delete.svg' width={16} height={16}
                    title={'Hapus data'}
                    onClick={() => {
                      //setIsDeleteMode(true)      
                      deletePeople(p.people_id)
                    }}
                    crossOrigin={'anonymous'}
                    className={styles.btnDelete} />}</td>
                  <td onClick={() => setCurrentIndex(i)}><strong>{p.name1} {p.name2 && ' / ' + p.name2}</strong></td>
                  <td onClick={() => setCurrentIndex(i)}>{p.post}</td>
                  <td onClick={() => setCurrentIndex(i)}>{p.street && `${p.street} - `}{p.city}</td>
                </React.Fragment>
              }
            </tr>
          )
          )
        }
      </PeopleTable>
    </React.Fragment>

  )

}

type PeopleTableType = {
  children: any
}

type PeopleFormType = {
  people: iPeople,
  reload: Function,
  remove: Function
}

const PeopleForm = ({ people: p, reload, remove }: PeopleFormType) => {
  const [people, setPeople] = useState(p)
  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    reload(people)
  }

  return (
    <form className={styles.divForm}>
      <div className={styles.divControl}>
        <div className={styles.divLabel}>Nama-1:</div>
        <div><input type='text' autoFocus value={people.name1} onChange={(e) => setPeople({ ...people, name1: e.target.value })} /></div>
      </div>
      <div className={styles.divControl}>
        <div className={styles.divLabel}>Nama-2:</div>
        <div><input type='text' value={people.name2 || ''} onChange={(e) => setPeople({ ...people, name2: e.target.value })} /></div>
      </div>
      <div className={styles.divControl}>
        <div className={styles.divLabel}>Jabatan:</div>
        <div><input type='text' value={people.post || ''} onChange={(e) => setPeople({ ...people, post: e.target.value })} /></div>
      </div>
      <div className={styles.divControl}>
        <div className={styles.divLabel}>Alamat/Blok:</div>
        <div><input style={{ minWidth: '300px' }} type='text' value={people.street || ''} onChange={(e) => setPeople({ ...people, street: e.target.value })} /></div>
      </div>
      <div className={styles.divControl}>
        <div className={styles.divLabel}>Kota/Kel./Ds.:</div>
        <div><input type='text' value={people.city} onChange={(e) => setPeople({ ...people, city: e.target.value })} /></div>
      </div>
      <div style={{ marginTop: '25px' }}>

        {people.people_id > 0 &&
          <Image src='/images/delete.svg' width={16} height={16}
            title={'Hapus data'}
            onClick={() => {
              remove(p.people_id)
            }}
            className={styles.btnDelete}
            crossOrigin={'anonymous'} />} {'  '}
        <button id="submit" type="submit"
          onClick={handleSubmit}>
          Save
      </button>
      </div>
    </form >
  )
}

const PeopleTable = (props: any) => {
  return (
    <React.Fragment>

      <table className={styles.divTable}>
        <thead>
          <tr>
            <th>Cmd</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </React.Fragment>
  )
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data: iPeople[] | any = await res.json();

  if (res.status !== 200) {
    return [];
    //throw new Error(data.message)
  }

  return data;
}

const fetchUpdate = async (url: string, p: iPeople): Promise<any> => {
  const requestOptions = {
    method: p.people_id === 0 ? 'POST' : 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(p)
  };
  const res = await fetch(url, requestOptions)
  const data: iPeople | any = await res.json();

  if (res.status !== 200) {
      alert(data.message); // `Nama ${p.name1} sudah digunakan!`)
    return null;
  }

  return data;
}

const fetchDelete = async (url: string): Promise<any> => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  const res = await fetch(url, requestOptions)
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data;
}

const initPeople = (group_id: number): iPeople => {
  return {
    group_id: group_id,
    people_id: 0,
    name1: '',
    name2: '',
    street: '',
    city: 'Indramayu'
  }
}


export default PeopleGroup;