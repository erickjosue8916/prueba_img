const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const request = require('request')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', async (req, res) => {

    res.format({
        'image/jpg': async function() {
            res.redirect('https://www.appsheet.com/get/?i=YXBwTmFtZT1UQ0VQcm9qZWN0cy1UZXN0LTEzMDgyMjAmVGFibGVOYW1lPUV4cGVuc2VzTGluZSZmaWxlTmFtZT1FeHBlbnNlc0xpbmVfSW1hZ2VzJTJGZjFmZDlmMWUuUmVjZWlwdC4yMjM4MTEuanBnJmFwcFZlcnNpb249MS4wMDAxMjI=&w=200');
        }
    })
})

app.listen(port, console.log(`Server running on port ${port}`))