import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";
import { Action } from "../../redux/reducers/types";
import Cards from "./components/Cards";

export default function Home() {
  const dispatch: Dispatch<Action> = useDispatch();

  const { resposta } = useSelector((state: RootState) => state.info);

  return (
    <div className=" p-3">
      <h1 className="font-custom text-center text-5xl">
        <span className="animate-gradient">Rick And Morty</span>
      </h1>
      <div>
        <Cards />
      </div>
    </div>
  );
}
