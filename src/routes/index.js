import { Fragment } from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Entrar from "../pages/entrar";
import Home from "../pages/home";
import Incricao from "../pages/inscricao";


const Private = ({Item}) => {
    const  {signed}  = useAuth();
    return signed > 0 ? <Item /> : <Entrar />;
};

const RouteApp = () => {
    return(
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private  Item={Home}/>}/>
                <Route path="/" element={<Entrar/>}/>
                <Route exact path="/inscricao" element={<Incricao />}/>
                <Route path="*" element={<Entrar />}/>
            </Routes>
        </Fragment>

    </BrowserRouter>
    );
};
export default RouteApp