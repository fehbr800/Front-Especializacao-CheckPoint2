import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";
import { Action } from "../../redux/reducers/types";
import Cards from "./components/Cards";


export default function Home() {
    const dispatch: Dispatch<Action> = useDispatch();
  
    const { resposta } = useSelector((state: RootState) => state.info);
  
   
    return (
      <>
        <h2>Página home</h2>
        <div>
         <Cards/>
        </div>
       
      </>
    );
  }
  
