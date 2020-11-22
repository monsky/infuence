import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
public elements = [
  {
    name: 'empty circle',
    path: 'url("../../assets/elements/circle.svg")',
    type: 'element',
    url: "../../assets/elements/circle.svg",
    scale: 0.2
  },
  {
    name: 'full circle',
    path: 'url("../../assets/elements/full-circle.svg")',
    type: 'element',
    url: "../../assets/elements/full-circle.svg",
    scale: 0.2
  },
  {
    name: 'square',
    path: 'url("../../assets/elements/square.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/square.svg"
  },
  {
    name: 'full square',
    path: 'url("../../assets/elements/full-square.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/full-square.svg"
  },
  {
    name: 'empty triangle',
    path: 'url("../../assets/elements/empty-triangle.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/empty-triangle.svg"
  },
  {
    name: 'full triangle',
    path: 'url("../../assets/elements/full-triangle.svg")',
    type: 'element',
    scale: 3.5,
    url: "../../assets/elements/full-triangle.svg"
  },
  {
    name: 'heart',
    path: 'url("../../assets/elements/heart.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/heart.svg"
  },
  {
    name: 'full heart',
    path: 'url("../../assets/elements/full-heart.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/full-heart.svg"
  },
  {
    name: 'empty bolt',
    path: 'url("../../assets/elements/bolt.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/bolt.svg"
  },
  {
    name: 'crown',
    path: 'url("../../assets/elements/crown.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/crown.svg"
  },
  {
    name: 'cube',
    path: 'url("../../assets/elements/cube.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/cube.svg"
  },
  {
    name: 'diamond',
    path: 'url("../../assets/elements/diamond.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/diamond.svg"
  },
  {
    name: 'dice1',
    path: 'url("../../assets/elements/dice.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice.svg"
  },
  {
    name: 'dice2',
    path: 'url("../../assets/elements/dice-1.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice-1.svg"
  },
  {
    name: 'dice3',
    path: 'url("../../assets/elements/dice-2.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice-2.svg"
  },
  {
    name: 'dice4',
    path: 'url("../../assets/elements/dice-3.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice-3.svg"
  },
  {
    name: 'dice5',
    path: 'url("../../assets/elements/dice-4.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice-4.svg"
  },
  {
    name: 'dice6',
    path: 'url("../../assets/elements/dice-5.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/dice-5.svg"
  },
  {
    name: 'empty moon',
    path: 'url("../../assets/elements/moon.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/moon.svg"
  },
  {
    name: 'empty star1',
    path: 'url("../../assets/elements/star.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/star.svg"
  },
  {
    name: 'world',
    path: 'url("../../assets/elements/worldwide.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/worldwide.svg"
  },
  {
    name: 'empty puzzle',
    path: 'url("../../assets/elements/puzzle.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/puzzle.svg"
  },
  {
    name: 'joke',
    path: 'url("../../assets/elements/joke.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/joke.svg"
  },
  {
    name: 'smiley1',
    path: 'url("../../assets/elements/smiley.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/smiley.svg"
  },
  {
    name: 'smiley2',
    path: 'url("../../assets/elements/smiley-1.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/smiley-1.svg"
  },
  {
    name: 'sad',
    path: 'url("../../assets/elements/sad.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/sad.svg"
  },
  {
    name: 'straight',
    path: 'url("../../assets/elements/straight.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/straight.svg"
  },
  {
    name: 'surprise circle',
    path: 'url("../../assets/elements/surprise.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/surprise.svg"
  },
  {
    name: 'mars',
    path: 'url("../../assets/elements/mars.svg")',
    type: 'element',
    scale: 0.2,
    url: "../../assets/elements/mars.svg"
  },
  {
    name: 'venus',
    path: 'url("../../assets/elements/venus.svg")',
    type: 'element',
    scale: 0.2,
    url: '../../assets/elements/venus.svg'
  },
];

public emoji = [
  {
    name: 'wink',
    path: 'url("../../assets/emoji/wink.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/wink.svg'
  },
  {
    name: 'biceps',
    path: 'url("../../assets/emoji/biceps.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/biceps.svg'
  },
  {
    name: 'birthday',
    path: 'url("../../assets/emoji/birthday.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/birthday.svg'
  },
  {
    name: 'cherries',
    path: 'url("../../assets/emoji/cherries.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/cherries.svg'
  },
  {
    name: 'crown',
    path: 'url("../../assets/emoji/crown.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/crown.svg'
  },
  {
    name: 'crying',
    path: 'url("../../assets/emoji/crying.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/crying.svg'
  },
  {
    name: 'dizzy',
    path: 'url("../../assets/emoji/dizzy.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/dizzy.svg'
  },
  {
    name: 'eyes',
    path: 'url("../../assets/emoji/eyes.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/eyes.svg'
  },
  {
    name: 'fire',
    path: 'url("../../assets/emoji/fire.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/fire.svg'
  },
  {
    name: 'grimace',
    path: 'url("../../assets/emoji/grimace.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/grimace.svg'
  },
  {
    name: 'heart-eyes',
    path: 'url("../../assets/emoji/heart-eyes.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/heart-eyes.svg'
  },
  {
    name: 'hug',
    path: 'url("../../assets/emoji/hug.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/hug.svg'
  },
  {
    name: 'hundred',
    path: 'url("../../assets/emoji/hundred.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/hundred.svg'
  },
  {
    name: 'joy',
    path: 'url("../../assets/emoji/joy.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/joy.svg'
  },
  {
    name: 'kiss',
    path: 'url("../../assets/emoji/kiss.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/kiss.svg'
  },
  {
    name: 'kiss-blush',
    path: 'url("../../assets/emoji/kiss-blush.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/kiss-blush.svg'
  },
  {
    name: 'party-popper',
    path: 'url("../../assets/emoji/party-popper.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/party-popper.svg'
  },
  {
    name: 'poo',
    path: 'url("../../assets/emoji/poo.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/poo.svg'
  },
  {
    name: 'pray',
    path: 'url("../../assets/emoji/pray.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/pray.svg'
  },
  {
    name: 'raised-hands',
    path: 'url("../../assets/emoji/raised-hands.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/raised-hands.svg'
  },
  {
    name: 'red-heart',
    path: 'url("../../assets/emoji/red-heart.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/red-heart.svg'
  },
  {
    name: 'see-no-evil',
    path: 'url("../../assets/emoji/see-no-evil.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/see-no-evil.svg'
  },
  {
    name: 'smile-blush',
    path: 'url("../../assets/emoji/smile-blush.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/smile-blush.svg'
  },
  {
    name: 'smile-hearts',
    path: 'url("../../assets/emoji/smile-hearts.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/smile-hearts.svg'
  },
  {
    name: 'star-struck',
    path: 'url("../../assets/emoji/star-struck.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/star-struck.svg'
  },
  {
    name: 'sunglasses',
    path: 'url("../../assets/emoji/sunglasses.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/sunglasses.svg'
  },
  {
    name: 'thumbs-up',
    path: 'url("../../assets/emoji/thumbs-up.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/thumbs-up.svg'
  },
  {
    name: 'tongue',
    path: 'url("../../assets/emoji/tongue.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/tongue.svg'
  },
  {
    name: 'trophy',
    path: 'url("../../assets/emoji/trophy.svg")',
    scale: 0.5,
    type: 'emoji',
    url: '../../assets/emoji/trophy.svg'
  },
  {
    name: 'victory',
    path: 'url("../../assets/emoji/victory.svg")',
    scale: 0.5,
    type: 'emoji',
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
