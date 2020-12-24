const crypto = require('crypto');
const fs = require('fs');


crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log(`salt : ${salt}`);

    crypto.pbkdf2('123456', salt, 100000, 64, 'sha512', (err, key) => {
        const password = `비밀번호 : ${key.toString('base64')}`;

        fs.writeFile('비밀번호.txt', password, () => {
            console.log(password);
        });
    });
});