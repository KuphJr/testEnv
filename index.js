const envEnc = require('@chainlink/env-enc')
envEnc.config()
console.log(process.env['MY_KEY'])
console.log(process.env['ENV_ENC_PASSWORD'])