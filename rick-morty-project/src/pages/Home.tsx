import { useDispatch, useSelector } from "react-redux";
import { Action } from "../redux/reducers/types";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";
import { fetchTodos } from "../redux/action/action";
import { RootState } from "../redux/store";

export default function Home() {
    const dispatch: ThunkDispatch<RootState, any, Action> = useDispatch();

    const { resposta } = useSelector((state: RootState) => state.info);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <>
            <h2>Página home</h2>
            <div>
                <ul>
                    {resposta.map(resp => (
                        <li key={resposta.id}>
                            <h1>{resposta.title}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}