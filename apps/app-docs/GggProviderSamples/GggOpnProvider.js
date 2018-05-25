// https://github.com/sindresorhus/opn
const opn = require('opn');
function opnOptionsSample() {
    // Opens the image in the default image viewer
    opn('unicorn.png').then(() => {
        // image viewer closed
    });

    // Opens the url in the default browser
    opn('http://gamegogo.org');

    // Specify the app to open in
    opn('http://gamegogo.org', { app: 'firefox' });

    // Specify app arguments
    opn('http://gamegogo.org', { app: ['google chrome', '--incognito'] });
}