module.exports.config = {
  name: "anime2", 
  version: "1.0.0", 
  hasPermission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
  description: "example",
 usePrefix: false,
  commandCategory: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["~RANDOM ANIME VIDEO~"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1-5ySZza9gL2EMiyb9ro_qy_JP_egBUHi",
    "https://drive.google.com/uc?id=1-A5cxY9NV7GxqlMoItAsZyYG4xKTDvRS",
    "https://drive.google.com/uc?id=1-5ySZza9gL2EMiyb9ro_qy_JP_egBUHi",
    "https://drive.google.com/uc?id=1-71QF5wQaQy6N_JFVRYbHeKJxRX6ryXp",
    "https://drive.google.com/uc?id=16BVDbEXqihhNQd2iVmZ4ZXkcvZ-ZtmfJ",
    "https://drive.google.com/uc?id=16UqkKkXtR4ZpF8-GkvgvmdmOkICD9NS5",
    "https://drive.google.com/uc?id=16UbxxGQ2_PmTVuyWsTDuP4F4uAfxye0C"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   }
