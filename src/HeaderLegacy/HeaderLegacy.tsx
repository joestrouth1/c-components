/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'

/**
 * The old HeaderLegacy component
 */
const HeaderLegacy = () => (
  <div
    css={css(styles)}
    sx={{
      fontFamily: 'sans',
    }}
  >
    <header>
      <div className="log-in-row">
        <div className="container-fluid">
          <a className="logo" id="logo" title="Speedy Cash" href="/">
            <img
              alt="Speedy Cash"
              src="https://db4nnybic3xty.cloudfront.net/images/speedy-2016/speedy-logo-2x.png"
              className="img-fluid"
            />
          </a>
          <div className="topnavbar">
            <div className="pull-right d-none d-lg-block">
              <div className="pull-right">
                <a
                  href="/secure/User/Login"
                  className="no-underline btn btn-header-login ml-3 rel-pos"
                >
                  <img
                    src="https://db4nnybic3xty.cloudfront.net/images/speedy-2018/icons/white/white-person.png"
                    alt=""
                    className="btn-header-login-img mr-3"
                    width="18"
                  />
                  Sign In
                </a>
              </div>
              <div className="pull-right pr-2">
                <div className="white pt-xs">
                  <a
                    className="white mr-3 no-underline customer-service-phone"
                    href="tel:18883331360"
                    title="1-888-333-1360"
                  >
                    <i className="fa fa-phone mr-1 fa-rotate-45"></i>
                    1-888-333-1360
                  </a>{' '}
                  <a
                    className="white no-underline customer-service-phone"
                    href="tel:18557340111"
                    title="1-855-734-0111"
                  >
                    1-855-734-0111
                  </a>{' '}
                  <span className="sm-text">(Espa&ntilde;ol)</span>
                </div>
              </div>
            </div>
            <div className="row pr-2 pl-2 d-lg-none header-icons text-center">
              <div className="header-icon col-4">
                <a
                  href="/secure/LoanApplication"
                  className="no-underline btn btn-header-apply-sm rel-pos mr-1"
                  title="Apply Now"
                >
                  Apply Now
                </a>
              </div>
              <div className="header-icon col-2">
                <a
                  href="/find-a-store/"
                  title="Locations"
                  data-geo-url="/find-a-store/{state}"
                >
                  <img
                    className="d-block mx-auto mtxs"
                    src="https://db4nnybic3xty.cloudfront.net/images/speedy-2016/header-icon-store.png"
                    width="18"
                    alt="Locations"
                  />
                </a>
              </div>
              <div className="header-icon col-2">
                <a href="/contact-us/" title="Contact Us">
                  <img
                    className="d-block mx-auto mtxs"
                    src="https://db4nnybic3xty.cloudfront.net/images/speedy-2016/header-icon-contact2.png"
                    width="18"
                    alt="Contact Us"
                  />
                </a>
              </div>
              <div className="col-4">
                <a
                  href="/secure/User/Login"
                  className="no-underline btn btn-header-login-sm rel-pos ml-1"
                  title="Sign In"
                >
                  <img
                    src="https://db4nnybic3xty.cloudfront.net/images/speedy-2018/icons/white/white-person.png"
                    alt=""
                    className="btn-header-login-img mr-3"
                    width="15"
                  />
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid main-nav">
        <div className="row justify-content-end">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#exCollapsingNavbar2"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars pt-2 pr-0 pull-right text-right"></i>
            </button>
            <div
              className="collapse navbar-collapse pull-right"
              id="exCollapsingNavbar2"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a
                    href="/loans/"
                    title="Available Loans"
                    className="header-link"
                    data-geo-url="/loans/{state}"
                  >
                    Available Loans
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/faqs/" title="FAQs" className="header-link">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/rates-and-terms/"
                    title="Rates &amp; Terms"
                    className="header-link"
                    data-geo-url="/rates-and-terms/{state}"
                  >
                    Rates &amp; Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/find-a-store/"
                    title="Locations"
                    className="header-link"
                    data-geo-url="/find-a-store/{state}"
                  >
                    Locations
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <a
                    className="header-link green"
                    href="tel:18883331360"
                    title="1-888-333-1360"
                  >
                    <i className="fa fa-phone mr-1 fa-rotate-45"></i>
                    1-888-333-1360
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <a
                    className="header-link green"
                    href="tel:18557340111"
                    title="1-855-734-0111"
                  >
                    <i className="fa fa-phone mr-1 fa-rotate-45"></i>
                    1-855-734-0111{' '}
                    <span className="sm-text">(Espa&ntilde;ol)</span>
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <a
                    href="/secure/User/Login"
                    title="Sign In"
                    className="header-link green"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/secure/LoanApplication"
                    title="Apply Now"
                    className="btn btn-small header-apply-btn"
                  >
                    Apply Now
                  </a>
                </li>
                <li className="nav-item security-li">
                  <a
                    href="/security-center/"
                    title="Security Center"
                    className="header-link pt-0 pb-0"
                  >
                    {' '}
                    <i
                      className="fa fa-shield fa-2x midgrey mr-1 d-none d-lg-block pull-left"
                      aria-hidden="true"
                    ></i>
                    <span className="security-link text-left">
                      Security
                      <br />
                      Center
                    </span>
                    <i
                      className="fa fa-shield fa-2x light-green mr-1 d-lg-none pull-left"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <div className="instant-funding-bar">
      <div className="container">
        <div className="row">
          <div className="col-5 col-sm-3 col-lg-5 text-center">
            <img
              className="img-fluid instant-funding-logo float-lg-right"
              src="//db4nnybic3xty.cloudfront.net/images/speedy-2018/logos/instant-funding-horizontal-red.png"
              alt="Introducing Instant Funding from Speedy Cash"
            />
          </div>
          <div className="col-7 col-sm-9 col-lg-7 text-left">
            <p
              className="title mbxs"
              style={{
                color: '#ffffff',
              }}
            >
              Introducing <em className="bold">Instant Funding</em> to Debit
              Cards<sup className="small">&dagger;</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeaderLegacy

const styles = `/*!
*  Font Awesome 4.6.1 by @davegandy - http://fontawesome.io - @fontawesome
*  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
*/
/* @font-face {
 font-family: 'FontAwesome';
 src: url('../fonts/fontawesome-webfont.eot?v=4.6.1');
 src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.6.1')
     format('embedded-opentype'),
   url('../fonts/fontawesome-webfont.woff2?v=4.6.1') format('woff2'),
   url('../fonts/fontawesome-webfont.woff?v=4.6.1') format('woff'),
   url('../fonts/fontawesome-webfont.ttf?v=4.6.1') format('truetype'),
   url('../fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular')
     format('svg');
 font-weight: normal;
 font-style: normal;
} */
/*!
* Bootstrap v4.0.0 (https://getbootstrap.com)
* Copyright 2011-2018 The Bootstrap Authors
* Copyright 2011-2018 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
/*# sourceMappingURL=bootstrap.min.css.map */

.fa {
 display: inline-block;
 font: normal normal normal 14px/1 FontAwesome;
 font-size: inherit;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

.fa-2x {
 font-size: 2em;
}

.pull-right {
 float: right;
}

.pull-left {
 float: left;
}

.fa.pull-left {
 margin-right: 0.3em;
}

.fa.pull-right {
 margin-left: 0.3em;
}

@-webkit-keyframes fa-spin {
 0% {
   -webkit-transform: rotate(0deg);
   transform: rotate(0deg);
 }

 100% {
   -webkit-transform: rotate(359deg);
   transform: rotate(359deg);
 }
}

@keyframes fa-spin {
 0% {
   -webkit-transform: rotate(0deg);
   transform: rotate(0deg);
 }

 100% {
   -webkit-transform: rotate(359deg);
   transform: rotate(359deg);
 }
}

.fa-phone:before {
 content: '\f095';
}

.fa-bars:before {
 content: '\f0c9';
}

.fa-shield:before {
 content: '\f132';
}

*,
::after,
::before {
 box-sizing: border-box;
}

figcaption,
header,
main,
nav,
section {
 display: block;
}

[tabindex='-1']:focus {
 outline: 0 !important;
}

p {
 margin-top: 0;
 margin-bottom: 1rem;
}

ol,
ul {
 margin-top: 0;
 margin-bottom: 1rem;
}

ol ol,
ol ul,
ul ol,
ul ul {
 margin-bottom: 0;
}

dfn {
 font-style: italic;
}

strong {
 font-weight: bolder;
}

small {
 font-size: 80%;
}

sup {
 position: relative;
 font-size: 75%;
 line-height: 0;
 vertical-align: baseline;
}

sup {
 top: -0.5em;
}

a {
 color: #007bff;
 text-decoration: none;
 background-color: transparent;
 -webkit-text-decoration-skip: objects;
}

a:hover {
 color: #0056b3;
 text-decoration: underline;
}

a:not([href]):not([tabindex]) {
 color: inherit;
 text-decoration: none;
}

a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
 color: inherit;
 text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
 outline: 0;
}

img {
 vertical-align: middle;
 border-style: none;
}

caption {
 padding-top: 0.75rem;
 padding-bottom: 0.75rem;
 color: #6c757d;
 text-align: left;
 caption-side: bottom;
}

button {
 border-radius: 0;
}

button:focus {
 outline: 1px dotted;
 outline: 5px auto -webkit-focus-ring-color;
}

button,
input {
 margin: 0;
 font-family: inherit;
 font-size: inherit;
 line-height: inherit;
}

button,
input {
 overflow: visible;
}

button {
 text-transform: none;
}

[type='reset'],
[type='submit'],
button {
 -webkit-appearance: button;
}

[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
 padding: 0;
 border-style: none;
}

input[type='checkbox'],
input[type='radio'] {
 box-sizing: border-box;
 padding: 0;
}

input[type='date'],
input[type='datetime-local'],
input[type='month'],
input[type='time'] {
 -webkit-appearance: listbox;
}

legend {
 display: block;
 width: 100%;
 max-width: 100%;
 padding: 0;
 margin-bottom: 0.5rem;
 font-size: 1.5rem;
 line-height: inherit;
 color: inherit;
 white-space: normal;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
 height: auto;
}

[type='search'] {
 outline-offset: -2px;
 -webkit-appearance: none;
}

[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
 -webkit-appearance: none;
}

::-webkit-file-upload-button {
 font: inherit;
 -webkit-appearance: button;
}

[hidden] {
 display: none !important;
}

.small,
small {
 font-size: 80%;
 font-weight: 400;
}

.img-fluid {
 max-width: 100%;
 height: auto;
}

.container {
 width: 100%;
 padding-right: 15px;
 padding-left: 15px;
 margin-right: auto;
 margin-left: auto;
}

@media (min-width: 576px) {
 .container {
   max-width: 540px;
 }
}

@media (min-width: 768px) {
 .container {
   max-width: 720px;
 }
}

@media (min-width: 992px) {
 .container {
   max-width: 960px;
 }
}

@media (min-width: 1200px) {
 .container {
   max-width: 1140px;
 }
}

.container-fluid {
 width: 100%;
 padding-right: 15px;
 padding-left: 15px;
 margin-right: auto;
 margin-left: auto;
}

.row {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
 flex-wrap: wrap;
 margin-right: -15px;
 margin-left: -15px;
}

.col-2,
.col-4,
.col-5,
.col-7,
.col-lg-5,
.col-lg-7,
.col-sm-3,
.col-sm-9 {
 position: relative;
 width: 100%;
 min-height: 1px;
 padding-right: 15px;
 padding-left: 15px;
}

.col-2 {
 -webkit-box-flex: 0;
 -ms-flex: 0 0 16.666667%;
 flex: 0 0 16.666667%;
 max-width: 16.666667%;
}

.col-4 {
 -webkit-box-flex: 0;
 -ms-flex: 0 0 33.333333%;
 flex: 0 0 33.333333%;
 max-width: 33.333333%;
}

.col-5 {
 -webkit-box-flex: 0;
 -ms-flex: 0 0 41.666667%;
 flex: 0 0 41.666667%;
 max-width: 41.666667%;
}

.col-7 {
 -webkit-box-flex: 0;
 -ms-flex: 0 0 58.333333%;
 flex: 0 0 58.333333%;
 max-width: 58.333333%;
}

@media (min-width: 576px) {
 .col-sm-3 {
   -webkit-box-flex: 0;
   -ms-flex: 0 0 25%;
   flex: 0 0 25%;
   max-width: 25%;
 }

 .col-sm-9 {
   -webkit-box-flex: 0;
   -ms-flex: 0 0 75%;
   flex: 0 0 75%;
   max-width: 75%;
 }
}

@media (min-width: 992px) {
 .col-lg-5 {
   -webkit-box-flex: 0;
   -ms-flex: 0 0 41.666667%;
   flex: 0 0 41.666667%;
   max-width: 41.666667%;
 }

 .col-lg-7 {
   -webkit-box-flex: 0;
   -ms-flex: 0 0 58.333333%;
   flex: 0 0 58.333333%;
   max-width: 58.333333%;
 }
}

.btn {
 display: inline-block;
 font-weight: 400;
 text-align: center;
 white-space: nowrap;
 vertical-align: middle;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
 border: 1px solid transparent;
 padding: 0.375rem 0.75rem;
 font-size: 1rem;
 line-height: 1.5;
 border-radius: 0.25rem;
 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
   border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:focus,
.btn:hover {
 text-decoration: none;
}

.btn:focus {
 outline: 0;
 box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn:disabled {
 opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
 cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active {
 background-image: none;
}

.collapse {
 display: none;
}

.nav {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
 flex-wrap: wrap;
 padding-left: 0;
 margin-bottom: 0;
 list-style: none;
}

.navbar {
 position: relative;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
 flex-wrap: wrap;
 -webkit-box-align: center;
 -ms-flex-align: center;
 align-items: center;
 -webkit-box-pack: justify;
 -ms-flex-pack: justify;
 justify-content: space-between;
 padding: 0.5rem 1rem;
}

.navbar > .container,
.navbar > .container-fluid {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
 flex-wrap: wrap;
 -webkit-box-align: center;
 -ms-flex-align: center;
 align-items: center;
 -webkit-box-pack: justify;
 -ms-flex-pack: justify;
 justify-content: space-between;
}

.navbar-nav {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
 -ms-flex-direction: column;
 flex-direction: column;
 padding-left: 0;
 margin-bottom: 0;
 list-style: none;
}

.navbar-collapse {
 -ms-flex-preferred-size: 100%;
 flex-basis: 100%;
 -webkit-box-flex: 1;
 -ms-flex-positive: 1;
 flex-grow: 1;
 -webkit-box-align: center;
 -ms-flex-align: center;
 align-items: center;
}

.navbar-toggler {
 padding: 0.25rem 0.75rem;
 font-size: 1.25rem;
 line-height: 1;
 background-color: transparent;
 border: 1px solid transparent;
 border-radius: 0.25rem;
}

.navbar-toggler:focus,
.navbar-toggler:hover {
 text-decoration: none;
}

.navbar-toggler:not(:disabled):not(.disabled) {
 cursor: pointer;
}

@media (max-width: 991.98px) {
 .navbar-expand-lg > .container,
 .navbar-expand-lg > .container-fluid {
   padding-right: 0;
   padding-left: 0;
 }
}

@media (min-width: 992px) {
 .navbar-expand-lg {
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -ms-flex-flow: row nowrap;
   flex-flow: row nowrap;
   -webkit-box-pack: start;
   -ms-flex-pack: start;
   justify-content: flex-start;
 }

 .navbar-expand-lg .navbar-nav {
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -ms-flex-direction: row;
   flex-direction: row;
 }

 .navbar-expand-lg > .container,
 .navbar-expand-lg > .container-fluid {
   -ms-flex-wrap: nowrap;
   flex-wrap: nowrap;
 }

 .navbar-expand-lg .navbar-collapse {
   display: -webkit-box !important;
   display: -ms-flexbox !important;
   display: flex !important;
   -ms-flex-preferred-size: auto;
   flex-basis: auto;
 }

 .navbar-expand-lg .navbar-toggler {
   display: none;
 }
}

@-webkit-keyframes progress-bar-stripes {
 from {
   background-position: 1rem 0;
 }

 to {
   background-position: 0 0;
 }
}

@keyframes progress-bar-stripes {
 from {
   background-position: 1rem 0;
 }

 to {
   background-position: 0 0;
 }
}

.d-none {
 display: none !important;
}

.d-block {
 display: block !important;
}

@media (min-width: 992px) {
 .d-lg-none {
   display: none !important;
 }

 .d-lg-block {
   display: block !important;
 }
}

.justify-content-end {
 -webkit-box-pack: end !important;
 -ms-flex-pack: end !important;
 justify-content: flex-end !important;
}

@media (min-width: 992px) {
 .float-lg-right {
   float: right !important;
 }
}

.mr-1 {
 margin-right: 0.25rem !important;
}

.ml-1 {
 margin-left: 0.25rem !important;
}

.mr-3 {
 margin-right: 1rem !important;
}

.ml-3 {
 margin-left: 1rem !important;
}

.pt-0 {
 padding-top: 0 !important;
}

.pr-0 {
 padding-right: 0 !important;
}

.pb-0 {
 padding-bottom: 0 !important;
}

.pt-2 {
 padding-top: 0.5rem !important;
}

.pr-2 {
 padding-right: 0.5rem !important;
}

.pl-2 {
 padding-left: 0.5rem !important;
}

.mx-auto {
 margin-right: auto !important;
}

.mx-auto {
 margin-left: auto !important;
}

.text-left {
 text-align: left !important;
}

.text-right {
 text-align: right !important;
}

.text-center {
 text-align: center !important;
}

@media print {
 *,
 ::after,
 ::before {
   text-shadow: none !important;
   box-shadow: none !important;
 }

 a:not(.btn) {
   text-decoration: underline;
 }

 img {
   page-break-inside: avoid;
 }

 p {
   orphans: 3;
   widows: 3;
 }
 @page {
   size: a3;
 }
 .container {
  min-width: 992px !important;
 }
 
 .navbar {
  display: none;
 }
}


a.btn {
 text-decoration: none;
}

[type='reset'],
[type='submit'],
button {
 -webkit-appearance: initial;
}

.btn {
 white-space: inherit !important;
}

.btn:focus {
 outline: 0;
 box-shadow: 0 0 0 0.2rem #7ac143;
}

.btn-header-apply-sm {
 background-color: transparent;
 border: solid 1px #fff;
 border-radius: 2px;
 color: #fff !important;
 text-decoration: none;
 line-height: 0.6em;
 padding: 6px 15px;
 font-size: 12px;
 max-width: 120px;
 margin-left: auto;
 margin-right: auto;
}

.btn-header-login-sm {
 background-color: #7ac143;
 border: solid 1px #fff;
 border-radius: 2px;
 color: #000;
 text-decoration: none;
 line-height: 0.65em;
 padding: 6px 26px;
 font-size: 12px;
 max-width: 120px;
 margin-left: auto;
 margin-right: auto;
}

.midgrey {
 color: #ccc;
}

.white {
 color: #fff !important;
}

.green {
 color: #00502f !important;
}

.light-green {
 color: #7ac143;
}

.rel-pos {
 position: relative;
}

a {
 text-decoration: underline;
 color: #00502f;
 pointer-events: all;
}

a.no-underline,
a.no-underline:visited,
a.no-underline:active,
a.no-underline:focus {
 text-decoration: none !important;
}

a.no-underline:hover {
 text-decoration: underline;
}

a:hover,
a:visited,
a:active,
a:focus {
 text-decoration: none;
 color: #00502f;
}

.rel-pos {
 position: relative;
}

.pt-0 {
 padding-top: 0 !important;
}

.pr-0 {
 padding-right: 0 !important;
}

.pb-0 {
 padding-bottom: 0 !important;
}

.mtxs {
 margin-top: 3px !important;
}

.mbxs {
 margin-bottom: 3px !important;
}

.mr-3 {
 margin-right: 20px !important;
}

.pt-2 {
 padding-top: 10px !important;
}

.sm-text {
 font-size: 12px;
}

.bold {
 font-weight: 700 !important;
}

.d-block {
 display: block;
}

header {
 position: fixed;
 top: 0;
 z-index: 2000;
 width: 100%;
 background-color: #fff;
 display: block;
 z-index: 2400;
}

.log-in-row {
 background: #00502f;
 padding-top: 8px;
 padding-bottom: 8px;
 height: 40px;
}

.btn-header-login {
 background-color: #7ac143;
 border: solid 1px #fff;
 border-radius: 2px;
 color: #000;
 text-decoration: none;
 line-height: 0.65em;
 padding: 8px 28px;
 font-size: 14px;
}

.btn-header-login-img {
 position: absolute;
 left: 3px;
 top: 4px;
}

.btn-header-login:hover,
.btn-header-login:active,
.btn-header-login:focus {
 background-color: #00502f;
 text-decoration: none;
 color: #fff;
}

a.header-link {
 font-size: 15px;
 text-decoration: none;
 padding-right: 0;
}

a.header-link:hover {
 text-decoration: underline !important;
}

.main-nav {
 width: 100% !important;
 min-width: 100% !important;
 box-shadow: 0 0 3px #939393;
 border-top: solid 1px #dfdfdf;
}

.navbar-expand-lg {
 justify-content: flex-end;
}

li.nav-item {
 padding-top: 7px;
 padding-left: 20px;
 margin: 0 !important;
}

.security-link {
 font-size: 12px;
 line-height: 13px;
 float: left;
}

.security-li i {
 float: left;
}

.navbar-nav > li > a {
 padding-bottom: 12px;
 padding-top: 12px;
}

.navbar {
 border: medium none;
 border-radius: 0;
 margin-bottom: 0;
 min-height: 52px;
}

.header-apply-btn {
 background-color: #e31b23;
 border-radius: 2px;
 padding-top: 3px !important;
 padding-bottom: 3px !important;
 color: #fff !important;
 margin-top: -2px;
 font-size: 12px;
 font-weight: 700;
 text-decoration: none;
}

.header-apply-btn:hover,
.header-apply-btn:focus {
 background-color: #9f1318;
}

.logo {
 position: absolute;
 left: 20px;
 top: 35px;
 z-index: 3000;
 width: 158px;
}

.instant-funding-bar {
 padding-top: 12px;
 padding-bottom: 10px;
 background-color: #00502f;
 margin-top: 92px;
}

.instant-funding-bar .instant-funding-logo {
 max-width: 160px;
 margin-left: auto;
 margin-right: auto;
}

.instant-funding-bar .small {
 font-size: 12px;
}

.instant-funding-bar .title {
 font-size: 16px;
 color: #00502f;
}

@media screen and (max-width: 991px) {
 .logo {
   left: 5px;
   top: 36px;
   width: 110px;
 }

 .instant-funding-bar .instant-funding-logo {
   width: 121px;
   margin: 7px auto 5px auto;
   padding-top: 0;
 }

 .instant-funding-bar {
   position: relative;
   margin-top: 0;
   padding-bottom: 2px;
   padding-top: 4px;
   margin-top: 85px;
 }

 .instant-funding-bar .title {
   font-size: 13px;
   padding-top: 0;
   line-height: 17px;
 }

 .log-in-row {
   height: 32px;
 }

 .header-icons div {
   padding: 4px 0;
   border-left: solid 1px #007545;
   border-right: solid 1px #00180e;
 }

 .header-icons div:first-of-type {
   border-left: none;
 }

 .header-icons div:last-of-type {
   border-right: none;
 }

 .navbar-nav {
   flex-direction: row-reverse;
   margin-right: -40px;
 }

 .log-in-row {
   padding-top: 0 !important;
   padding-bottom: 0 !important;
 }

 li.nav-item {
   padding-top: 18px;
 }
}

input::-webkit-input-placeholder {
 opacity: 0.85 !important;
}

input:-moz-placeholder {
 opacity: 0.85 !important;
}

input::-moz-placeholder {
 opacity: 0.85 !important;
}

input:-ms-input-placeholder {
 opacity: 0.85 !important;
}

input:focus::-webkit-input-placeholder {
 opacity: 0.7 !important;
}

input:focus:-moz-placeholder {
 opacity: 0.7 !important;
}

input:focus::-moz-placeholder {
 opacity: 0.7 !important;
}

input:focus:-ms-input-placeholder {
 opacity: 0.7 !important;
}

.mr-1 {
 margin-right: 5px !important;
}

.mr-3 {
 margin-right: 20px !important;
}

.ml-1 {
 margin-left: 5px !important;
}

.ml-3 {
 margin-left: 20px !important;
}

.pt-2 {
 padding-top: 10px !important;
}

.pr-2 {
 padding-right: 10px !important;
}

.pl-2 {
 padding-left: 10px !important;
}

.pt-xs {
 padding-top: 3px !important;
}

.pt-0 {
 padding-top: 0 !important;
}

.pr-0 {
 padding-right: 0 !important;
}

.pb-0 {
 padding-bottom: 0 !important;
}

.pt-0 {
 padding-top: 0 !important;
}

.pr-0 {
 padding-right: 0 !important;
}

.pb-0 {
 padding-bottom: 0 !important;
}

a:focus {
 outline: 2px solid #7ac143 !important;
}

@media screen and (max-width: 991px) {
 .log-in-row {
   padding-top: 0 !important;
   padding-bottom: 0 !important;
 }

 .security-link {
   float: right !important;
 }

 .security-li i {
   float: right !important;
 }

 .collapse.nav {
   position: absolute;
   top: 40px;
   right: 20px;
 }

 li.nav-item {
   text-align: right !important;
   width: 100%;
   padding-right: 50px;
 }
}

@media screen and (max-width: 767px) {
 .header-link {
   padding-right: 12px;
 }

 .header-apply-btn {
   background-color: #e31b23;
   border-radius: 2px;
   padding-top: 4px !important;
   padding-bottom: 4px !important;
   color: #fff !important;
   margin-top: 8px;
   font-size: 14px;
   font-weight: 700;
   text-decoration: none;
   width: 160px;
   float: right;
 }

 .security-link {
   float: right !important;
 }

 .security-li i {
   float: right !important;
 }

 .collapse.nav {
   position: absolute;
   top: 40px;
   right: 20px;
 }

 li.nav-item {
   text-align: right !important;
   width: 100%;
   padding-right: 50px;
 }
}
`
