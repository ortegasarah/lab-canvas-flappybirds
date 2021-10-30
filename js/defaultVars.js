/**
 * archivo para variables que utiliza mi video juego
 */


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let frames = 0;
const gravity = 0.1;

//array Pipes
let pipes = []

let points = 0;
let diff = 1;
let resquestId;

const audio = new Audio()


let player {
    vida: 3,
    status: "pequeno",
    moneda: 0
}