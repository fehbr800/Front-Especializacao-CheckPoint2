import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../redux/action/action";
import { RootState } from "../redux/store";

export default function Home() {
    const dispatch = useDispatch();

    const resposta = useSelector((state: RootState) => state.info.resposta);
    console.log(resposta)

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <>
            <h2>Página home</h2>
            <div>
                <button onClick={() => dispatch({ type: "GET_ALL" })}>Alguma coisa</button>
                <ul>
                    {resposta.map((results) => (
                        <li key={results.id}>
                            <h1>{results.title}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
