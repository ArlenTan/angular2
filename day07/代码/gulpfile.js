// 在gulp中, 不同文件的不同处理方式都可以写成一个个任务
// 最终进行组装形成自动化的构建流程

var gulp = require('gulp');  // 导入gulp
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');


gulp.task('css', function() {
    console.log('这是压缩css的代码');
});

// 读取一个文件到内存, 什么也不做, 把它在输出到另一个目录
gulp.task('copy', function() {
    gulp.src(['a.js', 'b.js'])
    .pipe(gulp.dest('./dist'));
});



gulp.task('html', function() {
    gulp.src(['src/index.html'])
    .pipe(htmlmin({
        collapseWhitespace: true, // 去掉空白字符
        minifyJS: true,//压缩页面JS
        minifyCSS: true,//压缩页面CSS
        removeComments: true//清除HTML注释
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    gulp.src(['src/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});


// run可以让我们把多个任务组织到一起执行
gulp.task('default', function() {

    // 一次性运行
    gulp.run(['html', 'js']);   

    // 监听js文件的变化, 变化后运行copy任务
    gulp.watch(['src/**/*.js'], ['js']);
    gulp.watch(['src/**/*.html'], ['html']);
});
