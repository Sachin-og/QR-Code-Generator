

import qr from 'qr-image';

import inquirer from 'inquirer';
import fs from "fs";

inquirer
  .prompt([
   {message:"give url:",
   name:"url"}
  ])
  .then((answers) => {
   const url= answers.url;
   var qr_svg = qr.image(url );
   qr_svg.pipe(fs.createWriteStream(`qr-${url.slice(4,10)}.png`));
   
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current 
      console.log("can't render prompt");
    } else {
      // Something else went wrong
      throw error;
      console.log(error);
    }
  });
