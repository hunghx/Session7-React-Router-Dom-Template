import React from "react";
import Footer from "./layout/Footer";
import PageBreadCrump from "./layout/PageBreadCrump";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";

export default function Table() {
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
                  <h3 className="box-title">Basic Table</h3>
                  <p className="text-muted">
                    Add class <code>.table</code>
                  </p>
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead>
                        <tr>
                          <th className="border-top-0">#</th>
                          <th className="border-top-0">First Name</th>
                          <th className="border-top-0">Last Name</th>
                          <th className="border-top-0">Username</th>
                          <th className="border-top-0">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Deshmukh</td>
                          <td>Prohaska</td>
                          <td>@Genelia</td>
                          <td>admin</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Deshmukh</td>
                          <td>Gaylord</td>
                          <td>@Ritesh</td>
                          <td>member</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sanghani</td>
                          <td>Gusikowski</td>
                          <td>@Govinda</td>
                          <td>developer</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Roshan</td>
                          <td>Rogahn</td>
                          <td>@Hritik</td>
                          <td>supporter</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Joshi</td>
                          <td>Hickle</td>
                          <td>@Maruti</td>
                          <td>member</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Nigam</td>
                          <td>Eichmann</td>
                          <td>@Sonu</td>
                          <td>supporter</td>
                        </tr>
                      </tbody>
                    </table>
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
