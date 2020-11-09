import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import {fetchShow as mockFetchShow} from "./api/fetchShow"


test("App renders", () => {
  render(<App />);
});

test("fetches show data and renders data", async ()=>{
    render(<App/>);

    mockFetchShow.mockResolvedValueOnce(mockFetchShow);
})