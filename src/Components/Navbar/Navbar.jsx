"use client";

import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 flex">
      <div className="navbar-start flex-1">
        <div className="dropdown" suppressHydrationWarning>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            suppressHydrationWarning
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex" suppressHydrationWarning>
        <ul className="menu menu-horizontal px-1 flex">{links}</ul>
      </div>
      <div className="navbar-end flex-none">
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
