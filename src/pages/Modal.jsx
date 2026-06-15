import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

export function SearchModal() {
  return (
    <form action="">
        <RxHamburgerMenu />
        <input type="search" />
        <CiSearch />
    </form>
  )
}
