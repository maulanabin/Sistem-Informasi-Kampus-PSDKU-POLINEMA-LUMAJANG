import React, { useEffect, useState } from "react";

export function BlobImageDisplay({ blob }) {
    const [blobUrl, setBlobUrl] = useState(null);
  
    useEffect(() => {
      // if (blob instanceof Blob) {
      //   // Create a URL for the blob
      //   const imageUrl = URL.createObjectURL(blob);
  
      //   // Set the URL as the src for the img element
      //   setBlobUrl(imageUrl);z
  
      //   // Clean up the URL when the component unmounts
      //   return () => {
      //     URL.revokeObjectURL(imageUrl);
      //   };
      // }

      if (blob) {
        setBlobUrl(blob)
      }
    }, [blob]);
  
    return (
      <div>
        {blobUrl ? (
          <img src={`data:image/png;base64,${blobUrl}`} style={{height: "400px", width: "575px", marginTop:'20px', marginLeft:"20px", marginRight:"20px", marginBottom:"20px", textAlign:"center"}} alt="Blob Image" />
        ) : (
          <p>No image to display</p>
        )}
      </div>
    );
  }