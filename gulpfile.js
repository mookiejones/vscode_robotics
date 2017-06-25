const gulp = require('gulp');
const assert = require('assert');
gulp.task('default',()=>{
    gulp.run('test');
});

gulp.task('test', () => {
    assert.equal(1,1,'It Works');
});