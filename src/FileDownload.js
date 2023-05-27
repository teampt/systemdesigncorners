import React from 'react';

function FileDownload() {
  const fileUrl = process.env.PUBLIC_URL + '/38F68A5F3E44232B71EC5D35EE90F238.txt';

  return (
    <div>
      {/* Render the file download link */}
      <a href={fileUrl} download>Download File</a>
    </div>
  );
}

export default FileDownload;