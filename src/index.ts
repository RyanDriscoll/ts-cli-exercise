#! /usr/bin/env node
import fs from 'fs';

export function getFileContents(path: string) {
  const file = fs.readFileSync(path);
  return file.toString();
}

export function getOptions() {
  const flags = process.argv.slice(2);
  const options: Record<string, string | boolean> = {};
  flags.forEach((flag) => {
    const match = flag.match(new RegExp(/--(\w+)/));
    if (match && match[1]) {
      const key = match[1];
      options[key] = flag.startsWith(`--${key}=`) ? flag.split(`--${key}=`)[1] : true;
    }
  });

  return options;
}
