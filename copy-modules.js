const { exec } = require("child_process");
const fs = require("fs");

const modules = ["exchange_currency"];

modules.forEach((module) => {
  if (fs.existsSync(`./${module}`)) {
    exec(`robocopy ${module} build\\${module} /E`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error copying ${module}:`, error);
        return;
      }
      console.log(`Copied ${module} successfully.`);
    });
  } else {
    console.warn(`Module ${module} does not exist.`);
  }
});
