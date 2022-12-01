import { Component } from 'solid-js';
import AccountBalanceWalletIcon from "@suid/icons-material/AccountBalanceWallet";
import DashboardIcon from '@suid/icons-material/Dashboard';
import BookmarkBorderIcon from '@suid/icons-material/BookmarkBorder';
import QueryStatsIcon from '@suid/icons-material/QueryStats';
import CurrencyExchangeIcon from '@suid/icons-material/CurrencyExchange';
import InputIcon from '@suid/icons-material/Input';
import PeopleOutlineIcon from '@suid/icons-material/PeopleOutline';

import "./NavBar.scss";

const Nav: Component = () => {
    return (
        <nav class="navBar__container">
        <a href="/" class="logo__box">
          <img src={''} alt="" />
        </a>
        <div class="navBar__container__inner">
          <ul>
            <span class="title_navbar">Pages</span>
            <li>
              <a class="a_container" href="/">
                <DashboardIcon color="primary" fontSize="medium" />
                <span class="nav-item">Dashboard</span>
              </a>
            </li>
            <li>
              <a class="a_container" href="/">
                <BookmarkBorderIcon color="primary" fontSize="medium" />
                <span class="nav-item">Aufträge</span>
              </a>
            </li>
            <li>
              <a class="a_container" href="/customers">
                <PeopleOutlineIcon color="primary" fontSize="medium" />
                <span class="nav-item">Kunden</span>
              </a>
            </li>
            {/* <li>
              <a class="a_container" href="/">
                <QueryStatsIcon color="primary" fontSize="medium" />
                <span class="nav-item">Umsätze</span>
              </a>
            </li>
            <li>
              <a class="a_container" href="/">
                <CurrencyExchangeIcon color="primary" fontSize="medium" />
                <span class="nav-item">Kosten</span>
              </a>
            </li> */}
            <li class="logOut">
              <a class="a_container" href="/">
                <InputIcon color="primary" fontSize="medium" />
                <span class="nav-item">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;