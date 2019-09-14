// ==UserScript==
// @name         ssodam-custom-script-dark-edition
// @namespace    http://tampermonkey.net/roeniss/
// @version      0.1
// @description  Change colors of and add functions to "http://ssodam.com"
// @author       Roeniss Moon
// @source       https://github.com/roeniss/ssodam-userscript-dark-edition
// @iconURL      http://www.ssodam.com/statics/img/favicon.png
// @match        http://*.ssodam.com/*
// @run-at       document-start

// ==/UserScript==
(function() {
  "use strict";
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
    div.image-view, input.form-control, .list-group-item, .mbbanner, .searchbar button,
    body > main > div.col-lg-offset-1.col-lg-10 > div:nth-child(2) {
      background-color: var(--black-bg-2) !important;
    }
    div.panel, ul.dropdown-menu .desktop-hide, ul.dropdown-menu {
      background-color: var(--black-bg-3) !important;
    }
    a, .nt-comment, body, ul.dropdown-menu a {
      color: var(--white-fg-1) !important;
    }
    .title span, .title a, .menu-button, .searchbar button, .menu-name {
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

    /*
    *  detail page
     */
    .post-element, .referer{
      background-color: var(--black-bg-2) !important;
    }
    .post-element *{
      color: var(--white-fg-1) !important;
    }
    .sidebar-menu *, .referer{
      color: var(--white-fg-2) !important;
    }

    div.board-header > div:nth-of-type(4),
    div.board-remove > div:nth-of-type(2),
    div.comment-header > div:nth-of-type(3) {
      opacity: .01 !important;
    }

    .post-element hr {
      border-color: var(--white-fg-3) !important;
    }

    .board-comments textarea {
      background-color: var(--black-bg-3) !important;
    }

    body > main > div.col-lg-offset-1.col-lg-10 > div.col-lg-3.visible-lg.side-view{
      background-color: var(--black-bg-1) !important;
    }

    .board-comments div div .desktop-hide * {
      background-color: var(--black-bg-1) !important;
      border-color: var(--black-bg-1) !important;
    }

    .desktop-hide button, .desktop-hide button * {
      opacity: 1 !important;
      background-color: var(--black-bg-2) !important;
      color: var(--white-fg-2) !important;
    }
    
    .form-control:focus {
      border-color: var(--red-1) !important;
      -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px var(--red-1);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px var(--red-1);
    }

    /*
     * board page
     */

    body > main > div > div > div.post-element > div.table-responsive > table * {
      border-color: var(--white-fg-3) !important;
    }
    
    .label-info {
      background-color: var(--red-1) !important;
    }
    
    div.post-element.table-post * {
      color: var(--white-fg-1) !important;
    }
    
    .btn-default{
      color: var(--white-fg-1) !important;
      background-color: var(--black-bg-2) !important;
    }
    
    .form-control{
      color: var(--white-fg-1) !important;
    }

    .searchbar select {
      background-color: var(--black-bg-3) !important;
      color: var(--white-fg-2) !important;
    }

    body > main > div.col-lg-offset-1.col-lg-10 > div.col-lg-3.mobile-hide.side-view{
      background-color: var(--black-bg-1) !important;
    }

    .desktop-hide center{
      background-color: var(--black-bg-2) !important;
    }
    
    body > div.desktop-hide > div.desktop-hide.fadeyo{
      border: none !important;
    }

    /*
     * write page
     */
    #youtube_modal > div.modal-dialog.modal-sm > div *, .btn-toolbar{
      background-color: var(--black-bg-2) !important;
    }

  `;

  // add custom styles
  const styleElem = document.createElement("style");
  styleElem.type = "text/css";
  styleElem.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElem);

  // I chose to inject this codes at "document-start" for prevention of splash
  // At this time documents are not fully loaded. So I use setInterval().
  const removeHoverEffects = setInterval(function() {
    if (!!document && document.readyState != "loading") {
      // remove hover color on board pages when ready
      const elems_tr = document.querySelectorAll("table tr");
      elems_tr.forEach(elem => {
        elem.removeAttribute("onmouseover");
        elem.removeAttribute("onmouseout");
        elem.onmouseover = function() {
          this.style.background = "var(--black-bg-3)";
        };
        elem.onmouseout = function() {
          this.style.background = "var(--black-bg-2)";
        };
      });

      // remove unnecessary css in mypage
      const mypageElem = document.querySelector("body > main > div > div.col-lg-4");
      if (!!mypageElem) {
        const mypageElemCheck = mypageElem.querySelector(".useredit");
        if (!!mypageElemCheck) {
          mypageElem.style = "background-color: var(--black-bg-1) !important";
        }
      }

      clearInterval(removeHoverEffects);
    }
  }, 50);
})();
