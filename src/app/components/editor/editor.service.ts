import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
public elements = [
  {
    name: 'empty circle',
    path: 'url("../../assets/elements/circle.svg")',
    url: "../../assets/elements/circle.svg"
  },
  {
    name: 'full circle',
    path: 'url("../../assets/elements/full-circle.svg")',
    url: "../../assets/elements/full-circle.svg"
  },
  {
    name: 'square',
    path: 'url("../../assets/elements/square.svg")',
    url: "../../assets/elements/square.svg"
  },
  {
    name: 'full square',
    path: 'url("../../assets/elements/full-square.svg")',
    url: "../../assets/elements/full-square.svg"
  },
  {
    name: 'empty triangle',
    path: 'url("../../assets/elements/empty-triangle.svg")',
    url: "../../assets/elements/empty-triangle.svg"
  },
  {
    name: 'full triangle',
    path: 'url("../../assets/elements/full-triangle.svg")',
    url: "../../assets/elements/full-triangle.svg"
  },
  {
    name: 'heart',
    path: 'url("../../assets/elements/heart.svg")',
    url: "../../assets/elements/heart.svg"
  },
  {
    name: 'full heart',
    path: 'url("../../assets/elements/full-heart.svg")',
    url: "../../assets/elements/full-heart.svg"
  },
  {
    name: 'empty bolt',
    path: 'url("../../assets/elements/bolt.svg")',
    url: "../../assets/elements/bolt.svg"
  },
  {
    name: 'crown',
    path: 'url("../../assets/elements/crown.svg")',
    url: "../../assets/elements/crown.svg"
  },
  {
    name: 'cube',
    path: 'url("../../assets/elements/cube.svg")',
    url: "../../assets/elements/cube.svg"
  },
  {
    name: 'diamond',
    path: 'url("../../assets/elements/diamond.svg")',
    url: "../../assets/elements/diamond.svg"
  },
  {
    name: 'dice1',
    path: 'url("../../assets/elements/dice.svg")',
    url: "../../assets/elements/dice.svg"
  },
  {
    name: 'dice2',
    path: 'url("../../assets/elements/dice-1.svg")',
    url: "../../assets/elements/dice-1.svg"
  },
  {
    name: 'dice3',
    path: 'url("../../assets/elements/dice-2.svg")',
    url: "../../assets/elements/dice-2.svg"
  },
  {
    name: 'dice4',
    path: 'url("../../assets/elements/dice-3.svg")',
    url: "../../assets/elements/dice-3.svg"
  },
  {
    name: 'dice5',
    path: 'url("../../assets/elements/dice-4.svg")',
    url: "../../assets/elements/dice-4.svg"
  },
  {
    name: 'dice6',
    path: 'url("../../assets/elements/dice-5.svg")',
    url: "../../assets/elements/dice-5.svg"
  },
  {
    name: 'empty moon',
    path: 'url("../../assets/elements/moon.svg")',
    url: "../../assets/elements/moon.svg"
  },
  {
    name: 'empty star1',
    path: 'url("../../assets/elements/star.svg")',
    url: "../../assets/elements/star.svg"
  },
  {
    name: 'world',
    path: 'url("../../assets/elements/worldwide.svg")',
    url: "../../assets/elements/worldwide.svg"
  },
  {
    name: 'empty puzzle',
    path: 'url("../../assets/elements/puzzle.svg")',
    url: "../../assets/elements/puzzle.svg"
  },
  {
    name: 'joke',
    path: 'url("../../assets/elements/joke.svg")',
    url: "../../assets/elements/joke.svg"
  },
  {
    name: 'smiley1',
    path: 'url("../../assets/elements/smiley.svg")',
    url: "../../assets/elements/smiley.svg"
  },
  {
    name: 'smiley2',
    path: 'url("../../assets/elements/smiley-1.svg")',
    url: "../../assets/elements/smiley-1.svg"
  },
  {
    name: 'sad',
    path: 'url("../../assets/elements/sad.svg")',
    url: "../../assets/elements/sad.svg"
  },
  {
    name: 'straight',
    path: 'url("../../assets/elements/straight.svg")',
    url: "../../assets/elements/straight.svg"
  },
  {
    name: 'surprise circle',
    path: 'url("../../assets/elements/surprise.svg")',
    url: "../../assets/elements/surprise.svg"
  },
  {
    name: 'mars',
    path: 'url("../../assets/elements/mars.svg")',
    url: "../../assets/elements/mars.svg"
  },
  {
    name: 'venus',
    path: 'url("../../assets/elements/venus.svg")',
    url: '../../assets/elements/venus.svg'
  },
];

public emoji = [
  {
    name: 'wink',
    path: 'url("../../assets/emoji/wink.svg")',
    url: '../../assets/emoji/wink.svg'
  },
  {
    name: 'biceps',
    path: 'url("../../assets/emoji/biceps.svg")',
    url: '../../assets/emoji/biceps.svg'
  },
  {
    name: 'birthday',
    path: 'url("../../assets/emoji/birthday.svg")',
    url: '../../assets/emoji/birthday.svg'
  },
  {
    name: 'cherries',
    path: 'url("../../assets/emoji/cherries.svg")',
    url: '../../assets/emoji/cherries.svg'
  },
  {
    name: 'crown',
    path: 'url("../../assets/emoji/crown.svg")',
    url: '../../assets/emoji/crown.svg'
  },
  {
    name: 'crying',
    path: 'url("../../assets/emoji/crying.svg")',
    url: '../../assets/emoji/crying.svg'
  },
  {
    name: 'dizzy',
    path: 'url("../../assets/emoji/dizzy.svg")',
    url: '../../assets/emoji/dizzy.svg'
  },
  {
    name: 'eyes',
    path: 'url("../../assets/emoji/eyes.svg")',
    url: '../../assets/emoji/eyes.svg'
  },
  {
    name: 'fire',
    path: 'url("../../assets/emoji/fire.svg")',
    url: '../../assets/emoji/fire.svg'
  },
  {
    name: 'grimace',
    path: 'url("../../assets/emoji/grimace.svg")',
    url: '../../assets/emoji/grimace.svg'
  },
  {
    name: 'heart-eyes',
    path: 'url("../../assets/emoji/heart-eyes.svg")',
    url: '../../assets/emoji/heart-eyes.svg'
  },
  {
    name: 'hug',
    path: 'url("../../assets/emoji/hug.svg")',
    url: '../../assets/emoji/hug.svg'
  },
  {
    name: 'hundred',
    path: 'url("../../assets/emoji/hundred.svg")',
    url: '../../assets/emoji/hundred.svg'
  },
  {
    name: 'joy',
    path: 'url("../../assets/emoji/joy.svg")',
    url: '../../assets/emoji/joy.svg'
  },
  {
    name: 'kiss',
    path: 'url("../../assets/emoji/kiss.svg")',
    url: '../../assets/emoji/kiss.svg'
  },
  {
    name: 'kiss-blush',
    path: 'url("../../assets/emoji/kiss-blush.svg")',
    url: '../../assets/emoji/kiss-blush.svg'
  },
  {
    name: 'party-popper',
    path: 'url("../../assets/emoji/party-popper.svg")',
    url: '../../assets/emoji/party-popper.svg'
  },
  {
    name: 'poo',
    path: 'url("../../assets/emoji/poo.svg")',
    url: '../../assets/emoji/poo.svg'
  },
  {
    name: 'pray',
    path: 'url("../../assets/emoji/pray.svg")',
    url: '../../assets/emoji/pray.svg'
  },
  {
    name: 'raised-hands',
    path: 'url("../../assets/emoji/raised-hands.svg")',
    url: '../../assets/emoji/raised-hands.svg'
  },
  {
    name: 'red-heart',
    path: 'url("../../assets/emoji/red-heart.svg")',
    url: '../../assets/emoji/red-heart.svg'
  },
  {
    name: 'see-no-evil',
    path: 'url("../../assets/emoji/see-no-evil.svg")',
    url: '../../assets/emoji/see-no-evil.svg'
  },
  {
    name: 'smile-blush',
    path: 'url("../../assets/emoji/smile-blush.svg")',
    url: '../../assets/emoji/smile-blush.svg'
  },
  {
    name: 'smile-hearts',
    path: 'url("../../assets/emoji/smile-hearts.svg")',
    url: '../../assets/emoji/smile-hearts.svg'
  },
  {
    name: 'star-struck',
    path: 'url("../../assets/emoji/star-struck.svg")',
    url: '../../assets/emoji/star-struck.svg'
  },
  {
    name: 'sunglasses',
    path: 'url("../../assets/emoji/sunglasses.svg")',
    url: '../../assets/emoji/sunglasses.svg'
  },
  {
    name: 'thumbs-up',
    path: 'url("../../assets/emoji/thumbs-up.svg")',
    url: '../../assets/emoji/thumbs-up.svg'
  },
  {
    name: 'tongue',
    path: 'url("../../assets/emoji/tongue.svg")',
    url: '../../assets/emoji/tongue.svg'
  },
  {
    name: 'trophy',
    path: 'url("../../assets/emoji/trophy.svg")',
    url: '../../assets/emoji/trophy.svg'
  },
  {
    name: 'victory',
    path: 'url("../../assets/emoji/victory.svg")',
    url: '../../assets/emoji/victory.svg'
  },
]

public fonts = [
  "Lato",
  "Roboto",
  "Oswald",
  "Dancing Script",
  "Indie Flower",
  "Fondamento",
  "Permanent Marker",
  "Great Vibes",
  "Sacramento",
  "Amatic SC",
  "Lateef",
  "Comic Neue",
  "Inconsolata",
  "Share Tech Mono",
  "VT323",
  "Major Mono Display",
  "Playfair Display",
  "Cormorant Garamond",
  "Cinzel",
  "Ultra",
];

  constructor() { }
}
