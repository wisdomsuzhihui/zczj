"use strict";

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  fs = require('fs'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  mongoStore = require('connect-mongo')(session),
  http = require('http'),

  port = process.env.PORT || 3000,
  app = express(),

  dbUrl = 'mongodb://127.0.0.1/douban';

mongoose.connect(dbUrl);