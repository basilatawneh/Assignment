import { useEffect, useState } from 'react'
export interface IResults {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface IState {
  loading: boolean;
  results: IResults[];
}

const useConsultants = () => {
  const initialState: IState = {
    loading: true,
    results: []
  };

  const [state, setState] = useState<IState>(initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json() as unknown as IResults[])
      .then(res => {
        setState({ loading: false, results: res.slice(0, 6) });
      })
  }, []);

  return state;
}

export default useConsultants;