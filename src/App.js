import "./App.css";
import PrevState from "./UseEffect-UseRef/PrevState";
import Search1 from "./UseEffectSearch/search1";
import Search2 from "./UseEffectSearch/search2";
import Search3 from "./UseEffectSearch/search3";
import { Search4 } from "./UseEffectSearch/search4";
import Memo from "./useMemo-useCallback/Memo";
import MemoNew from "./useMemo-useCallback(Dependancies)/Memo(Dependancies)";

function App() {
  return (
    <div className="App">
      <MemoNew />
    </div>
  );
}

export default App;
