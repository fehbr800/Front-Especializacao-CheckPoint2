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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
      {resposta.map((item) => (
        <div key={item.id} className=" rounded-lg shadow-md flex m-2 bg-card">
          <img src={item.image} className="w-40 rounded-s" alt="" />
          <div className="m-2">
            <h2 className="text-xl font-custom text-secundary">{item.name}</h2>
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.status === "Alive" ? "bg-green-500" : "bg-red-500"
                } mr-1`}
              ></div>
              <p className="text-gray-500"> {item.status}</p>
            </div>

            <p className="text-gray-500">Species: {item.species}</p>
            <span className="text-gray-400">Last known location:</span>
            <p className="text-gray-500">{item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
