// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { PiHouseFill } from "react-icons/pi";
// import { IoMdBriefcase } from "react-icons/io";
// import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     variants: [
//       {
//         props: ({ open }) => open,
//         style: {
//           ...openedMixin(theme),
//           '& .MuiDrawer-paper': openedMixin(theme),
//         },
//       },
//       {
//         props: ({ open }) => !open,
//         style: {
//           ...closedMixin(theme),
//           '& .MuiDrawer-paper': closedMixin(theme),
//         },
//       },
//     ],
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const icons = [
//     <PiHouseFill size={30}/>,
//     <IoMdBriefcase size={30}/>,
//     <IoChatbubbleEllipsesSharp size={30}/>,
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="end"
//             sx={[
//               {
//                 marginRight: 0.5,
//               },
//               open && { display: 'none' },
//             ]}
//           >
//             <MenuIcon />
//           </IconButton>

//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Home', 'Work', 'Chat'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: 'initial',
//                       }
//                     : {
//                         justifyContent: 'center',
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: 'center',
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: 'auto',
//                         },
//                   ]}
//                 >
//                   {icons[index]}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
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
import { PiHouseFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

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
  const [activePanel, setActivePanel] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePanelToggle = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const icons = [
    <PiHouseFill size={30} onClick={() => handlePanelToggle("home")} />,
    <IoMdBriefcase size={30} onClick={() => handlePanelToggle("work")} />,
    <IoChatbubbleEllipsesSharp
      size={30}
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
            sx={{ marginRight: 0.5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Work", "Chat"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
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
      <Box>
        {activePanel === "chat" && (
          <Paper
            sx={{
              p: 2,
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              top: 0,
            }}
          >
            <Typography variant="h6" noWrap>
              Chats
            </Typography>
            <Box sx={{ p: 1, display: "flex", alignItems: "center"}}>
              <Search />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Names to Start Chat"
                inputProps={{ "aria-label": "search chats" }}
              />
            </Box>
            <List sx={{cursor:"pointer"}}>
              {[
                "Adam West",
                "Brian Griffin",
                "Lois Griffin",
                "Joe Swanson",
                "Meg Griffin",
              ].map((name) => (
                <ListItem key={name} button>
                  <ListItemText primary={name} />
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
              height: "100vh",
              position: "fixed",
              top: 0,
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
            <List sx={{cursor:"pointer"}}>
              {["Company"].map((name) => (
                <ListItem key={name} button>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {activePanel === "home" && (
          <Paper
            sx={{
              p: 2,
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              top: 0,
            }}
          >
            <Typography variant="h6" noWrap>
              Home
            </Typography>
            <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
              <Search />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search home" }}
              />
            </Box>
            <List sx={{cursor:"pointer"}}>
              {["Home Item"].map((name) => (
                <ListItem key={name} button>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
