import * as React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BasicModal from './modal';




export default function Menu() {
    const [showMenu, setShowMenu] = useState(false)
    const [showOverMenu, setShowOverMenu] = useState(false)
    const [title, setTitle] = useState("")
    const [accordion, setAccordion] = useState(true)

    const titleHandler = (e) => {
        setTitle(e.target.innerText);
        setShowOverMenu(true)
        setAccordion(false)
    }
    const backHandler = () => {
        setAccordion(true)
        setShowOverMenu(false)
        setTitle("")
        document.querySelector("#panel1a-header").click()
    }

    return (
        // <>
        //     <div className='menu h-screen'>
        //         <div className=' p-2'>
        //             <Accordion className='w-auto inline-block'>
        //                 <AccordionSummary
        //                     aria-controls="panel1a-content"
        //                     id="panel1a-header"
        //                 >
        //                     <Typography><MdMenu onClick={showMenuHandler} className='text-3xl' /></Typography>
        //                 </AccordionSummary>
        //                 <AccordionDetails>
        //                     <Typography>
        //                         <div className='flex justify-center items-center cursor-pointer'>
        //                             <Accordion style={{maxWidth:showMenu?"500px":"0"}} className='overflow-hidden duration-500'>
        //                                 <AccordionSummary
        //                                     expandIcon={<FaCaretDown />}
        //                                     aria-controls="panel1a-content"
        //                                     id="panel1a-header"
        //                                 >
        //                                     <Typography>Home</Typography>
        //                                 </AccordionSummary>
        //                                 <AccordionDetails>
        //                                     <Typography>
        //                                         <p>1</p>
        //                                         <p>1</p>
        //                                         <p>1</p>
        //                                         <p>1</p>
        //                                         <p>1</p>

        //                                     </Typography>
        //                                 </AccordionDetails>
        //                             </Accordion>
        //                         </div>

        //                     </Typography>
        //                 </AccordionDetails>
        //             </Accordion>

        //         </div>
        //     </div>
        // </>
        <div className='menu p-2'>
            <div className='box-menu rounded-lg relative inline-block'>
                <div className='flex justify-between items-center'>
                    <MdMenu onClick={() => setShowMenu(!showMenu)} className=' p-1 text-4xl  cursor-pointer' />
                    <FaHome style={{ display: showMenu ? "inline" : "none" }} className='text-2xl cursor-pointer' />
                    <IoChevronBack onClick={backHandler} style={{ opacity: showOverMenu ? "1" : "0", display: showMenu ? "inline" : "none" }} className='duration-300 rounded-full bg-slate-500 p-1 text-2xl cursor-pointer text-white' />
                </div>
                <div style={{ maxHeight: showMenu ? "90vh" : "0", maxWidth: showMenu ? "500px" : "0", marginLeft: showMenu ? "30px" : "0", marginRight: showMenu ? "30px" : "0" }} className='overflow-y-auto duration-300 '>




                    <div className='text-center mt-3'>{title}</div>



                    <Accordion style={{ display: accordion ? "block" : "none" }} className='px-3 mx-1 my-5'>
                        <AccordionSummary
                            expandIcon={<FaCaretDown className='mx-2' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='whitespace-nowrap'>...select a option</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography onClick={titleHandler}>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 1</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 2</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 3</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 4</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 5</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 6</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 7</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 8</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 9</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 10</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 11</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 12</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 13</span>
                                <span className='hover:text-blue-500 p-2 cursor-pointer block text-center'>item 14</span>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
















                    {/* <div className='px-3 py-2 mx-2 my-5 rounded-md cursor-pointer bg-white hover:bg-slate-100 duration-300'>
                        <div onClick={() => setShowOverMenu(!showOverMenu)} className='flex justify-center items-center'><FaCaretDown className=' text-black pl-1' /><p>home</p></div>
                        <div className='duration-300 overflow-hidden' style={{ maxHeight: showOverMenu ? "700px" : "0", maxWidth: showOverMenu ? "100px" : "0" }}>
                            <p className='hover:text-blue-500 p-1 m-1'>1</p>
                            <p className='hover:text-blue-500 p-1 m-1'>2</p>
                            <p className='hover:text-blue-500 p-1 m-1'>3</p>
                            <p className='hover:text-blue-500 p-1 m-1'>4</p>
                            <p className='hover:text-blue-500 p-1 m-1'>5</p>
                            <p className='hover:text-blue-500 p-1 m-1'>6</p>
                            <p className='hover:text-blue-500 p-1 m-1'>7</p>
                            <p className='hover:text-blue-500 p-1 m-1'>8</p>
                            <p className='hover:text-blue-500 p-1 m-1'>9</p>
                            <p className='hover:text-blue-500 p-1 m-1'>10</p>
                            <p className='hover:text-blue-500 p-1 m-1'>11</p>
                            <p className='hover:text-blue-500 p-1 m-1'>12</p>
                            <p className='hover:text-blue-500 p-1 m-1'>13</p>
                            <p className='hover:text-blue-500 p-1 m-1'>14</p>
                        </div>
                    </div> */}
                    {/* <p className='px-5 py-2 mx-2 my-5 rounded-md cursor-pointer bg-white hover:bg-slate-100 duration-300'>gallery</p> */}
                    <div style={{display:showOverMenu?"block":"none"}}>
                        <BasicModal name={"gallery"} />
                        <BasicModal name={"about"} />
                        <BasicModal name={"contact"} />
                        <BasicModal name={"portfolio"} />
                    </div>
                    <div style={{display:showOverMenu?"none":"block"}}>
                        <p className='px-5 py-2 mx-2 my-5 cursor-pointer bg-white hover:bg-slate-100 duration-300 rounded-xl'>gallery</p>
                        <p className='px-5 py-2 mx-2 my-5 cursor-pointer bg-white hover:bg-slate-100 duration-300 rounded-xl'>about</p>
                        <p className='px-5 py-2 mx-2 my-5 cursor-pointer bg-white hover:bg-slate-100 duration-300 rounded-xl'>contact</p>
                        <p className='px-5 py-2 mx-2 my-5 cursor-pointer bg-white hover:bg-slate-100 duration-300 rounded-xl'>portfolio</p>
                    </div>
                    {/* <p className='px-5 py-2 mx-2 my-5 rounded-md cursor-pointer bg-white hover:bg-slate-100 duration-300'>about</p>
                    <p className='px-5 py-2 mx-2 my-5 rounded-md cursor-pointer bg-white hover:bg-slate-100 duration-300'>contact</p> */}
                </div>
            </div>
        </div>
    )
}










// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// const options = [
//   'Show some love to MUI',
//   'Show all notification content',
//   'Hide sensitive notification content',
//   'Hide all notification content',
// ];

// export default function SimpleListMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);
//   const open = Boolean(anchorEl);
//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <List
//         component="nav"
//         aria-label="Device settings"
//         sx={{ bgcolor: 'background.paper' }}
//       >
//         <ListItem
//           button
//           id="lock-button"
//           aria-haspopup="listbox"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClickListItem}
//         >
//           <ListItemText
//             primary="When device is locked"
//             secondary={options[selectedIndex]}
//           />
//         </ListItem>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'lock-button',
//           role: 'listbox',
//         }}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             disabled={index === 0}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }
