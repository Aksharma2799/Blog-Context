import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Spinner } from "./Spinner";

const Blogs = () => {
  //consume data from context menu
  const {loading} = useContext(AppContext)

  return <div>

    {
        //if loading ? (true) : (false)
        loading ? (<Spinner/>) : (loading)
    }
  </div>;
};

export default Blogs;
