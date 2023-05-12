import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import PageBreadCrump from "./layout/PageBreadCrump";

export default function FontAwesome() {
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
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Solid Icons</h4>
                    <h6 className="card-subtitle">
                      use the icon by just put class
                      <code>fas fa-address-book</code> in i tag{" "}
                    </h6>
                    <section>
                      <div className="icon-list-demo row">
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-address-book" /> fas
                          fa-address-book
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-address-card" /> fas
                          fa-address-card
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-adjust" /> fas fa-adjust
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-align-center" /> fas
                          fa-align-center
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-align-justify" /> fas
                          fa-align-justify
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-align-left" />
                          fas fa-align-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-align-right" /> fas
                          fa-align-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-allergies" />
                          fas fa-allergies
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ambulance" />
                          fas fa-ambulance
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-american-sign-language-interpreting" />{" "}
                          fas fa-american-sign-language-interpreting
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-anchor" />
                          fas fa-anchor
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-double-down" /> fas
                          fa-angle-double-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-double-left" /> fas
                          fa-angle-double-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-double-right" /> fas
                          fa-angle-double-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-double-up" /> fas
                          fa-angle-double-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-down" />
                          fas fa-angle-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-left" />
                          fas fa-angle-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-right" /> fas
                          fa-angle-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-angle-up" />
                          fas fa-angle-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-archive" />
                          fas fa-archive
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-alt-circle-down" /> fas
                          fa-arrow-alt-circle-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-alt-circle-left" /> fas
                          fa-arrow-alt-circle-left
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-alt-circle-right" />
                          fas fa-arrow-alt-circle-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-alt-circle-up" /> fas
                          fa-arrow-alt-circle-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-circle-down" /> fas
                          fa-arrow-circle-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-circle-left" /> fas
                          fa-arrow-circle-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-circle-right" /> fas
                          fa-arrow-circle-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-circle-up" /> fas
                          fa-arrow-circle-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-down" />
                          fas fa-arrow-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-left" />
                          fas fa-arrow-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-right" /> fas
                          fa-arrow-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrow-up" />
                          fas fa-arrow-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrows-alt" />
                          fas fa-arrows-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrows-alt-h" /> fas
                          fa-arrows-alt-h
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-arrows-alt-v" /> fas
                          fa-arrows-alt-v
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-assistive-listening-systems" />{" "}
                          fas fa-assistive-listening-systems
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-asterisk" />
                          fas fa-asterisk
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-at" /> fas fa-at
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-audio-description" /> fas
                          fa-audio-tion
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-backward" />
                          fas fa-backward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-balance-scale" /> fas
                          fa-balance-scale
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ban" /> fas fa-ban
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-band-aid" />
                          fas fa-band-aid
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-barcode" />
                          fas fa-barcode
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bars" /> fas fa-bars
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-baseball-ball" /> fas
                          fa-baseball-ball
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-basketball-ball" /> fas
                          fa-basketba
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bath" /> fas fa-bath
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-battery-empty" /> fas
                          fa-battery-empty
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-battery-full" /> fas
                          fa-battery-full
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-battery-half" /> fas
                          fa-battery-half
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-battery-quarter" /> fas
                          fa-battery-quarter
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-battery-three-quarters" />
                          fas fa-battery-three-quarters
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bed" /> fas fa-bed
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-beer" /> fas fa-beer
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bell" /> fas fa-bell
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bell-slash" />
                          fas fa-bell-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bicycle" />
                          fas fa-bicycle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-binoculars" />
                          fas fa-binoculars
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-birthday-cake" /> fas
                          fa-birthday-cake
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-blind" /> fas fa-blind
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bold" /> fas fa-bold
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bolt" /> fas fa-bolt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bomb" /> fas fa-bomb
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-book" /> fas fa-book
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bookmark" />
                          fas fa-bookmark
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bowling-ball" /> fas
                          fa-bowling-ball
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-box" /> fas fa-box
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-box-open" />
                          fas fa-box-open
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-boxes" /> fas fa-boxes
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-braille" />
                          fas fa-braille
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-briefcase" />
                          fas fa-briefcase
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-briefcase-medical" /> fas
                          fa-briefcical
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bug" /> fas fa-bug
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-building" />
                          fas fa-building
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bullhorn" />
                          fas fa-bullhorn
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bullseye" />
                          fas fa-bullseye
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-burn" /> fas fa-burn
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-bus" /> fas fa-bus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calculator" />
                          fas fa-calculator
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar" />
                          fas fa-calendar
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar-alt" /> fas
                          fa-calendar-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar-check" /> fas
                          fa-calendar-check
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar-minus" /> fas
                          fa-calendar-minus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar-plus" /> fas
                          fa-calendar-plus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-calendar-times" /> fas
                          fa-calendar-times
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-camera" /> fas fa-camera
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-camera-retro" /> fas
                          fa-camera-retro
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-capsules" />
                          fas fa-capsules
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-car" /> fas fa-car
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-down" />
                          fas fa-caret-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-left" />
                          fas fa-caret-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-right" /> fas
                          fa-caret-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-square-down" /> fas
                          fa-caret-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-square-left" /> fas
                          fa-caret-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-square-right" /> fas
                          fa-caret-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-square-up" /> fas
                          fa-caret-sq
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-caret-up" />
                          fas fa-caret-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cart-arrow-down" /> fas
                          fa-cart-arr
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cart-plus" />
                          fas fa-cart-plus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-certificate" /> fas
                          fa-certificate
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chart-area" />
                          fas fa-chart-area
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chart-bar" />
                          fas fa-chart-bar
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chart-line" />
                          fas fa-chart-line
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chart-pie" />
                          fas fa-chart-pie
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-check" /> fas fa-check
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-check-circle" /> fas
                          fa-check-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-check-square" /> fas
                          fa-check-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess" /> fas fa-chess
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-bishop" /> fas
                          fa-chess-bishop
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-board" /> fas
                          fa-chess-board
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-king" />
                          fas fa-chess-king
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-knight" /> fas
                          fa-chess-knight
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-pawn" />
                          fas fa-chess-pawn
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-queen" /> fas
                          fa-chess-queen
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chess-rook" />
                          fas fa-chess-rook
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-circle-down" /> fas
                          fa-chevron-circle-down
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-chevron-circle-left" /> fas
                          fa-chevron-circle-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-circle-right" /> fas
                          fa-chevron-circle-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-circle-up" /> fas
                          fa-chevroe-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-down" /> fas
                          fa-chevron-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-left" /> fas
                          fa-chevron-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-right" /> fas
                          fa-chevron-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-chevron-up" />
                          fas fa-chevron-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-child" /> fas fa-child
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-circle" /> fas fa-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-circle-notch" /> fas
                          fa-circle-notch
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-clipboard" />
                          fas fa-clipboard
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-clipboard-check" /> fas
                          fa-clipboard-check
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-clipboard-list" /> fas
                          fa-clipboard-list
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-clock" /> fas fa-clock
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-clone" /> fas fa-clone
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-closed-captioning" /> fas
                          fa-closedning
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cloud" /> fas fa-cloud
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cloud-download-alt" /> fas
                          fa-cloudad-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cloud-upload-alt" /> fas
                          fa-cloud-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-code" /> fas fa-code
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-code-branch" /> fas
                          fa-code-branch
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-coffee" /> fas fa-coffee
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cog" /> fas fa-cog
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cogs" /> fas fa-cogs
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-columns" />
                          fas fa-columns
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-comment" />
                          fas fa-comment
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-comment-alt" /> fas
                          fa-comment-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-comment-dots" /> fas
                          fa-comment-dots
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-comment-slash" /> fas
                          fa-comment-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-comments" />
                          fas fa-comments
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-compass" />
                          fas fa-compass
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-compress" />
                          fas fa-compress
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-copy" /> fas fa-copy
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-copyright" />
                          fas fa-copyright
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-couch" /> fas fa-couch
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-credit-card" /> fas
                          fa-credit-card
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-crop" /> fas fa-crop
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-crosshairs" />
                          fas fa-crosshairs
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cube" /> fas fa-cube
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cubes" /> fas fa-cubes
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-cut" /> fas fa-cut
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-database" />
                          fas fa-database
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-deaf" /> fas fa-deaf
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-desktop" />
                          fas fa-desktop
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-diagnoses" />
                          fas fa-diagnoses
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dna" /> fas fa-dna
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dollar-sign" /> fas
                          fa-dollar-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dolly" /> fas fa-dolly
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dolly-flatbed" /> fas
                          fa-dolly-flatbed
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-donate" /> fas fa-donate
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dot-circle" />
                          fas fa-dot-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-dove" /> fas fa-dove
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-download" />
                          fas fa-download
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-edit" /> fas fa-edit
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-eject" /> fas fa-eject
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ellipsis-h" />
                          fas fa-ellipsis-h
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ellipsis-v" />
                          fas fa-ellipsis-v
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-envelope" />
                          fas fa-envelope
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-envelope-open" /> fas
                          fa-envelope-open
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-envelope-square" /> fas
                          fa-envelope-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-eraser" /> fas fa-eraser
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-euro-sign" />
                          fas fa-euro-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-exchange-alt" /> fas
                          fa-exchange-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-exclamation" /> fas
                          fa-exclamation
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-exclamation-circle" /> fas
                          fa-exclamation-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-exclamation-triangle" /> fas
                          fa-exclamation-triangle
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-expand" />
                          fas fa-expand
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-expand-arrows-alt" /> fas
                          fa-expand-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-external-link-alt" /> fas
                          fa-external-link-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-external-link-square-alt" />
                          fas fa-external-link-square-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-eye" /> fas fa-eye
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-eye-dropper" /> fas
                          fa-eye-dropper
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-eye-slash" />
                          fas fa-eye-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fast-backward" /> fas
                          fa-fast-backward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fast-forward" /> fas
                          fa-fast-forward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fax" /> fas fa-fax
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-female" /> fas fa-female
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fighter-jet" /> fas
                          fa-fighter-jet
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file" /> fas fa-file
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-alt" />
                          fas fa-file-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-archive" /> fas
                          fa-file-archive
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-audio" />
                          fas fa-file-audio
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-code" />
                          fas fa-file-code
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-excel" />
                          fas fa-file-excel
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-image" />
                          fas fa-file-image
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-medical" /> fas
                          fa-file-medical
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-medical-alt" /> fas
                          fa-file-medical-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-pdf" />
                          fas fa-file-pdf
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-powerpoint" /> fas
                          fa-file-pow
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-video" />
                          fas fa-file-video
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-file-word" />
                          fas fa-file-word
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-film" /> fas fa-film
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-filter" /> fas fa-filter
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fire" /> fas fa-fire
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-fire-extinguisher" /> fas
                          fa-fire-extinguisher
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-first-aid" />
                          fas fa-first-aid
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-flag" /> fas fa-flag
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-flag-checkered" /> fas
                          fa-flag-checkered
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-flask" /> fas fa-flask
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-folder" /> fas fa-folder
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-folder-open" /> fas
                          fa-folder-open
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-font" /> fas fa-font
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-football-ball" /> fas
                          fa-football-ball
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-forward" />
                          fas fa-forward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-frown" /> fas fa-frown
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-futbol" /> fas fa-futbol
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-gamepad" />
                          fas fa-gamepad
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-gavel" /> fas fa-gavel
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-gem" /> fas fa-gem
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-genderless" />
                          fas fa-genderless
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-gift" /> fas fa-gift
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-glass-martini" /> fas
                          fa-glass-martini
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-globe" /> fas fa-globe
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-golf-ball" />
                          fas fa-golf-ball
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-graduation-cap" /> fas
                          fa-graduation-cap
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-h-square" />
                          fas fa-h-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-holding" /> fas
                          fa-hand-holding
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-holding-heart" /> fas
                          fa-hand-holding-heart
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-holding-usd" /> fas
                          fa-hand-holding-usd
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-lizard" /> fas
                          fa-hand-lizard
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-paper" />
                          fas fa-hand-paper
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-peace" />
                          fas fa-hand-peace
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-point-down" /> fas
                          fa-hand-point-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-point-left" /> fas
                          fa-hand-point-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-point-right" /> fas
                          fa-hand-point-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-point-up" /> fas
                          fa-hand-point-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-pointer" /> fas
                          fa-hand-pointer
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-rock" />
                          fas fa-hand-rock
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-scissors" /> fas
                          fa-hand-scissors
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hand-spock" />
                          fas fa-hand-spock
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hands" /> fas fa-hands
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hands-helping" /> fas
                          fa-hands-helping
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-handshake" />
                          fas fa-handshake
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hashtag" />
                          fas fa-hashtag
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hdd" /> fas fa-hdd
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-heading" />
                          fas fa-heading
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-headphones" />
                          fas fa-headphones
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-heart" /> fas fa-heart
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-heartbeat" />
                          fas fa-heartbeat
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-history" />
                          fas fa-history{" "}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hockey-puck" /> fas
                          fa-hockey-puck
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-home" /> fas fa-home
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hospital" />
                          fas fa-hospital
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hospital-alt" /> fas
                          fa-hospital-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hospital-symbol" /> fas
                          fa-hospital
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hourglass" />
                          fas fa-hourglass
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hourglass-end" /> fas
                          fa-hourglass-end
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hourglass-half" /> fas
                          fa-hourglass-half
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-hourglass-start" /> fas
                          fa-hourglass-start
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-i-cursor" />
                          fas fa-i-cursor
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-id-badge" />
                          fas fa-id-badge
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-id-card" />
                          fas fa-id-card
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-id-card-alt" /> fas
                          fa-id-card-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-image" /> fas fa-image
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-images" /> fas fa-images
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-inbox" /> fas fa-inbox
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-indent" /> fas fa-indent
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-industry" />
                          fas fa-industry
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-info" /> fas fa-info
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-info-circle" /> fas
                          fa-info-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-italic" /> fas fa-italic
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-key" /> fas fa-key
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-keyboard" />
                          fas fa-keyboard
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-language" />
                          fas fa-language
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-laptop" /> fas fa-laptop
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-leaf" /> fas fa-leaf
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-lemon" /> fas fa-lemon
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-level-down-alt" /> fas
                          fa-level-down-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-level-up-alt" /> fas
                          fa-level-up-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-life-ring" />
                          fas fa-life-ring
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-lightbulb" />
                          fas fa-lightbulb
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-link" /> fas fa-link
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-lira-sign" />
                          fas fa-lira-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-list" /> fas fa-list
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-list-alt" />
                          fas fa-list-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-list-ol" />
                          fas fa-list-ol
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-list-ul" />
                          fas fa-list-ul
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-location-arrow" /> fas
                          fa-location-arrow
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-lock" /> fas fa-lock
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-lock-open" />
                          fas fa-lock-open
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-long-arrow-alt-down" /> fas
                          fa-long-arrow-alt-down
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-long-arrow-alt-left" /> fas
                          fa-long-arrow-alt-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-long-arrow-alt-right" /> fas
                          fa-long-arrow-alt-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-long-arrow-alt-up" /> fas
                          fa-long-arrow-alt-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-low-vision" />
                          fas fa-low-vision
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-magic" /> fas fa-magic
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-magnet" /> fas fa-magnet
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-male" /> fas fa-male
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-map" /> fas fa-map
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-map-marker" />
                          fas fa-map-marker
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-map-marker-alt" /> fas
                          fa-map-marker-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-map-pin" />
                          fas fa-map-pin
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-map-signs" />
                          fas fa-map-signs
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mars" /> fas fa-mars
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mars-double" /> fas
                          fa-mars-double
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mars-stroke" /> fas
                          fa-mars-stroke
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mars-stroke-h" /> fas
                          fa-mars-stroke-h
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mars-stroke-v" /> fas
                          fa-mars-stroke-v
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-medkit" /> fas fa-medkit
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-meh" /> fas fa-meh
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mercury" />
                          fas fa-mercury
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-microchip" />
                          fas fa-microchip
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-microphone" />
                          fas fa-microphone
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-microphone-slash" /> fas
                          fa-microphone-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-minus" /> fas fa-minus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-minus-circle" /> fas
                          fa-minus-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-minus-square" /> fas
                          fa-minus-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mobile" /> fas fa-mobile
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mobile-alt" />
                          fas fa-mobile-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-money-bill-alt" /> fas
                          money-bill-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-moon" /> fas fa-moon
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-motorcycle" />
                          fas fa-motorcycle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-mouse-pointer" /> fas
                          fa-mouse-pointer
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-music" /> fas fa-music
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-neuter" /> fas fa-neuter
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-newspaper" />
                          fas fa-newspaper
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-notes-medical" /> fas
                          fa-notes-medical
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-object-group" /> fas
                          fa-object-group
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-object-ungroup" /> fas
                          fa-object-ungroup
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-outdent" />
                          fas fa-outdent
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paint-brush" /> fas
                          fa-paint-brush
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pallet" /> fas fa-pallet
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paper-plane" /> fas
                          fa-paper-plane
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paperclip" />
                          fas fa-paperclip
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-parachute-box" /> fas
                          fa-parachute-box
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paragraph" />
                          fas fa-paragraph
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paste" /> fas fa-paste
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pause" /> fas fa-pause
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pause-circle" /> fas pause-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-paw" /> fas fa-fa-paw
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pen-square" />
                          fas fa-pen-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pencil-alt" />
                          fas fa-pencil-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-people-carry" /> fas
                          fa-people-carry
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-percent" />
                          fas fa-percent
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-phone" /> fas fa-phone
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-phone-slash" /> fas
                          fa-phone-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-phone-square" /> fas
                          fa-phone-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-phone-volume" /> fas
                          fa-phone-volume
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-piggy-bank" />
                          fas fa-piggy-bank
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pills" /> fas fa-pills
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-plane" /> fas fa-plane
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-play" /> fas fa-play
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-play-circle" /> fas
                          fa-play-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-plug" /> fas fa-plug
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-plus" /> fas fa-plus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-plus-circle" /> fas
                          fa-plus-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-plus-square" /> fas
                          fa-plus-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-podcast" />
                          fas fa-podcast
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-poo" /> fas fa-poo
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-pound-sign" />
                          fas fa-pound-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-power-off" />
                          fas fa-power-off
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-prescription-bottle" /> fas
                          fa-prescription-bottle
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-prescription-bottle-alt" />
                          fas fa-prescription-bottle-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-print" /> fas fa-print
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-procedures" />
                          fas fa-procedures
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-puzzle-piece" /> fas
                          fa-puzzle-piece
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-qrcode" /> fas fa-qrcode
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-question" />
                          fas fa-question
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-question-circle" /> fas
                          fa-question
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-quidditch" />
                          fas fa-quidditch
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-quote-left" />
                          fas fa-quote-left
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-quote-right" /> fas
                          fa-quote-right
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-random" /> fas fa-random
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-recycle" />
                          fas fa-recycle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-redo" /> fas fa-redo
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-redo-alt" />
                          fas fa-redo-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-registered" />
                          fas fa-registered
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-reply" /> fas fa-reply
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-reply-all" />
                          fas fa-reply-all
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-retweet" />
                          fas fa-retweet
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ribbon" /> fas fa-ribbon
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-road" /> fas fa-road
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-rocket" /> fas fa-rocket
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-rss" /> fas fa-rss
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-rss-square" />
                          fas fa-rss-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ruble-sign" />
                          fas fa-ruble-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-rupee-sign" />
                          fas fa-rupee-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-save" /> fas fa-save
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-search" /> fas fa-search
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-search-minus" /> fas
                          fa-search-minus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-search-plus" /> fas
                          fa-search-plus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-seedling" />
                          fas fa-seedling
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-server" /> fas fa-server
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-share" /> fas fa-share
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-share-alt" />
                          fas fa-share-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-share-alt-square" /> fas
                          fa-share-alt-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-share-square" /> fas
                          fa-share-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shekel-sign" /> fas
                          fa-shekel-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shield-alt" />
                          fas fa-shield-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ship" /> fas fa-ship
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shipping-fast" /> fas
                          fa-shipping-fast
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shopping-bag" /> fas
                          fa-shopping-bag
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shopping-basket" /> fas
                          fa-shopping-basket
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shopping-cart" /> fas
                          fa-shopping-cart
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-shower" /> fas fa-shower
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sign" /> fas fa-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sign-in-alt" /> fas
                          fa-sign-in-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sign-language" /> fas
                          fa-sign-language
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sign-out-alt" /> fas
                          fa-sign-out-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-signal" /> fas fa-signal
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sitemap" />
                          fas fa-sitemap
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sliders-h" />
                          fas fa-sliders-h
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-smile" /> fas fa-smile
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-smoking" />
                          fas fa-smoking
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-snowflake" />
                          fas fa-snowflake
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort" /> fas fa-sort
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-alpha-down" /> fas
                          fa-alpha-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-alpha-up" /> fas
                          fa-sort-alpha-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-amount-down" /> fas
                          fa-sort-amount-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-amount-up" /> fas
                          fa-sort-amount-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-down" />
                          fas fa-sort-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-numeric-down" /> fas
                          fa-sort-numeric-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-numeric-up" /> fas
                          fa-sort-numeric-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sort-up" />
                          fas fa-sort-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-space-shuttle" /> fas
                          fa-space-shuttle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-spinner" />
                          fas fa-spinner
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-square" /> fas fa-square
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-square-full" /> fas
                          fa-square-full
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-star" /> fas fa-star
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-star-half" />
                          fas fa-star-half
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-step-backward" /> fas
                          fa-step-backward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-step-forward" /> fas
                          fa-step-forward
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-stethoscope" /> fas
                          fa-stethoscope
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sticky-note" /> fas
                          fa-sticky-note
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-stop" /> fas fa-stop
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-stop-circle" /> fas
                          fa-stop-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-stopwatch" />
                          fas fa-stopwatch
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-street-view" /> fas
                          fa-street-view
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-strikethrough" /> fas
                          fa-strikethrough
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-subscript" />
                          fas fa-subscript
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-subway" /> fas fa-subway
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-suitcase" />
                          fas fa-suitcase
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sun" /> fas fa-sun
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-superscript" /> fas
                          fa-superscript
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sync" /> fas fa-sync
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-sync-alt" />
                          fas fa-sync-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-syringe" />
                          fas fa-syringe
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-table" /> fas fa-table
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-table-tennis" /> fas
                          fa-table-tennis
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tablet" /> fas fa-tablet
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tablet-alt" />
                          fas fa-tablet-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tablets" />
                          fas fa-tablets
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tachometer-alt" /> fas
                          fa-tachometer-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tag" /> fas fa-tag
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tags" /> fas fa-tags
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tape" /> fas fa-tape
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tasks" /> fas fa-tasks
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-taxi" /> fas fa-taxi
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-terminal" />
                          fas fa-terminal
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-text-height" /> fas
                          fa-text-height
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-text-width" />
                          fas fa-text-width
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-th" /> fas fa-th
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-th-large" />
                          fas fa-th-large
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-th-list" />
                          fas fa-th-list
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thermometer" /> fas
                          fa-thermometer
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thermometer-empty" /> fas
                          fa-thermometer-empty
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thermometer-full" /> fas
                          fa-thermometer-full
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thermometer-half" /> fas
                          fa-thermometer-half
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thermometer-quarter" /> fas
                          fa-thermometer-quarter
                        </div>
                        <div className=" col-sm-6 col-md-6 col-lg-3 f-icon ">
                          <i className="fas fa-thermometer-three-quarters" />{" "}
                          fas fa-thermometer-three-quarters
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thumbs-down" /> fas
                          fa-thumbs-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thumbs-up" />
                          fas fa-thumbs-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-thumbtack" />
                          fas fa-thumbtack
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-ticket-alt" />
                          fas fa-ticket-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-times" /> fas fa-times
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-times-circle" /> fas
                          fa-times-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tint" /> fas fa-tint
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-toggle-off" />
                          fas fa-toggle-off
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-toggle-on" />
                          fas fa-toggle-on
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-trademark" />
                          fas fa-trademark
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-train" /> fas fa-train
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-transgender" /> fas
                          fa-transgender
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-transgender-alt" /> fas
                          fa-transgen
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-trash" /> fas fa-trash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-trash-alt" />
                          fas fa-trash-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tree" /> fas fa-tree
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-trophy" /> fas fa-trophy
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-truck" /> fas fa-truck
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-truck-loading" /> fas
                          fa-truck-loading
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-truck-moving" /> fas
                          fa-truck-moving
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tty" /> fas fa-tty
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-tv" /> fas fa-tv
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-umbrella" />
                          fas fa-umbrella
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-underline" />
                          fas fa-underline
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-undo" /> fas fa-undo
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-undo-alt" />
                          fas fa-undo-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-universal-access" /> fas
                          fa-universal-access
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-university" />
                          fas fa-university
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-unlink" /> fas fa-unlink
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-unlock" /> fas fa-unlock
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-unlock-alt" />
                          fas fa-unlock-alt
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-upload" /> fas fa-upload
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user" /> fas fa-user
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user-circle" /> fas
                          fa-user-circle
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user-md" />
                          fas fa-user-md
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user-plus" />
                          fas fa-user-plus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user-secret" /> fas
                          fa-user-secret
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-user-times" />
                          fas fa-user-times
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-users" /> fas fa-users
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-utensil-spoon" /> fas
                          fa-utensil-spoon
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-utensils" />
                          fas fa-utensils
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-venus" /> fas fa-venus
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-venus-double" /> fas
                          fa-venus-double
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-venus-mars" />
                          fas fa-venus-mars
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-vial" /> fas fa-vial
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-vials" /> fas fa-vials
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-video" /> fas fa-video
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-video-slash" /> fas
                          fa-video-slash
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-volleyball-ball" /> fas
                          fa-volleyba
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-volume-down" /> fas
                          fa-volume-down
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-volume-off" />
                          fas fa-volume-off
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-volume-up" />
                          fas fa-volume-up
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-warehouse" />
                          fas fa-warehouse
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-weight" /> fas fa-weight
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-wheelchair" />
                          fas fa-wheelchair
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-wifi" /> fas fa-wifi
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-window-close" /> fas
                          fa-window-close
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-window-maximize" /> fas
                          fa-window-maximize
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-window-minimize" /> fas
                          fa-window-minimize
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-window-restore" /> fas
                          fa-window-restore
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-wine-glass" />
                          fas fa-wine-glass
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-won-sign" />
                          fas fa-won-sign
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-wrench" /> fas fa-wrench
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-x-ray" /> fas fa-x-ray
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                          <i className="fas fa-yen-sign" />
                          fas fa-yen-sign
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Regular Icons</h4>
                    <h6 className="card-subtitle">
                      use the icon by just put class
                      <code>far fa-address-card</code> in i tag{" "}
                    </h6>
                    <div className="icon-list-demo row">
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-address-book" />
                        <span> far fa-address-book</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-address-card" />
                        <span> far fa-address-card</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-arrow-alt-circle-down" />
                        <span>far fa-arrow-alt-circle-down</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-arrow-alt-circle-left" />
                        <span>far fa-arrow-alt-circle-left</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-arrow-alt-circle-right" />
                        <span>far fa-arrow-alt-circle-right</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-arrow-alt-circle-up" />
                        <span> far fa-arrow-alt-circle-up</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-bell" />
                        <span> far fa-bell</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-bell-slash" />
                        <span> far fa-bell-slash</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-bookmark" />
                        <span>far fa-bookmark</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-building" />
                        <span>far fa-building</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar" />
                        <span>far fa-calendar</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar-alt" />
                        <span> far fa-calendar-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar-check" />
                        <span> far fa-calendar-check</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar-minus" />
                        <span> far fa-calendar-minus</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar-plus" />
                        <span> far fa-calendar-plus</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-calendar-times" />
                        <span> far fa-calendar-times</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-caret-square-down" />
                        <span> far fa-caret-square-down</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-caret-square-left" />
                        <span> far fa-caret-square-left</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-caret-square-right" />
                        <span> far fa-caret-square-right</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-caret-square-up" />
                        <span> far fa-caret-square-up</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-chart-bar" />
                        <span> far fa-chart-bar</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-check-circle" />
                        <span> far fa-check-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-check-square" />
                        <span> far fa-check-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-circle" />
                        <span>far fa-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-clipboard" />
                        <span> far fa-clipboard</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-clock" />
                        <span>far fa-clock</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-clone" />
                        <span>far fa-clone</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-closed-captioning" />
                        <span> far fa-closed-captioning</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-comment" />
                        <span>far fa-comment</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-comment-alt" />
                        <span> far fa-comment-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-comments" />
                        <span>far fa-comments</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-compass" />
                        <span>far fa-compass</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-copy" />
                        <span> far fa-copy</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-copyright" />
                        <span> far fa-copyright</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-credit-card" />
                        <span> far fa-credit-card</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-dot-circle" />
                        <span> far fa-dot-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-edit" />
                        <span> far fa-edit</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-envelope" />
                        <span>far fa-envelope</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-envelope-open" />
                        <span> far fa-envelope-open</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-eye-slash" />
                        <span> far fa-eye-slash</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file" />
                        <span> far fa-file</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-alt" />
                        <span>far fa-file-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-archive" />
                        <span> far fa-file-archive</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-audio" />
                        <span> far fa-file-audio</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-code" />
                        <span> far fa-file-code</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-excel" />
                        <span> far fa-file-excel</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-image" />
                        <span> far fa-file-image</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-pdf" />
                        <span>far fa-file-pdf</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-powerpoint" />
                        <span> far fa-file-powerpoint</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-video" />
                        <span> far fa-file-video</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-file-word" />
                        <span> far fa-file-word</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-flag" />
                        <span> far fa-flag</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-folder" />
                        <span>far fa-folder</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-folder-open" />
                        <span> far fa-folder-open</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-frown" />
                        <span>far fa-frown</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-futbol" />
                        <span>far fa-futbol</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-gem" />
                        <span> far fa-gem</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-lizard" />
                        <span> far fa-hand-lizard</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-paper" />
                        <span> far fa-hand-paper</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-peace" />
                        <span> far fa-hand-peace</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-point-down" />
                        <span> far fa-hand-point-down</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-point-left" />
                        <span> far fa-hand-point-left</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-point-right" />
                        <span> far fa-hand-point-right</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-point-up" />
                        <span> far fa-hand-point-up</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-pointer" />
                        <span> far fa-hand-pointer</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-rock" />
                        <span> far fa-hand-rock</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-scissors" />
                        <span> far fa-hand-scissors</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hand-spock" />
                        <span> far fa-hand-spock</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-handshake" />
                        <span> far fa-handshake</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hdd" />
                        <span> far fa-hdd</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-heart" />
                        <span>far fa-heart</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hospital" />
                        <span>far fa-hospital</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-hourglass" />
                        <span> far fa-hourglass</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-id-badge" />
                        <span>far fa-id-badge</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-id-card" />
                        <span>far fa-id-card</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-image" />
                        <span>far fa-image</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-images" />
                        <span>far fa-images</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-keyboard" />
                        <span>far fa-keyboard</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-lemon" />
                        <span>far fa-lemon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-life-ring" />
                        <span> far fa-life-ring</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-lightbulb" />
                        <span> far fa-lightbulb</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-list-alt" />
                        <span>far fa-list-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-map" />
                        <span> far fa-map</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-meh" />
                        <span> far fa-meh</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-minus-square" />
                        <span> far fa-minus-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-money-bill-alt" />
                        <span> far fa-money-bill-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-moon" />
                        <span> far fa-moon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-newspaper" />
                        <span> far fa-newspaper</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-object-group" />
                        <span> far fa-object-group</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-object-ungroup" />
                        <span> far fa-object-ungroup</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-paper-plane" />
                        <span> far fa-paper-plane</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-pause-circle" />
                        <span> far fa-pause-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-play-circle" />
                        <span> far fa-play-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-plus-square" />
                        <span> far fa-plus-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-question-circle" />
                        <span> far fa-question-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-registered" />
                        <span> far fa-registered</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-save" />
                        <span> far fa-save</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-share-square" />
                        <span> far fa-share-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-smile" />
                        <span>far fa-smile</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-snowflake" />
                        <span> far fa-snowflake</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-square" />
                        <span>far fa-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-star" />
                        <span> far fa-star</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-star-half" />
                        <span> far fa-star-half</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-sticky-note" />
                        <span> far fa-sticky-note</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-stop-circle" />
                        <span> far fa-stop-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-sun" />
                        <span> far fa-sun</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-thumbs-down" />
                        <span> far fa-thumbs-down</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-thumbs-up" />
                        <span> far fa-thumbs-up</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-times-circle" />
                        <span> far fa-times-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-trash-alt" />
                        <span> far fa-trash-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-user" />
                        <span> far fa-user</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-user-circle" />
                        <span> far fa-user-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-window-close" />
                        <span> far fa-window-close</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-window-maximize" />
                        <span> far fa-window-maximize</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-window-minimize" />
                        <span> far fa-window-minimize</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="far fa-window-restore" />
                        <span> far fa-window-restore</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Brand Icons</h4>
                    <h6 className="card-subtitle">
                      use the icon by just put class
                      <code>fab fa-accessible-icon</code> in i tag{" "}
                    </h6>
                    <div className="clearfix icon-list-demo row">
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-500px" />
                        <span>fab fa-500px</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-accessible-icon" />
                        <span> fab fa-accessible-icon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-accusoft" />
                        <span>fab fa-accusoft</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-adn" />
                        <span> fab fa-adn</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-adversal" />
                        <span>fab fa-adversal</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-affiliatetheme" />
                        <span> fab fa-affiliatetheme</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-algolia" />
                        <span>fab fa-algolia</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-amazon" />
                        <span>fab fa-amazon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-amazon-pay" />
                        <span> fab fa-amazon-pay</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-amilia" />
                        <span>fab fa-amilia</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-android" />
                        <span>fab fa-android</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-angellist" />
                        <span> fab fa-angellist</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-angrycreative" />
                        <span> fab fa-angrycreative</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-angular" />
                        <span>fab fa-angular</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-app-store" />
                        <span> fab fa-app-store</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-app-store-ios" />
                        <span> fab fa-app-store-ios</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-apper" />
                        <span>fab fa-apper</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-apple" />
                        <span>fab fa-apple</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-apple-pay" />
                        <span> fab fa-apple-pay</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-asymmetrik" />
                        <span> fab fa-asymmetrik</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-audible" />
                        <span>fab fa-audible</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-autoprefixer" />
                        <span> fab fa-autoprefixer</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-avianex" />
                        <span>fab fa-avianex</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-aviato" />
                        <span>fab fa-aviato</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-aws" />
                        <span> fab fa-aws</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bandcamp" />
                        <span>fab fa-bandcamp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-behance" />
                        <span>fab fa-behance</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-behance-square" />
                        <span> fab fa-behance-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bimobject" />
                        <span> fab fa-bimobject</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bitbucket" />
                        <span> fab fa-bitbucket</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bitcoin" />
                        <span>fab fa-bitcoin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bity" />
                        <span> fab fa-bity</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-black-tie" />
                        <span> fab fa-black-tie</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-blackberry" />
                        <span> fab fa-blackberry</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-blogger" />
                        <span>fab fa-blogger</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-blogger-b" />
                        <span> fab fa-blogger-b</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bluetooth" />
                        <span> fab fa-bluetooth</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-bluetooth-b" />
                        <span> fab fa-bluetooth-b</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-btc" />
                        <span> fab fa-btc</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-buromobelexperte" />
                        <span> fab fa-buromobelexperte</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-amazon-pay" />
                        <span> fab fa-cc-amazon-pay</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-amex" />
                        <span>fab fa-cc-amex</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-apple-pay" />
                        <span> fab fa-cc-apple-pay</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-diners-club" />
                        <span> fab fa-cc-diners-club</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-discover" />
                        <span> fab fa-cc-discover</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-jcb" />
                        <span>fab fa-cc-jcb</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-mastercard" />
                        <span> fab fa-cc-mastercard</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-paypal" />
                        <span> fab fa-cc-paypal</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-stripe" />
                        <span> fab fa-cc-stripe</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cc-visa" />
                        <span>fab fa-cc-visa</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-centercode" />
                        <span> fab fa-centercode</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-chrome" />
                        <span>fab fa-chrome</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cloudscale" />
                        <span> fab fa-cloudscale</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cloudsmith" />
                        <span> fab fa-cloudsmith</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cloudversify" />
                        <span> fab fa-cloudversify</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-codepen" />
                        <span>fab fa-codepen</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-codiepie" />
                        <span>fab fa-codiepie</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-connectdevelop" />
                        <span> fab fa-connectdevelop</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-contao" />
                        <span>fab fa-contao</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cpanel" />
                        <span>fab fa-cpanel</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-creative-commons" />
                        <span> fab fa-creative-commons</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-css3" />
                        <span> fab fa-css3</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-css3-alt" />
                        <span>fab fa-css3-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-cuttlefish" />
                        <span> fab fa-cuttlefish</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-d-and-d" />
                        <span>fab fa-d-and-d</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dashcube" />
                        <span>fab fa-dashcube</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-delicious" />
                        <span> fab fa-delicious</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-deploydog" />
                        <span> fab fa-deploydog</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-deskpro" />
                        <span>fab fa-deskpro</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-deviantart" />
                        <span> fab fa-deviantart</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-digg" />
                        <span> fab fa-digg</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-digital-ocean" />
                        <span> fab fa-digital-ocean</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-discord" />
                        <span>fab fa-discord</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-discourse" />
                        <span> fab fa-discourse</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dochub" />
                        <span>fab fa-dochub</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-docker" />
                        <span>fab fa-docker</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-draft2digital" />
                        <span> fab fa-draft2digital</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dribbble" />
                        <span>fab fa-dribbble</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dribbble-square" />
                        <span> fab fa-dribbble-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dropbox" />
                        <span>fab fa-dropbox</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-drupal" />
                        <span>fab fa-drupal</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-dyalog" />
                        <span>fab fa-dyalog</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-earlybirds" />
                        <span> fab fa-earlybirds</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-edge" />
                        <span> fab fa-edge</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-elementor" />
                        <span> fab fa-elementor</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ember" />
                        <span>fab fa-ember</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-empire" />
                        <span>fab fa-empire</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-envira" />
                        <span>fab fa-envira</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-erlang" />
                        <span>fab fa-erlang</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ethereum" />
                        <span>fab fa-ethereum</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-etsy" />
                        <span> fab fa-etsy</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-expeditedssl" />
                        <span> fab fa-expeditedssl</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-facebook" />
                        <span>fab fa-facebook</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-facebook-f" />
                        <span> fab fa-facebook-f</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-facebook-messenger" />
                        <span> fab fa-facebook-messenger</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-facebook-square" />
                        <span> fab fa-facebook-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-firefox" />
                        <span>fab fa-firefox</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-first-order" />
                        <span> fab fa-first-order</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-firstdraft" />
                        <span> fab fa-firstdraft</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-flickr" />
                        <span>fab fa-flickr</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-flipboard" />
                        <span> fab fa-flipboard</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-fly" />
                        <span> fab fa-fly</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-font-awesome" />
                        <span> fab fa-font-awesome</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-font-awesome-alt" />
                        <span> fab fa-font-awesome-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-font-awesome-flag" />
                        <span> fab fa-font-awesome-flag</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-fonticons" />
                        <span> fab fa-fonticons</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-fonticons-fi" />
                        <span> fab fa-fonticons-fi</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-fort-awesome" />
                        <span> fab fa-fort-awesome</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-fort-awesome-alt" />
                        <span> fab fa-fort-awesome-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-forumbee" />
                        <span>fab fa-forumbee</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-foursquare" />
                        <span> fab fa-foursquare</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-free-code-camp" />
                        <span> fab fa-free-code-camp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-freebsd" />
                        <span>fab fa-freebsd</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-get-pocket" />
                        <span> fab fa-get-pocket</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gg" />
                        <span> fab fa-gg</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gg-circle" />
                        <span> fab fa-gg-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-git" />
                        <span> fab fa-git</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-git-square" />
                        <span> fab fa-git-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-github" />
                        <span>fab fa-github</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-github-alt" />
                        <span> fab fa-github-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-github-square" />
                        <span> fab fa-github-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gitkraken" />
                        <span> fab fa-gitkraken</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gitlab" />
                        <span>fab fa-gitlab</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gitter" />
                        <span>fab fa-gitter</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-glide" />
                        <span>fab fa-glide</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-glide-g" />
                        <span>fab fa-glide-g</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gofore" />
                        <span>fab fa-gofore</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-goodreads" />
                        <span> fab fa-goodreads</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-goodreads-g" />
                        <span> fab fa-goodreads-g</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google" />
                        <span>fab fa-google</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-drive" />
                        <span> fab fa-google-drive</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-play" />
                        <span> fab fa-google-play</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-plus" />
                        <span> fab fa-google-plus</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-plus-g" />
                        <span> fab fa-google-plus-g</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-plus-square" />
                        <span> fab fa-google-plus-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-google-wallet" />
                        <span> fab fa-google-wallet</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gratipay" />
                        <span>fab fa-gratipay</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-grav" />
                        <span> fab fa-grav</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gripfire" />
                        <span>fab fa-gripfire</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-grunt" />
                        <span>fab fa-grunt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-gulp" />
                        <span> fab fa-gulp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hacker-news" />
                        <span> fab fa-hacker-news</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hacker-news-square" />
                        <span> fab fa-hacker-news-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hips" />
                        <span> fab fa-hips</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hire-a-helper" />
                        <span> fab fa-hire-a-helper</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hooli" />
                        <span>fab fa-hooli</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hotjar" />
                        <span>fab fa-hotjar</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-houzz" />
                        <span>fab fa-houzz</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-html5" />
                        <span>fab fa-html5</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-hubspot" />
                        <span>fab fa-hubspot</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-imdb" />
                        <span> fab fa-imdb</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-instagram" />
                        <span> fab fa-instagram</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-internet-explorer" />
                        <span> fab fa-internet-explorer</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ioxhost" />
                        <span>fab fa-ioxhost</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-itunes" />
                        <span>fab fa-itunes</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-itunes-note" />
                        <span> fab fa-itunes-note</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-jenkins" />
                        <span>fab fa-jenkins</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-joget" />
                        <span>fab fa-joget</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-joomla" />
                        <span>fab fa-joomla</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-js" />
                        <span> fab fa-js</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-js-square" />
                        <span> fab fa-js-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-jsfiddle" />
                        <span>fab fa-jsfiddle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-keycdn" />
                        <span>fab fa-keycdn</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-kickstarter" />
                        <span> fab fa-kickstarter</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-kickstarter-k" />
                        <span> fab fa-kickstarter-k</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-korvue" />
                        <span>fab fa-korvue</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-laravel" />
                        <span>fab fa-laravel</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-lastfm" />
                        <span>fab fa-lastfm</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-lastfm-square" />
                        <span> fab fa-lastfm-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-leanpub" />
                        <span>fab fa-leanpub</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-less" />
                        <span> fab fa-less</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-line" />
                        <span> fab fa-line</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-linkedin" />
                        <span>fab fa-linkedin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-linkedin-in" />
                        <span> fab fa-linkedin-in</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-linode" />
                        <span>fab fa-linode</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-linux" />
                        <span>fab fa-linux</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-lyft" />
                        <span> fab fa-lyft</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-magento" />
                        <span>fab fa-magento</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-maxcdn" />
                        <span>fab fa-maxcdn</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-medapps" />
                        <span>fab fa-medapps</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-medium" />
                        <span>fab fa-medium</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-medium-m" />
                        <span>fab fa-medium-m</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-medrt" />
                        <span>fab fa-medrt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-meetup" />
                        <span>fab fa-meetup</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-microsoft" />
                        <span> fab fa-microsoft</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-mix" />
                        <span> fab fa-mix</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-mixcloud" />
                        <span>fab fa-mixcloud</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-mizuni" />
                        <span>fab fa-mizuni</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-modx" />
                        <span> fab fa-modx</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-monero" />
                        <span>fab fa-monero</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-napster" />
                        <span>fab fa-napster</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-nintendo-switch" />
                        <span> fab fa-nintendo-switch</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-node" />
                        <span> fab fa-node</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-node-js" />
                        <span>fab fa-node-js</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-npm" />
                        <span> fab fa-npm</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ns8" />
                        <span> fab fa-ns8</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-nutritionix" />
                        <span> fab fa-nutritionix</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-odnoklassniki" />
                        <span> fab fa-odnoklassniki</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-odnoklassniki-square" />
                        <span> fab fa-odnoklassniki-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-opencart" />
                        <span>fab fa-opencart</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-openid" />
                        <span>fab fa-openid</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-opera" />
                        <span>fab fa-opera</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-optin-monster" />
                        <span> fab fa-optin-monster</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-osi" />
                        <span> fab fa-osi</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-page4" />
                        <span>fab fa-page4</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pagelines" />
                        <span> fab fa-pagelines</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-palfed" />
                        <span>fab fa-palfed</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-patreon" />
                        <span>fab fa-patreon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-paypal" />
                        <span>fab fa-paypal</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-periscope" />
                        <span> fab fa-periscope</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-phabricator" />
                        <span> fab fa-phabricator</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-phoenix-framework" />
                        <span> fab fa-phoenix-framework</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-php" />
                        <span> fab fa-php</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pied-piper" />
                        <span> fab fa-pied-piper</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pied-piper-alt" />
                        <span> fab fa-pied-piper-alt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pied-piper-pp" />
                        <span> fab fa-pied-piper-pp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pinterest" />
                        <span> fab fa-pinterest</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pinterest-p" />
                        <span> fab fa-pinterest-p</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pinterest-square" />
                        <span> fab fa-pinterest-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-playstation" />
                        <span> fab fa-playstation</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-product-hunt" />
                        <span> fab fa-product-hunt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-pushed" />
                        <span>fab fa-pushed</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-python" />
                        <span>fab fa-python</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-qq" />
                        <span> fab fa-qq</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-quinscape" />
                        <span> fab fa-quinscape</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-quora" />
                        <span>fab fa-quora</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ravelry" />
                        <span>fab fa-ravelry</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-react" />
                        <span>fab fa-react</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-readme" />
                        <span>fab fa-readme</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-rebel" />
                        <span>fab fa-rebel</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-red-river" />
                        <span> fab fa-red-river</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-reddit" />
                        <span>fab fa-reddit</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-reddit-alien" />
                        <span> fab fa-reddit-alien</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-reddit-square" />
                        <span> fab fa-reddit-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-rendact" />
                        <span>fab fa-rendact</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-renren" />
                        <span>fab fa-renren</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-replyd" />
                        <span>fab fa-replyd</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-resolving" />
                        <span> fab fa-resolving</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-rocketchat" />
                        <span> fab fa-rocketchat</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-rockrms" />
                        <span>fab fa-rockrms</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-safari" />
                        <span>fab fa-safari</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-sass" />
                        <span> fab fa-sass</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-schlix" />
                        <span>fab fa-schlix</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-scribd" />
                        <span>fab fa-scribd</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-searchengin" />
                        <span> fab fa-searchengin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-sellcast" />
                        <span>fab fa-sellcast</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-sellsy" />
                        <span>fab fa-sellsy</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-servicestack" />
                        <span> fab fa-servicestack</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-shirtsinbulk" />
                        <span> fab fa-shirtsinbulk</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-simplybuilt" />
                        <span> fab fa-simplybuilt</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-sistrix" />
                        <span>fab fa-sistrix</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-skyatlas" />
                        <span>fab fa-skyatlas</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-skype" />
                        <span>fab fa-skype</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-slack" />
                        <span>fab fa-slack</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-slack-hash" />
                        <span> fab fa-slack-hash</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-slideshare" />
                        <span> fab fa-slideshare</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-snapchat" />
                        <span>fab fa-snapchat</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-snapchat-ghost" />
                        <span> fab fa-snapchat-ghost</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-snapchat-square" />
                        <span> fab fa-snapchat-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-soundcloud" />
                        <span> fab fa-soundcloud</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-speakap" />
                        <span>fab fa-speakap</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-spotify" />
                        <span>fab fa-spotify</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stack-exchange" />
                        <span> fab fa-stack-exchange</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stack-overflow" />
                        <span> fab fa-stack-overflow</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-staylinked" />
                        <span> fab fa-staylinked</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-steam" />
                        <span>fab fa-steam</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-steam-square" />
                        <span> fab fa-steam-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-steam-symbol" />
                        <span> fab fa-steam-symbol</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-sticker-mule" />
                        <span> fab fa-sticker-mule</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-strava" />
                        <span>fab fa-strava</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stripe" />
                        <span>fab fa-stripe</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stripe-s" />
                        <span>fab fa-stripe-s</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-studiovinari" />
                        <span> fab fa-studiovinari</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stumbleupon" />
                        <span> fab fa-stumbleupon</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-stumbleupon-circle" />
                        <span> fab fa-stumbleupon-circle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-superpowers" />
                        <span> fab fa-superpowers</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-supple" />
                        <span>fab fa-supple</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-telegram" />
                        <span>fab fa-telegram</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-telegram-plane" />
                        <span> fab fa-telegram-plane</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-tencent-weibo" />
                        <span> fab fa-tencent-weibo</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-themeisle" />
                        <span> fab fa-themeisle</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-trello" />
                        <span>fab fa-trello</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-tripadvisor" />
                        <span> fab fa-tripadvisor</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-tumblr" />
                        <span>fab fa-tumblr</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-tumblr-square" />
                        <span> fab fa-tumblr-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-twitch" />
                        <span>fab fa-twitch</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-twitter" />
                        <span>fab fa-twitter</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-twitter-square" />
                        <span> fab fa-twitter-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-typo3" />
                        <span>fab fa-typo3</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-uber" />
                        <span> fab fa-uber</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-uikit" />
                        <span>fab fa-uikit</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-uniregistry" />
                        <span> fab fa-uniregistry</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-untappd" />
                        <span>fab fa-untappd</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-usb" />
                        <span> fab fa-usb</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-ussunnah" />
                        <span>fab fa-ussunnah</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vaadin" />
                        <span>fab fa-vaadin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-viacoin" />
                        <span>fab fa-viacoin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-viadeo" />
                        <span>fab fa-viadeo</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-viber" />
                        <span>fab fa-viber</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vimeo" />
                        <span>fab fa-vimeo</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vimeo-square" />
                        <span> fab fa-vimeo-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vimeo-v" />
                        <span>fab fa-vimeo-v</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vine" />
                        <span> fab fa-vine</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vk" />
                        <span> fab fa-vk</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vnv" />
                        <span> fab fa-vnv</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-vuejs" />
                        <span>fab fa-vuejs</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-weibo" />
                        <span>fab fa-weibo</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-weixin" />
                        <span>fab fa-weixin</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-whatsapp" />
                        <span>fab fa-whatsapp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-whatsapp-square" />
                        <span> fab fa-whatsapp-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-whmcs" />
                        <span>fab fa-whmcs</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wikipedia-w" />
                        <span> fab fa-wikipedia-w</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-windows" />
                        <span>fab fa-windows</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wordpress" />
                        <span> fab fa-wordpress</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wordpress-simple" />
                        <span> fab fa-wordpress-simple</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wpbeginner" />
                        <span> fab fa-wpbeginner</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wpexplorer" />
                        <span> fab fa-wpexplorer</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-wpforms" />
                        <span>fab fa-wpforms</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-xbox" />
                        <span> fab fa-xbox</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-xing" />
                        <span> fab fa-xing</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-xing-square" />
                        <span> fab fa-xing-square</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-y-combinator" />
                        <span> fab fa-y-combinator</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-yahoo" />
                        <span>fab fa-yahoo</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-yandex" />
                        <span>fab fa-yandex</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-yandex-international" />
                        <span> fab fa-yandex-international</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-yelp" />
                        <span> fab fa-yelp</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-yoast" />
                        <span>fab fa-yoast</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-youtube" />
                        <span>fab fa-youtube</span>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3 f-icon">
                        <i className="fab fa-youtube-square" />
                        <span> fab fa-youtube-square</span>
                      </div>
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
