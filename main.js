// ==UserScript==
// @name         ssodam-custom-script-dark-edition
// @namespace    http://tampermonkey.net/roeniss/
// @version      0.1
// @description  Change colors of and add functions to "http://ssodam.com"
// @author       Roeniss Moon
// @match        http://www.ssodam.com/content/744763?prev=1&prev_content=/board/4
// @grant        none
// @source       https://github.com/roeniss/ssodam-userscript-dark-edition
// @iconURL      http://www.ssodam.com/statics/img/favicon.png
// @match        http://*.ssodam.com/*
// @run-at       document-end

// ==/UserScript==
(function() {
  "use strict";
  /* add color-vars to :root */

  const styles = `
    :root {
      --black-bg-1: #121212;
      --black-bg-2: #3B3B3B;
      --black-bg-3: #5C5C5C;
      --white-fg-1: #E9E9E9;
      --white-fg-2: #9C9C9C;
      --white-fg-3: #888888;
      --red-1: #e66060;
    }

    /*
     *  main page
     */
    body, footer {
      background-color: var(--black-bg-1) !important;
    }
    div.image-view, input.form-control, .list-group-item, .mbbanner, .searchbar button, .desktop-hide {
      background-color: var(--black-bg-2) !important;
    }
    div.panel, ul.dropdown-menu .desktop-hide {
      background-color: var(--black-bg-3) !important;
    }
    a, .nt-comment, body {
      color: var(--white-fg-1) !important;
    }
    .title span, .title a, .menu-button, , .searchbar button, .menu-name {
      color: var(--white-fg-2) !important;
    }
    #delete_notice_all {
      color: var(--white-fg-3) !important;
    }
    .list-group-item {
      border-color: var(--red-1) !important;
    }
    .panel-default {
      border:none !important;
    }
    ul.dropdown-menu {
      background-color: var(--black-bg-3) !important;
    }
    ul.dropdown-menu a {
      color: var(--white-fg-1) !important;
    }





  `;
  const styleElem = document.createElement("style");
  styleElem.type = "text/css";
  styleElem.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElem);
})();
