let axios = require("axios")

let getMames = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let createMeme = async function (req, res) {
    try {
        let text0 = req.query.text0
        let text1 = req.query.text1

        console.log(`body is : ${text0} ,${text1} `)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=87743020&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
            data: text0 ,
            data: text1
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getMames = getMames
module.exports.createMeme = createMeme