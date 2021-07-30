import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import ScrollTop from "./scrollTop/scrollTop";
import SideAnim from "./sideAnim/sideAnim";
import favicon from "./images/favicon.ico";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes"
        />
        <link rel="shortcut icon" href={favicon} type="image/png" />
        <script
          dangerouslySetInnerHTML={{__html: `(function(b){b.forEach(function(a){a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);`,}}
        ></script>
        <script
          dangerouslySetInnerHTML={{__html: `(function(d){d.forEach(function(b){b.hasOwnProperty("prepend")||Object.defineProperty(b,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),c=document.createDocumentFragment();e.forEach(function(a){c.appendChild(a instanceof Node?a:document.createTextNode(String(a)))});this.insertBefore(c,this.firstChild)}})})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);`,}}
        ></script>
      </Head>
      <noscript>
        您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態。
        <br />
      </noscript>
      {/* 錨點-判斷是否捲動 */}
      <div className="anchor" />

      <div>{children}</div>

      <ScrollTop />
      <SideAnim />

      <div
        id="sr-only"
        className="sr-only"
        aria-live="polite"
        aria-relevant="additions text"
        role="status"
      />
    </>
  );
}

Layout.propTypes = { children: PropTypes.element.isRequired };
