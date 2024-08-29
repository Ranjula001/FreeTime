// import { Image } from "@mui/icons-material";
// import { Box, ImageList } from "@mui/material";
// import Pola from "../assets/pola.svg"
// import React from "react";

// export default function Blank() {
//   return (
//     <Box sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       width: "100%",
//     }}>
//       <img
//         src={Pola}
//         loading="lazy"
//       />
//     </Box>
//   );
// }


import { Box } from "@mui/material";
import Pola from "../assets/pola.svg";
import React from "react";

export default function Blank() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "78.5vw",
        overflow: "auto", // Ensures no scrollbars are shown
        margin: 0, // Remove any default margin
        padding: 0, // Remove any default padding
      }}
    >
      <img
        src={Pola}
        alt="Pola"
        loading="lazy"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Box>
  );
}
