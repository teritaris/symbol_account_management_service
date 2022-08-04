import {Route} from "react-router-dom";
import About from "../sample/About";
import DashboardCopy from "../DashboardCopy";
import TeriTax from "../teritax/TeriTax";
import * as React from "react";
import {Outlet} from "@mui/icons-material";

// 動かなかった
const RouterComponent = () => {
    return (
        <>
            <Route path="/about" element={<About />} />
            <Route path="/copy" element={<DashboardCopy />} />
            <Route path="/teritax" element={<TeriTax />} />
        </>
    );
};

export default RouterComponent;
