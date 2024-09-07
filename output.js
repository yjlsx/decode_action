//Sat Sep 07 2024 15:22:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var url = $request.url,
  updatedUrl = url;
if (url.includes("video/getSource")) updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$14F0342C744893BC5BE2EE7BEFFB0DAFD");else url.includes("video/source") && (updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$14F0342C744893BC5BE2EE7BEFFB0DAFD"));
$done({
  "url": updatedUrl
});