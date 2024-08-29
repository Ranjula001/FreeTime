// // import * as React from "react";
// // import { styled, useTheme } from "@mui/material/styles";
// // import Box from "@mui/material/Box";
// // import MuiDrawer from "@mui/material/Drawer";
// // import IconButton from "@mui/material/IconButton";
// // import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// // import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// // import Divider from "@mui/material/Divider";
// // import InputBase from "@mui/material/InputBase";
// // import Paper from "@mui/material/Paper";
// // import Avatar from "@mui/material/Avatar";
// // import { PiHouseFill } from "react-icons/pi";
// // import { IoMdBriefcase } from "react-icons/io";
// // import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
// // import { Search } from "@mui/icons-material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Typography from "@mui/material/Typography";
// // import Adam from "../assets/adam.svg";
// // import Brian from "../assets/brian.svg";
// // import Joe from "../assets/joe.svg";
// // import Lois from "../assets/lois.svg";
// // import Meg from "../assets/meg.svg";
// // import { createTheme } from '@mui/material/styles';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import Logo from "../assets/Logo.svg"

// // const drawerWidth = 240;

// // const colorTheme = createTheme({
// //   palette: {
// //     ochre: {
// //       main: '#E3D026',
// //       light: '#E9DB5D',
// //       dark: '#A29415',
// //       contrastText: '#242105',
// //       chatAppCyan: "39C7AD",
// //     },
// //   },
// // });

// // const openedMixin = (theme) => ({
// //   width: drawerWidth,
// //   transition: theme.transitions.create("width", {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.enteringScreen,
// //   }),
// //   overflowX: "hidden",
// // });

// // const closedMixin = (theme) => ({
// //   transition: theme.transitions.create("width", {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   overflowX: "hidden",
// //   width: `calc(${theme.spacing(7)} + 1px)`,
// //   [theme.breakpoints.up("sm")]: {
// //     width: `calc(${theme.spacing(8)} + 1px)`,
// //   },
// // });

// // const DrawerHeader = styled("div")(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "flex-end",
// //   padding: theme.spacing(0, 1),
// //   ...theme.mixins.toolbar,
// // }));

// // const StyledDrawer = styled(MuiDrawer, {
// //   shouldForwardProp: (prop) => prop !== "open",
// // })(({ theme, open }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   ...(open && {
// //     ...openedMixin(theme),
// //     "& .MuiDrawer-paper": openedMixin(theme),
// //   }),
// //   ...(!open && {
// //     ...closedMixin(theme),
// //     "& .MuiDrawer-paper": closedMixin(theme),
// //   }),
// // }));

// // export default function DrawerComponent() {
// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);
// //   const [activePanel, setActivePanel] = React.useState("chat");
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const handlePanelToggle = (panel) => {
// //     setActivePanel(activePanel === panel ? "chat" : panel);
// //   };

// //   const handleChatClick = () => {
// //     navigate('/chat'); // Navigate to /chat when a person is clicked
// //   };

// //   const icons = [
// //     <PiHouseFill size={30} onClick={() => handlePanelToggle("home")} />,
// //     <IoMdBriefcase size={30} onClick={() => handlePanelToggle("work")} />,
// //     <IoChatbubbleEllipsesSharp
// //       size={30}
// //       onClick={() => handlePanelToggle("chat")}
// //     />,
// //   ];

// //   return (
// //     <Box sx={{ display: "flex" }}>
// //       <StyledDrawer variant="permanent" open={open}>
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === "rtl" ? (
// //               <ChevronRightIcon />
// //             ) : (
// //               <ChevronLeftIcon />
// //             )}
// //           </IconButton>

// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="end"
// //             sx={{ alignItems:"center", marginRight: 0, ...(open && { display: "none" }) }}
// //           >
// //             {/* <MenuIcon /> */}
// //             <img src={Logo} alt="" />
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           {["Home", "Work", "Chat"].map((text, index) => (
// //             <ListItem key={text} disablePadding sx={{ display: "block" }}>
// //               <ListItemButton
// //                 sx={{
// //                   minHeight: 48,
// //                   justifyContent: open ? "initial" : "center",
// //                   px: 2.5,
// //                 }}
// //               >
// //                 <ListItemIcon
// //                   sx={{
// //                     minWidth: 0,
// //                     justifyContent: "center",
// //                     mr: open ? 3 : "auto",
// //                   }}
// //                 >
// //                   {icons[index]}
// //                 </ListItemIcon>
// //                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //       </StyledDrawer>
// //       {/* Active panel container */}
// //       <Box
// //         sx={{
// //           position: "fixed",
// //           top: 0,
// //           left: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
// //           width: `calc(20% - ${open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`})`,
// //           height: "100vh",
// //           zIndex:1300,
// //         }}
// //       >
// //         {activePanel === "chat" && (
// //           <Paper
// //             sx={{
// //               p: 2,
// //               overflow: "auto",
// //               height: "100%",
// //               backgroundColor: "white",
// //             }}
// //           >
// //             <Box sx={{ display: "flex", alignItems: "center"}}>
// //               <Typography variant="h6" noWrap>
// //                 Chats
// //               </Typography>
// //               <Typography>Unread Chats</Typography>
// //             </Box>
// //             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
// //               <Search />
// //               <InputBase
// //                 sx={{ ml: 1, flex: 1 }}
// //                 placeholder="Search Names to Start Chat"
// //                 inputProps={{ "aria-label": "search chats" }}
// //               />
// //             </Box>
// //             <List sx={{ cursor: "pointer" }}>
// //               {[
// //                 { name: "Adam West", avatarUrl: Adam },
// //                 { name: "Brian Griffin", avatarUrl: Brian },
// //                 { name: "Lois Griffin", avatarUrl: Lois },
// //                 { name: "Joe Swanson", avatarUrl: Joe },
// //                 { name: "Meg Griffin", avatarUrl: Meg },
// //               ].map((person) => (
// //                 <ListItem key={person.name} button onClick={handleChatClick}>
// //                   <Avatar
// //                     src={person.avatarUrl}
// //                     sx={{ width: 40, height: 40, marginRight: 2 }} // Adjust size and spacing
// //                   />
// //                   <ListItemText primary={person.name} />
// //                 </ListItem>
// //               ))}
// //             </List>
// //           </Paper>
// //         )}

// //         {activePanel === "work" && (
// //           <Paper
// //             sx={{
// //               p: 2,
// //               overflow: "auto",
// //               height: "100%",
// //               backgroundColor: "white",
// //             }}
// //           >
// //             <Typography variant="h6" noWrap>
// //               Work
// //             </Typography>
// //             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
// //               <Search />
// //               <InputBase
// //                 sx={{ ml: 1, flex: 1 }}
// //                 placeholder="Search..."
// //                 inputProps={{ "aria-label": "search work" }}
// //               />
// //             </Box>
// //             <List sx={{ cursor: "pointer" }}>
// //               {["Company"].map((name) => (
// //                 <ListItem key={name} button>
// //                   <ListItemText primary={name} />
// //                 </ListItem>
// //               ))}
// //             </List>
// //           </Paper>
// //         )}

// //         {activePanel === "home" && (
// //           <Paper
// //             sx={{
// //               p: 2,
// //               overflow: "auto",
// //               height: "100%",
// //               backgroundColor: "white",
// //             }}
// //           >
// //             <Typography variant="h6" noWrap>
// //               Home
// //             </Typography>
// //             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
// //               <Search />
// //               <InputBase
// //                 sx={{ ml: 1, flex: 1 }}
// //                 placeholder="Search…"
// //                 inputProps={{ "aria-label": "search home" }}
// //               />
// //             </Box>
// //             <List sx={{ cursor: "pointer" }}>
// //               {["Home Item"].map((name) => (
// //                 <ListItem key={name} button>
// //                   <ListItemText primary={name} />
// //                 </ListItem>
// //               ))}
// //             </List>
// //           </Paper>
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // }



// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import InputBase from "@mui/material/InputBase";
// import Paper from "@mui/material/Paper";
// import Avatar from "@mui/material/Avatar";
// import { PiHouseFill } from "react-icons/pi";
// import { IoMdBriefcase } from "react-icons/io";
// import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
// import { Search } from "@mui/icons-material";
// import Typography from "@mui/material/Typography";
// import Adam from "../assets/adam.svg";
// import Brian from "../assets/brian.svg";
// import Joe from "../assets/joe.svg";
// import Lois from "../assets/lois.svg";
// import Meg from "../assets/meg.svg";
// import { createTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Logo from "../assets/Logo.svg";

// const drawerWidth = 240;

// const colorTheme = createTheme({
//   palette: {
//     ochre: {
//       main: '#E3D026',
//       light: '#E9DB5D',
//       dark: '#A29415',
//       contrastText: '#242105',
//       chatAppCyanIcon: '#39C7AD',
//       chatAppCyan: "#C6EAE5", // Added chatAppCyan
//     },
//   },
// });

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const StyledDrawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function DrawerComponent() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [activePanel, setActivePanel] = React.useState("chat");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handlePanelToggle = (panel) => {
//     setActivePanel(panel);
//   };

//   const handleChatClick = () => {
//     navigate('/chat'); // Navigate to /chat when a person is clicked
//   };

//   const icons = [
//     <PiHouseFill size={30} onClick={() => handlePanelToggle("home")} />,
//     <IoMdBriefcase size={30} onClick={() => handlePanelToggle("work")} />,
//     <IoChatbubbleEllipsesSharp
//       size={30}
//       onClick={() => handlePanelToggle("chat")}
//     />,
//   ];

//   return (
//     <Box sx={{ display: "flex" }}>
//       <StyledDrawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="end"
//             sx={{ alignItems:"center", marginRight: 0, ...(open && { display: "none" }) }}
//           >
//             <img src={Logo} alt="" />
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Home", "Work", "Chat"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 onClick={() => handlePanelToggle(text.toLowerCase())}
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                   backgroundColor: activePanel === text.toLowerCase() ? colorTheme.palette.ochre.chatAppCyan : "transparent",
//                   color: activePanel === text.toLowerCase() ? "white" : "inherit",
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     justifyContent: "center",
//                     mr: open ? 3 : "auto",
//                   }}
//                 >
//                   {icons[index]}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </StyledDrawer>
//       {/* Active panel container */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
//           width: `calc(20% - ${open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`})`,
//           height: "100vh",
//           zIndex:1300,
//         }}
//       >
//         {activePanel === "chat" && (
//           <Paper
//             sx={{
//               p: 2,
//               overflow: "auto",
//               height: "100%",
//               backgroundColor: "white",
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center"}}>
//               <Typography variant="h6" noWrap>
//                 Chats
//               </Typography>
//               <Typography>Unread Chats</Typography>
//             </Box>
//             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
//               <Search />
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search Names to Start Chat"
//                 inputProps={{ "aria-label": "search chats" }}
//               />
//             </Box>
//             <List sx={{ cursor: "pointer" }}>
//               {[
//                 { name: "Adam West", avatarUrl: Adam },
//                 { name: "Brian Griffin", avatarUrl: Brian },
//                 { name: "Lois Griffin", avatarUrl: Lois },
//                 { name: "Joe Swanson", avatarUrl: Joe },
//                 { name: "Meg Griffin", avatarUrl: Meg },
//               ].map((person) => (
//                 <ListItem key={person.name} button onClick={handleChatClick}>
//                   <Avatar
//                     src={person.avatarUrl}
//                     sx={{ width: 40, height: 40, marginRight: 2 }} // Adjust size and spacing
//                   />
//                   <ListItemText primary={person.name} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         )}

//         {activePanel === "work" && (
//           <Paper
//             sx={{
//               p: 2,
//               overflow: "auto",
//               height: "100%",
//               backgroundColor: "white",
//             }}
//           >
//             <Typography variant="h6" noWrap>
//               Work
//             </Typography>
//             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
//               <Search />
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search..."
//                 inputProps={{ "aria-label": "search work" }}
//               />
//             </Box>
//             <List sx={{ cursor: "pointer" }}>
//               {["Company"].map((name) => (
//                 <ListItem key={name} button>
//                   <ListItemText primary={name} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         )}

//         {activePanel === "home" && (
//           <Paper
//             sx={{
//               p: 2,
//               overflow: "auto",
//               height: "100%",
//               backgroundColor: "white",
//             }}
//           >
//             <Typography variant="h6" noWrap>
//               Home
//             </Typography>
//             <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
//               <Search />
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search..."
//                 inputProps={{ "aria-label": "search home" }}
//               />
//             </Box>
//             <List sx={{ cursor: "pointer" }}>
//               {["Dashboard"].map((name) => (
//                 <ListItem key={name} button>
//                   <ListItemText primary={name} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         )}
//       </Box>
//     </Box>
//   );
// }



import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { PiHouseFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Search } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Adam from "../assets/adam.svg";
import Brian from "../assets/brian.svg";
import Joe from "../assets/joe.svg";
import Lois from "../assets/lois.svg";
import Meg from "../assets/meg.svg";
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.svg";

const drawerWidth = 240;

const colorTheme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
      chatAppCyanIcon: '#39C7AD',
      chatAppCyan: "#C6EAE5",
    },
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState("chat");
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePanelToggle = (panel) => {
    setActivePanel(panel);
  };

  const handleChatClick = (person) => {
    setSelectedPerson(person);
    navigate('/chat');
  };

  const handleoutsideClick = () => {
    navigate('/');
  }

  const icons = [
    <PiHouseFill
      size={30}
      color={activePanel === "home" ? colorTheme.palette.ochre.chatAppCyanIcon : "inherit"}
      onClick={() => handlePanelToggle("home")}
    />,
    <IoMdBriefcase
      size={30}
      color={activePanel === "work" ? colorTheme.palette.ochre.chatAppCyanIcon : "inherit"}
      onClick={() => handlePanelToggle("work")}
    />,
    <IoChatbubbleEllipsesSharp
      size={30}
      color={activePanel === "chat" ? colorTheme.palette.ochre.chatAppCyanIcon : "inherit"}
      onClick={() => handlePanelToggle("chat")}
    />,
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{ alignItems: "center", marginRight: 0, ...(open && { display: "none" }) }}
          >
            <img src={Logo} alt="" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Work", "Chat"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handlePanelToggle(text.toLowerCase())}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: activePanel === text.toLowerCase() ? colorTheme.palette.ochre.chatAppCyan : "transparent",
                  color: activePanel === text.toLowerCase() ? "black" : "inherit",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: open ? 3 : "auto",
                  }}
                >
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: open ? `${drawerWidth}px` : `calc(${theme.spacing(7)} + 1px)`,
          width: `calc(20% - ${open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`})`,
          height: "100vh",
          zIndex: 1300,
        }}
      >
        {activePanel === "chat" && (
          <Paper
            sx={{
              p: 2,
              overflow: "auto",
              height: "100%",
              // backgroundColor: colorTheme.palette.ochre.chatAppCyan,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap:15 }}>
              <Typography variant="h6" noWrap>
                Chats
              </Typography>
              <Typography sx={{ color: colorTheme.palette.ochre.chatAppCyanIcon }}>Unread Chats</Typography>
            </Box>
            <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
              <Search />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Names to Start Chat"
                inputProps={{ "aria-label": "search chats" }}
              />
            </Box>
            <List sx={{ cursor: "pointer" }}>
              {[
                { name: "Adam West", avatarUrl: Adam },
                { name: "Brian Griffin", avatarUrl: Brian },
                { name: "Lois Griffin", avatarUrl: Lois },
                { name: "Joe Swanson", avatarUrl: Joe },
                { name: "Meg Griffin", avatarUrl: Meg },
              ].map((person) => (
                <ListItem
                  key={person.name}
                  button
                  onClick={() => handleChatClick(person.name)}
                  sx={{
                    backgroundColor: selectedPerson === person.name ? colorTheme.palette.ochre.chatAppCyan : "transparent",
                  }}
                >
                  <Avatar
                    src={person.avatarUrl}
                    sx={{
                      width: 40,
                      height: 40,
                      marginRight: 2,
                    }}
                  />
                  <ListItemText
                    primary={person.name}
                    sx={{
                      color: selectedPerson === person.name ? "black" : "inherit",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {activePanel === "work" && (
          <Paper
            sx={{
              p: 2,
              overflow: "auto",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h6" noWrap>
              Work
            </Typography>
            <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
              <Search />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search work" }}
              />
            </Box>
          </Paper>
        )}

        {activePanel === "home" && (
          <Paper
            sx={{
              p: 2,
              overflow: "auto",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h6" noWrap>
              Home
            </Typography>
            {/* Add home content here */}
          </Paper>
        )}
      </Box>
    </Box>
  );
}
