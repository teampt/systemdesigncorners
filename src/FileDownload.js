import React, {useEffect } from 'react';
import { Navigate } from 'react-router-dom';


function FileDownload() {
  const fileUrl = process.env.PUBLIC_URL + '/38F68A5F3E44232B71EC5D35EE90F238.txt';

  const redirectToFile = () => {
    window.location.href = fileUrl; // Replace with the actual file path
  };

  useEffect(() => {
    redirectToFile();
  }, []);

  return <Navigate to="/" />
  // return (
  //   <div>
  //     {/* Render the file download link */}
  //     <a href={fileUrl} download>Download File</a>
  //   </div>
  // );
}

export default FileDownload;