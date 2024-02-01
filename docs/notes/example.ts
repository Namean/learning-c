// import fs from "node:fs";

const fs = {
  readFileSync: function (fileName: string): string {
    return "";
  },
};

function read(fileName: string): string {
  const fileString = fs.readFileSync(fileName).toString();

  return fileString;
}
