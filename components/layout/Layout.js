import MainHeader from "./MainHeader";
import classes from "./layout.module.css";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
