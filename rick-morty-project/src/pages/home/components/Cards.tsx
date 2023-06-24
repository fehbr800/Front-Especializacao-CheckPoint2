import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchTodos } from "../../../redux/action/action";
import { useEffect } from "react";
import { Action } from "../../../redux/reducers/types";
import { Dispatch } from "redux";

export default function Cards() {
  const dispatch: Dispatch<Action> = useDispatch();

  const { resposta } = useSelector((state: RootState) => state.info);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-3 lg:grid-cols-3">
      {resposta.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md flex"
        >
          <img src={item.image} className="w-40 rounded-lg" alt="" />
          <div className="mx-3">
            <div className="flex items-center mb-2">
              <div
                className={`w-4 h-4 rounded-full ${
                  item.status === "Alive" ? "bg-green-500" : "bg-red-500"
                } mr-2`}
              ></div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
            <p className="text-gray-500 mb-2">Status: {item.status}</p>
            <p className="text-gray-500">Species: {item.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
