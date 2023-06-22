import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../redux/action/action";
import { RootState } from "../redux/store";
import { Dispatch } from "redux";
import { Action } from "../redux/reducers/types";

export default function Home() {
    const dispatch: Dispatch<Action> = useDispatch();
  
    const { resposta } = useSelector((state: RootState) => state.info);
  
    console.log(resposta);
  
    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);
  
    return (
      <>
        <h2>Página home</h2>
        <div>
          <ul>
            {resposta.map((item) => (
              <li key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.status}</p>
                <img src={item.image} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  
