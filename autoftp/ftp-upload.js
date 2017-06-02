/**
 * 扩展日期对象
 * 添加时间格式化方法
 */
Date.prototype.Format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1, // 月份
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds() //秒 
  }
  // y出现一次或多次
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 获取SVN提交记录. 并上传add和modify的提交
 */
// 定义模块常量
const exec = require('child_process').exec,
  ftp = require('ftp'),
  fs = require('fs'),
  path = require("path");
// 定义文件和文件夹列表数组
let dirlist = [],
  filelist = [],
  pathName;

// 当前项目名称
pathName = path.resolve('./').split('\\');
pathName = pathName[pathName.length - 1];

// 获取更新列表
// ' + fs.readFileSync("ftpUploadTime.txt", "utf-8") + '
exec('svn diff -r {"' + fs.readFileSync("./autoftp/ftpUploadTime.txt", "utf-8") + '"} --summarize https://realand-zxn/svn/code/' + pathName + ' > ./autoftp/changedfiles.txt', (err, stdout, stderr) => {
  if (err) throw err;
  let files = fs.readFileSync('./autoftp/changedfiles.txt', 'utf-8').split('\r\n')
  files.forEach((item) => {
    // 数组元素不能为空
    if (item !== '') {
      // 判断是否是删除提交 并 筛选Views/statics/skin文件夹
      /**
       * item.replace(new RegExp("^(M|A)\\s+(https:\/\/realand-zxn\/svn\/code\/)" + pathName), '')
       * 将以
       * "M       https://realand-zxn/svn/code/ZCZJ.MainSite/"
       * "A       https://realand-zxn/svn/code/ZCZJ.MainSite/"
       * 开头的替换为空
       */
      if (!/^D\s+/.test(item) && /^(\/(Views|statics|skin))/.test(item.replace(new RegExp("^(M|A)\\s+(https:\/\/realand-zxn\/svn\/code\/)" + pathName), ''))) {

        // 判断是否是文件夹
        if (!/.+\.(css|jpg|png|jpeg|gif|js|json|cshtml)$/.test(item)) {
          dirlist.push(item.replace(/^[^D]\s+/, ''));
        } else {
          filelist.push(item.replace(/^[^D]\s+/, ''));
        }

      }
    }
  })
  /**
   * 上传ftp
   */
  if (filelist.length > 0) {
    let f = new ftp(),
      config = require('./ftp.config.js');
    f.on('ready', function () {
      console.log('开始上传!!');
      // 将时间写入文件中
      fs.writeFile('./autoftp/ftpUploadTime.txt', new Date().Format('yyyy-MM-dd hh:mm:ss'), 'utf-8', function (err) {
        if (err) throw err;
        console.log('上传时间记录完成');
        // 记录完成后将文件提交到SVN服务器上
        exec('svn commit -m "更新上传时间"', (err, stdout, stderr) => {
          if (err) throw err;
        });
      })
      // 创建目录
      dirlist.forEach(function (element) {
        f.mkdir(element.replace(new RegExp("^(https:\/\/realand-zxn\/svn\/code\/)" + pathName), 'test.zczj.com'), true, function (err) {
          if (err) throw err;
          console.log(`${element}  创建完成!`);
          f.end();
        })
      })
      // 文件上传
      filelist.forEach(function (element) {
        f.put(element.replace(new RegExp("^(https:\/\/realand-zxn\/svn\/code)"), 'D:\\work'), element.replace(new RegExp("^(https:\/\/realand-zxn\/svn\/code\/)" + pathName), 'test.zczj.com'), (err) => {
          if (err) throw err;
          console.log(element + '   上传完成!');
          f.end();
        })
      });

    })
    f.on('error', function (err) {
      console.log('FTP连接失败!!');
    })
    // 连接
    f.connect(config);
  } else {
    console.log('没有文件更新,请先提交SVN');
  }
})