import React from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import PageBreadCrump from "./layout/PageBreadCrump";
import Footer from "./layout/Footer";

export default function Profile() {
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
            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-4 col-xlg-3 col-md-12">
                <div className="white-box">
                  <div className="user-bg">
                    {" "}
                    <img
                      width="100%"
                      alt="user"
                      src="plugins/images/large/img1.jpg"
                    />
                    <div className="overlay-box">
                      <div className="user-content">
                        <a href="javascript:void(0)">
                          <img
                            src="plugins/images/users/genu.jpg"
                            className="thumb-lg img-circle"
                            alt="img"
                          />
                        </a>
                        <h4 className="text-white mt-2">User Name</h4>
                        <h5 className="text-white mt-2">info@myadmin.com</h5>
                      </div>
                    </div>
                  </div>
                  <div className="user-btm-box mt-5 d-md-flex">
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>258</h1>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>125</h1>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>556</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              {/* Column */}
              <div className="col-lg-8 col-xlg-9 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form className="form-horizontal form-material">
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Full Name</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder="Johnathan Doe"
                            className="form-control p-0 border-0"
                          />{" "}
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label
                          htmlFor="example-email"
                          className="col-md-12 p-0"
                        >
                          Email
                        </label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="email"
                            placeholder="johnathan@admin.com"
                            className="form-control p-0 border-0"
                            name="example-email"
                            id="example-email"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Password</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="password"
                            defaultValue="password"
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Phone No</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder="123 456 7890"
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Message</label>
                        <div className="col-md-12 border-bottom p-0">
                          <textarea
                            rows={5}
                            className="form-control p-0 border-0"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-sm-12">Select Country</label>
                        <div className="col-sm-12 border-bottom">
                          <select className="form-select shadow-none p-0 border-0 form-control-line">
                            <option>London</option>
                            <option>India</option>
                            <option>Usa</option>
                            <option>Canada</option>
                            <option>Thailand</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <div className="col-sm-12">
                          <button className="btn btn-success">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Column */}
            </div>
            {/* Row */}
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
