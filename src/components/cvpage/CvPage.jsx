import React from "react";
import "./style.css";
import CVFirstPage from "../../documents/firstpage_cv.png";
import CVSecondPage from "../../documents/secondpage_cv.png";
import Axios from "axios";
import FileDownload from "js-file-download";

function CVPage() {
  const handleDownload = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "cv_samirschabel.pdf");
    });
  };

  return (
    <>
      <div className="cv-container">
        <img src={CVFirstPage} alt="" />
        <img src={CVSecondPage} alt="" />
      </div>
      <div className="download-btn">
        <button onClick={(e) => handleDownload(e)}>Download</button>
      </div>
    </>
  );
}

export default CVPage;
