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
