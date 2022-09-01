import React from "react";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
