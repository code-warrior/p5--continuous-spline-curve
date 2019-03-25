const { watch } = require(`gulp`);
const browserSync = require(`browser-sync`);

let serve = () => {
    browserSync({
        notify: true,
        server: { baseDir: `./` }
    });

    watch(`./**/*.html`).on(`change`, browserSync.reload);
    watch(`./css/**/*.css`).on(`change`, browserSync.reload);
    watch(`./js/**/*.js`).on(`change`, browserSync.reload);
};

exports.default = serve;
