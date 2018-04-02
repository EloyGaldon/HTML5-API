var gulp=require('gulp');
var browserSync=require('browser-sync');

gulp.task('default',['browser']);

gulp.task('browser',function(){
    browserSync.init({
        server:{
            basedir: "./"
        }
    })
})

gulp.watch(['index.html','*/*.js']).on('change',function(){
    browserSync.reload();

})