import React, { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "../components/App";

describe("App", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
