import { generateEndpoints } from "./endPoints";
declare const require : any;

// const baseUrl = 'http://139.59.35.248:8000/'
const baseUrl = 'http://localhost:8000/'

export const environment = {
  production: false,
  appVersion: require('../../package.json').version,
  appEnvironment: 'Dev',
  appName : 'checkMy Result',
  endPoints: generateEndpoints(baseUrl),
};
