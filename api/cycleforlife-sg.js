export default async function handler(request, response) {
  const fetch = require('node-fetch')
  fetch('https://serverless-cors.vercel.app/api/cors?url=https://www.cycleforhope.sg/user/188908')
      .then(r => r.text())
      .then(raw => parse(raw))
      .then(root => root.querySelectorAll('div.w-full.rounded-md.border.py-2.border-gray-400'))
      .then(cards => cards.map(card => ({
          name: card.querySelector('p:nth-of-type(1)').textContent,
          amount: card.querySelector('p:nth-of-type(2) span').textContent,
          message: card.querySelector('p:nth-of-type(3)').textContent,
      })))
      .then(json => response.send(json))
}
