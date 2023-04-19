const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  }

  return gifts
}

wrapGifts(gifts)

function writeCards(names, event) {
    const completedCards = []
    for (let i = 0; i < names.length; i++) {
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return completedCards
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--)
    }
}