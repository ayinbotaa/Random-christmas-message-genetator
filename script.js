const christmasText = document.querySelector('.christmas-message');
const btn = document.querySelector('.change-quote-btn');

let arr = [
  'Merry Christmas! Wishing you all the happiness your holiday can hold! May your holidays sparkle with joy and laughter',
  'I hope the magic of Christmas fills every corner of your heart and home with joy — now and always.',
  "Wishing you a Christmas that's merry and bright! I hope you have a safe and relaxing holiday season.",
  "Wishing you a season that is merry and bright with the light of God's Love",
  "You're the most magical part of the most wonderful time of the year, Merry Christmas!",
  "Even though we're apart, I'm sending you a special wish, a holiday hug and a mistletoe kiss!",
  'Far apart during this holiday, but totally together in our hearts and minds. Sending a smile across the miles for a wonderful Christmas!',
  'Merry Christmas! I hope you receive one blessing after another this coming year.',
  'Joy and blessings, from my family to yours, this christmas and everyday',
  "May your stress be few and your exclamations be: 'Woo!' Merry Christmas!",
  'All my blessings and good wishes to you and your wonderful family. May Jesus coming this year once again bring joy to your home.',
  'May your cup over-flow with love, peace, joy and pure awesomeness. Merry Christmas!',
  'Merry Christmas and happy holidays🎅🏼🎄',
  'Merry be your Christmas❄️ Peaceful be your home❄️ Joyful be your family❄️ Blessed be each one❄️',
  'Warmest thoughts and best wishes for a wonderful Christmas and a Happy New Year. May love, peace and prosperity follow you always!',
  'Merry Christmas! May this Christmas season be full of new hopes and dreams for you.',
  "It's people like you that make Christmas so special and meaninful. Merry Christmas🎄",
  'As my Christmas present to you, i recommend you watch the movie "The christmas Calendar". \nMerry Christmas!🎄🥂',
  "'For i know the plans i have for you' says the Lord. Plans to prosper you and not to hharm you. Plans to give you hope and a futre. Merry Christmas!",
  'My wish for christmas is that whoever is reading this be healthy, happy, loved and blessed. Merry Christmas!',
];

btn.addEventListener('click', function () {
  let randomQuote = Math.floor(Math.random() * arr.length);
  christmasText.textContent = arr[randomQuote];
});
