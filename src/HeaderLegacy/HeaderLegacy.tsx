/** @jsx jsx */
import { jsx } from 'theme-ui'
import './HeaderLegacy.css'

/**
 * The old HeaderLegacy component
 */
const HeaderLegacy = () => (
  <div
    className="_header-legacy"
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
