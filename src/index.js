import { WechatyBuilder } from 'wechaty'
import { WechatyWebPanelPlugin } from 'wechaty-web-panel'

const name = 'wechat-assistant-pro';
let bot = '';


console.log('默认使用uos web版微信协议')
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppetOptions: {
        uos: true
    },
    puppet: 'wechaty-puppet-wechat',
});


bot.use(
        WechatyWebPanelPlugin({
            apiKey: 'cd14161840b28b31f319fcae68313bda4ba78564',
            apiSecret: '772c7dd30c0e0a22d1c4b21d9769f52cbc8541eb',
        })
    )
bot.start()
    .catch((e) => console.error(e));

