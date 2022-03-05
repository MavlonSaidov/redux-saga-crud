import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import FormContainer from "./Components/form/FormContainer";
import List from "./Components/lists/List";
import { loadUsersRequest } from "./store/actions";

const App = () => {
    const [modal, setModal] = useState(false);
    const dataList = useSelector((state) => state.dataList);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersRequest());
    }, []);

    return (
        <div className="app">
            {modal ? <FormContainer modal={modal} setModal={setModal} /> : null}
            <List dataList={dataList} modal={modal} setModal={setModal} />
        </div>
    );
};

export default App;
