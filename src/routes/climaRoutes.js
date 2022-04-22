const router = require('express').Router()
const puppeteer = require('puppeteer');

router.get('/:cidade', async (req, res) => {
  const cidade = req.params.cidade

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(`https://www.google.com/search?q=clima+${cidade}`)

    const dados = await page.evaluate(() => {
      return {
        temperatura: document.querySelector('#wob_tm').innerText,
        chuva: document.querySelector('#wob_pp').innerText,
        umidade: document.querySelector('#wob_hm').innerText,
        vento: document.querySelector('#wob_ws').innerText,
        data: document.querySelector('#wob_dts').innerText,
        local: document.querySelector('#wob_loc').innerText,
        status: document.querySelector('#wob_dc').innerText
      }
    })

    await browser.close()

    res.send({
      temperatura: dados.temperatura,
      chuva: dados.chuva,
      umidade: dados.umidade,
      vento: dados.vento,
      data: dados.data,
      local: dados.local,
      status: dados.status
    })

  } catch (error) {
    res.send({ error: 'Não foi possível localizar essa cidade, tente novamente.' })
  }
})

module.exports = router