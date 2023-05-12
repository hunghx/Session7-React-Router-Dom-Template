import React from "react";
import Footer from "./layout/Footer";
import PageBreadCrump from "./layout/PageBreadCrump";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";

export default function Map() {
  return (
    <div>
      {/* <div className="preloader">
    <div className="lds-ripple">
      <div className="lds-pos" />
      <div className="lds-pos" />
    </div>
  </div> */}
      {/* ============================================================== */}
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <Header />
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        <Sidebar />
        {/* ============================================================== */}
        {/* End Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className="page-wrapper">
          {/* ============================================================== */}
          {/* Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          <PageBreadCrump />
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Container fluid  */}
          {/* ============================================================== */}
          <div className="container-fluid">
            {/* ============================================================== */}
            {/* Start Page Content */}
            {/* ============================================================== */}
            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Simple Basic Map</h3>
                  <div
                    id="gmaps-simple"
                    className="gmaps"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundColor: "rgb(229, 227, 223)",
                      }}
                    >
                      <div
                        className="gm-style"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                          height: "100%",
                          width: "100%",
                          padding: 0,
                          borderWidth: 0,
                          margin: 0,
                        }}
                      >
                        <div
                          tabIndex={0}
                          style={{
                            position: "absolute",
                            zIndex: 0,
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: "100%",
                            padding: 0,
                            borderWidth: 0,
                            margin: 0,
                            cursor:
                              'url("http://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                            touchAction: "pan-x pan-y",
                          }}
                        >
                          <div
                            style={{
                              zIndex: 1,
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: "100%",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 100,
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  zIndex: 0,
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    zIndex: 995,
                                    transform: "matrix(1, 0, 0, 1, -1, -199)",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 256,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: "-256px",
                                      top: 256,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: "-256px",
                                      top: 0,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 256,
                                      top: 0,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 256,
                                      top: 256,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: "-512px",
                                      top: 256,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: "-512px",
                                      top: 0,
                                      width: 256,
                                      height: 256,
                                    }}
                                  >
                                    <div style={{ width: 256, height: 256 }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 101,
                                width: "100%",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 102,
                                width: "100%",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 103,
                                width: "100%",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 0,
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  zIndex: 995,
                                  transform: "matrix(1, 0, 0, 1, -1, -199)",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 256,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i9!3i13!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=37082"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "-256px",
                                    top: 256,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i8!3i13!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=64600"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "-256px",
                                    top: 0,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i8!3i12!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=28906"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i9!3i12!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=1388"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 256,
                                    top: 0,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i10!3i12!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=47192"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: 256,
                                    top: 256,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i10!3i13!4i256!2m3!1e0!2sm!3i526246020!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=82886"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "-512px",
                                    top: 256,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i7!3i13!4i256!2m3!1e0!2sm!3i526245972!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=62348"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "-512px",
                                    top: 0,
                                    width: 256,
                                    height: 256,
                                    transition: "opacity 200ms linear 0s",
                                  }}
                                >
                                  <img
                                    draggable="false"
                                    alt
                                    role="presentation"
                                    src="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i5!2i7!3i12!4i256!2m3!1e0!2sm!3i526245972!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&token=26654"
                                    style={{
                                      width: 256,
                                      height: 256,
                                      userSelect: "none",
                                      border: 0,
                                      padding: 0,
                                      margin: 0,
                                      maxWidth: "none",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="gm-style-pbc"
                            style={{
                              zIndex: 2,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              padding: 0,
                              borderWidth: 0,
                              margin: 0,
                              left: 0,
                              top: 0,
                              opacity: 0,
                              transitionDuration: "0.8s",
                            }}
                          >
                            <p className="gm-style-pbt">
                              Use ctrl + scroll to zoom the map
                            </p>
                          </div>
                          <div
                            style={{
                              zIndex: 3,
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              padding: 0,
                              borderWidth: 0,
                              margin: 0,
                              left: 0,
                              top: 0,
                              touchAction: "pan-x pan-y",
                            }}
                          >
                            <div
                              style={{
                                zIndex: 4,
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "100%",
                                transform: "translate(0px, 0px)",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  zIndex: 104,
                                  width: "100%",
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  zIndex: 105,
                                  width: "100%",
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  zIndex: 106,
                                  width: "100%",
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  zIndex: 107,
                                  width: "100%",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <iframe
                          aria-hidden="true"
                          frameBorder={0}
                          tabIndex={-1}
                          style={{
                            zIndex: -1,
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                          }}
                        />
                        <div
                          style={{
                            marginLeft: 5,
                            marginRight: 5,
                            zIndex: 1000000,
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <a
                            target="_blank"
                            rel="noopener"
                            href="https://maps.google.com/maps?ll=34.05,-78.72&z=5&t=m&hl=en-US&gl=US&mapclient=apiv3"
                            title="Open this area in Google Maps (opens a new window)"
                            style={{
                              position: "static",
                              overflow: "visible",
                              float: "none",
                              display: "inline",
                            }}
                          >
                            <div
                              style={{
                                width: 66,
                                height: 26,
                                cursor: "pointer",
                              }}
                            >
                              <img
                                alt
                                src="http://maps.gstatic.com/mapfiles/api-3/images/google4.png"
                                draggable="false"
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  width: 66,
                                  height: 26,
                                  userSelect: "none",
                                  border: 0,
                                  padding: 0,
                                  margin: 0,
                                }}
                              />
                            </div>
                          </a>
                        </div>
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "15px 21px",
                            border: "1px solid rgb(171, 171, 171)",
                            fontFamily: "Roboto, Arial, sans-serif",
                            color: "rgb(34, 34, 34)",
                            boxSizing: "border-box",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 16px",
                            zIndex: 10000002,
                            display: "none",
                            width: 300,
                            height: 180,
                            position: "absolute",
                            left: 355,
                            top: 60,
                          }}
                        >
                          <div
                            style={{
                              padding: "0px 0px 10px",
                              fontSize: 16,
                              boxSizing: "border-box",
                            }}
                          >
                            Map Data
                          </div>
                          <div style={{ fontSize: 13 }}>
                            Map data ©2021 Google, INEGI
                          </div>
                          <button
                            draggable="false"
                            title="Close"
                            aria-label="Close"
                            type="button"
                            className="gm-ui-hover-effect"
                            style={{
                              background: "none",
                              display: "block",
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "absolute",
                              cursor: "pointer",
                              userSelect: "none",
                              top: 0,
                              right: 0,
                              width: 37,
                              height: 37,
                            }}
                          >
                            <img
                              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2021.59%206.41%2019%2012%2013.41%2021.59%2019%2019%2021.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                              style={{
                                pointerEvents: "none",
                                display: "block",
                                width: 13,
                                height: 13,
                                margin: 12,
                              }}
                            />
                          </button>
                        </div>
                        <div
                          className="gmnoprint"
                          style={{
                            zIndex: 1000001,
                            position: "absolute",
                            right: 169,
                            bottom: 0,
                            width: 150,
                          }}
                        >
                          <div
                            draggable="false"
                            className="gm-style-cc"
                            style={{
                              userSelect: "none",
                              height: 14,
                              lineHeight: 14,
                            }}
                          >
                            <div
                              style={{
                                opacity: "0.7",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                              }}
                            >
                              <div style={{ width: 1 }} />
                              <div
                                style={{
                                  backgroundColor: "rgb(245, 245, 245)",
                                  width: "auto",
                                  height: "100%",
                                  marginLeft: 1,
                                }}
                              ></div>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                paddingRight: 6,
                                paddingLeft: 6,
                                boxSizing: "border-box",
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: 10,
                                color: "rgb(68, 68, 68)",
                                whiteSpace: "nowrap",
                                direction: "ltr",
                                textAlign: "right",
                                verticalAlign: "middle",
                                display: "inline-block",
                              }}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                  display: "none",
                                }}
                              >
                                Map Data
                              </a>
                              <span>Map data ©2021 Google, INEGI</span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="gmnoscreen"
                          style={{ position: "absolute", right: 0, bottom: 0 }}
                        >
                          <div
                            style={{
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: 11,
                              color: "rgb(68, 68, 68)",
                              direction: "ltr",
                              textAlign: "right",
                              backgroundColor: "rgb(245, 245, 245)",
                            }}
                          >
                            Map data ©2021 Google, INEGI
                          </div>
                        </div>
                        <div
                          className="gmnoprint gm-style-cc"
                          draggable="false"
                          style={{
                            zIndex: 1000001,
                            userSelect: "none",
                            height: 14,
                            lineHeight: 14,
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <div
                            style={{
                              opacity: "0.7",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                            }}
                          >
                            <div style={{ width: 1 }} />
                            <div
                              style={{
                                backgroundColor: "rgb(245, 245, 245)",
                                width: "auto",
                                height: "100%",
                                marginLeft: 1,
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              position: "relative",
                              paddingRight: 6,
                              paddingLeft: 6,
                              boxSizing: "border-box",
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: 10,
                              color: "rgb(68, 68, 68)",
                              whiteSpace: "nowrap",
                              direction: "ltr",
                              textAlign: "right",
                              verticalAlign: "middle",
                              display: "inline-block",
                            }}
                          >
                            <a
                              href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                              target="_blank"
                              rel="noopener"
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                                color: "rgb(68, 68, 68)",
                              }}
                            >
                              Terms of Use
                            </a>
                          </div>
                        </div>
                        <button
                          draggable="false"
                          title="Toggle fullscreen view"
                          aria-label="Toggle fullscreen view"
                          type="button"
                          className="gm-control-active gm-fullscreen-control"
                          style={{
                            background: "none rgb(255, 255, 255)",
                            border: 0,
                            margin: 10,
                            padding: 0,
                            position: "absolute",
                            cursor: "pointer",
                            userSelect: "none",
                            borderRadius: 2,
                            height: 40,
                            width: 40,
                            boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                            overflow: "hidden",
                            top: 0,
                            right: 0,
                          }}
                        >
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            style={{ height: 18, width: 18 }}
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            style={{ height: 18, width: 18 }}
                          />
                        </button>
                        <div
                          draggable="false"
                          className="gm-style-cc"
                          style={{
                            userSelect: "none",
                            height: 14,
                            lineHeight: 14,
                            display: "none",
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <div
                            style={{
                              opacity: "0.7",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                            }}
                          >
                            <div style={{ width: 1 }} />
                            <div
                              style={{
                                backgroundColor: "rgb(245, 245, 245)",
                                width: "auto",
                                height: "100%",
                                marginLeft: 1,
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              position: "relative",
                              paddingRight: 6,
                              paddingLeft: 6,
                              boxSizing: "border-box",
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: 10,
                              color: "rgb(68, 68, 68)",
                              whiteSpace: "nowrap",
                              direction: "ltr",
                              textAlign: "right",
                              verticalAlign: "middle",
                              display: "inline-block",
                            }}
                          >
                            <a
                              target="_blank"
                              rel="noopener"
                              title="Report errors in the road map or imagery to Google"
                              href="https://www.google.com/maps/@34.05,-78.72,5z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                                fontSize: 10,
                                color: "rgb(68, 68, 68)",
                                textDecoration: "none",
                                position: "relative",
                              }}
                            >
                              Report a map error
                            </a>
                          </div>
                        </div>
                        <div
                          className="gmnoprint gm-bundled-control"
                          draggable="false"
                          controlwidth={40}
                          controlheight={81}
                          style={{
                            margin: 10,
                            userSelect: "none",
                            position: "absolute",
                            left: 0,
                            top: 0,
                          }}
                        >
                          <div
                            className="gmnoprint"
                            controlwidth={40}
                            controlheight={81}
                            style={{ position: "absolute", left: 0, top: 0 }}
                          >
                            <div
                              draggable="false"
                              style={{
                                userSelect: "none",
                                boxShadow:
                                  "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                borderRadius: 2,
                                cursor: "pointer",
                                backgroundColor: "rgb(255, 255, 255)",
                                width: 40,
                                height: 81,
                              }}
                            >
                              <button
                                draggable="false"
                                title="Zoom in"
                                aria-label="Zoom in"
                                type="button"
                                className="gm-control-active"
                                style={{
                                  background: "none",
                                  display: "block",
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  position: "relative",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  overflow: "hidden",
                                  width: 40,
                                  height: 40,
                                  top: 0,
                                  left: 0,
                                }}
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                              </button>
                              <div
                                style={{
                                  position: "relative",
                                  overflow: "hidden",
                                  width: 30,
                                  height: 1,
                                  margin: "0px 5px",
                                  backgroundColor: "rgb(230, 230, 230)",
                                  top: 0,
                                }}
                              ></div>
                              <button
                                draggable="false"
                                title="Zoom out"
                                aria-label="Zoom out"
                                type="button"
                                className="gm-control-active"
                                style={{
                                  background: "none",
                                  display: "block",
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  position: "relative",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  overflow: "hidden",
                                  width: 40,
                                  height: 40,
                                  top: 0,
                                  left: 0,
                                }}
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                          draggable="false"
                          controlwidth={0}
                          controlheight={0}
                          style={{
                            margin: 10,
                            userSelect: "none",
                            position: "absolute",
                            display: "none",
                            bottom: 14,
                            right: 0,
                          }}
                        >
                          <div
                            className="gmnoprint"
                            controlwidth={40}
                            controlheight={40}
                            style={{ display: "none", position: "absolute" }}
                          >
                            <div style={{ width: 40, height: 40 }}>
                              <button
                                draggable="false"
                                title="Rotate map 90 degrees"
                                aria-label="Rotate map 90 degrees"
                                type="button"
                                className="gm-control-active"
                                style={{
                                  background: "none rgb(255, 255, 255)",
                                  display: "none",
                                  border: 0,
                                  margin: "0px 0px 32px",
                                  padding: 0,
                                  position: "relative",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  width: 40,
                                  height: 40,
                                  top: 0,
                                  left: 0,
                                  overflow: "hidden",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                  borderRadius: 2,
                                }}
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ height: 18, width: 18 }}
                                />
                              </button>
                              <button
                                draggable="false"
                                title="Tilt map"
                                aria-label="Tilt map"
                                type="button"
                                className="gm-tilt gm-control-active"
                                style={{
                                  background: "none rgb(255, 255, 255)",
                                  display: "block",
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  position: "relative",
                                  cursor: "pointer",
                                  userSelect: "none",
                                  width: 40,
                                  height: 40,
                                  top: 0,
                                  left: 0,
                                  overflow: "hidden",
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                  borderRadius: 2,
                                }}
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2021%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2021%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ width: 18 }}
                                />
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2021%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                  style={{ width: 18 }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          draggable="false"
                          className="gm-style-cc"
                          style={{
                            position: "absolute",
                            userSelect: "none",
                            height: 14,
                            lineHeight: 14,
                            right: 71,
                            bottom: 0,
                          }}
                        >
                          <div
                            style={{
                              opacity: "0.7",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                            }}
                          >
                            <div style={{ width: 1 }} />
                            <div
                              style={{
                                backgroundColor: "rgb(245, 245, 245)",
                                width: "auto",
                                height: "100%",
                                marginLeft: 1,
                              }}
                            ></div>
                          </div>
                          <div
                            style={{
                              position: "relative",
                              paddingRight: 6,
                              paddingLeft: 6,
                              boxSizing: "border-box",
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: 10,
                              color: "rgb(68, 68, 68)",
                              whiteSpace: "nowrap",
                              direction: "ltr",
                              textAlign: "right",
                              verticalAlign: "middle",
                              display: "inline-block",
                            }}
                          >
                            <span>200 km&nbsp;</span>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                height: 8,
                                bottom: "-1px",
                                width: 50,
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: 4,
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                }}
                              ></div>
                              <div
                                style={{
                                  width: 4,
                                  height: 8,
                                  left: 0,
                                  top: 0,
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                              ></div>
                              <div
                                style={{
                                  width: 4,
                                  height: 8,
                                  position: "absolute",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  right: 0,
                                  bottom: 0,
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  backgroundColor: "rgb(102, 102, 102)",
                                  height: 2,
                                  left: 1,
                                  bottom: 1,
                                  right: 1,
                                }}
                              ></div>
                              <div
                                style={{
                                  position: "absolute",
                                  width: 2,
                                  height: 6,
                                  left: 1,
                                  top: 1,
                                  backgroundColor: "rgb(102, 102, 102)",
                                }}
                              ></div>
                              <div
                                style={{
                                  width: 2,
                                  height: 6,
                                  position: "absolute",
                                  backgroundColor: "rgb(102, 102, 102)",
                                  bottom: 1,
                                  right: 1,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        fontWeight: 500,
                        fontFamily: "Roboto, sans-serif",
                        padding: "15px 25px",
                        boxSizing: "border-box",
                        top: 5,
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        borderRadius: 5,
                        left: "50%",
                        maxWidth: 375,
                        position: "absolute",
                        transform: "translateX(-50%)",
                        width: "calc(100% - 10px)",
                        zIndex: 1,
                      }}
                    >
                      <div>
                        <img
                          alt
                          src="http://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                          draggable="false"
                          style={{
                            padding: 0,
                            margin: 0,
                            border: 0,
                            height: 17,
                            verticalAlign: "middle",
                            width: 52,
                            userSelect: "none",
                          }}
                        />
                      </div>
                      <div style={{ lineHeight: 20, margin: "15px 0px" }}>
                        <span
                          style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 14 }}
                        >
                          This page can't load Google Maps correctly.
                        </span>
                      </div>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                lineHeight: 16,
                                verticalAlign: "middle",
                              }}
                            >
                              <a
                                href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors"
                                target="_blank"
                                rel="noopener"
                                style={{
                                  color: "rgba(0, 0, 0, 0.54)",
                                  fontSize: 12,
                                }}
                              >
                                Do you own this website?
                              </a>
                            </td>
                            <td style={{ textAlign: "right" }}>
                              <button className="dismissButton">OK</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End PAge Content */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Right sidebar */}
            {/* ============================================================== */}
            {/* .right-sidebar */}
            {/* ============================================================== */}
            {/* End Right sidebar */}
            {/* ============================================================== */}
          </div>

          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* footer */}
          {/* ============================================================== */}
          <Footer />
          {/* ============================================================== */}
          {/* End footer */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        {/* ============================================================== */}
      </div>
    </div>
  );
}
