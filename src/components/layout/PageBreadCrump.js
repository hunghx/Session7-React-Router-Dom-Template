import React from "react";

export default function PageBreadCrump() {
  return (
    <div className="page-breadcrumb bg-white">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">Dashboard</h4>
        </div>
        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <div className="d-md-flex">
            <ol className="breadcrumb ms-auto">
              <li>
                <a href="#" className="fw-normal">
                  Dashboard
                </a>
              </li>
            </ol>
            <a
              href="https://www.wrappixel.com/templates/ampleadmin/"
              target="_blank"
              className="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
      {/* /.col-lg-12 */}
    </div>
  );
}
