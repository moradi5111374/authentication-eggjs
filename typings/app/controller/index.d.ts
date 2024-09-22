// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAuth = require('../../../app/controller/auth');
import ExportBase = require('../../../app/controller/base');
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    base: ExportBase;
    home: ExportHome;
  }
}
