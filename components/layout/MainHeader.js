import Link from "next/link";
import React from "react";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/counter">Counter</Link>
          </li>
          <li>
            <Link href="/events">All Events</Link>
          </li>
          {/* <li>
            <Link href="/events">All Events</Link>
          </li>
          <li>
            <Link href="/events">All Events</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
