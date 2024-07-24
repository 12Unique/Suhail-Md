const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349115243510";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_51_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzblErSC9TZGoxYytNMFZveklzZWlBQkZ1bjhJSXVhY1VsU1dIQnFObTk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaQmdiWlljUlFPNjF1OXpJdkZGZlpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNmYWUxMzE2LWQyYzItNDkxOC04YzZmLThlZGY1NjViZjg4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxMTEsXG4gICAgICAxMDMsXG4gICAgICAxNDAsXG4gICAgICAxMDUsXG4gICAgICAzNixcbiAgICAgIDExMCxcbiAgICAgIDExMCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MCxcbiAgICAgIDE0OCxcbiAgICAgIDg3LFxuICAgICAgMjEwLFxuICAgICAgMTU3LFxuICAgICAgMjI3LFxuICAgICAgMTUyLFxuICAgICAgMTM1LFxuICAgICAgMTgzLFxuICAgICAgMjQzLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNCxcbiAgICAgIDUyLFxuICAgICAgODIsXG4gICAgICA3MixcbiAgICAgIDE5NyxcbiAgICAgIDI0MixcbiAgICAgIDY1LFxuICAgICAgNzcsXG4gICAgICAyOCxcbiAgICAgIDMwLFxuICAgICAgMTA2LFxuICAgICAgNTMsXG4gICAgICAyMjksXG4gICAgICA0MyxcbiAgICAgIDE5OSxcbiAgICAgIDE0OCxcbiAgICAgIDExOSxcbiAgICAgIDE1NSxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQzdWS1FHM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNTI0MzUxMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGF3b29kIEFiZHVycmFobWFuXCIsXG4gICAgXCJsaWRcIjogXCIyNDMwOTExNTYwMzM1NzY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMkluWThERUltNWc3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjA2RVV1MWpHbEhnd25yclppOTdmbCtxclg0THVxWVRVNm11clowb091aG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicS9KRU9VdVFtMy8zbzZBa0NzTERNV1JXTzUvZDF3L1FXWW82WEsxZTdhM2pPbzQ5L2wxV0haUnMzcUtjMGVLbVFVUzNsUjBuVHVwZktMVzBad3R4RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielBnRXJCK1d0a01nVEdHcW1OQ0h4bUNxV3hCL1NBWjJsdUFDbmZ6T2dib2lXaENFNDVpNGJIN3pWWmFFZHdueW1qVW9nZmg2NjA0d214N1hyYVl0Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNTI0MzUxMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTgyNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLU1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTVS5qc29uIjogIntcImtleURhdGFcIjpcInhQSExMcUcxT0tJTGtCU1VZaGZiV3lFVVlmak80bWcwZG1nMmVZQ21uRFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM3MjM5OTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MTgyNzAxMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
