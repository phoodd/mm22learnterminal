import chalk from 'chalk';
import boxen from 'boxen';

console.log(boxen('stenni lahe kast', {padding: 10, margin: 5, borderColor: 'magentaBright'}));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen('stenni lahe kast', {padding: 1, margin: 1, borderStyle: 'double', borderColor: 'cyan'}));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/

console.log(boxen('stenni lahe kast', {title: 'WOOOOOOOOOOOOOOOOO', titleAlignment: 'center', borderColor: 'red', borderStyle: 'bold'}));
/*
┌────── magical ───────┐
│unicorns love rainbows│
└──────────────────────┘
*/
console.log(boxen('stenni lahe kast', {padding: 1, margin: 10, backgroundColor: 'blue'}));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen('stenni lahe kast', {padding: 1, margin: 1, borderStyle: 'classic'}));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/

console.log(boxen('stenni lahe kast', {title: 'magical', titleAlignment: 'center', borderColor: 'yellow', borderStyle: 'arrow'}));
/*
┌────── magical ───────┐
│unicorns love rainbows│
└──────────────────────┘
*/
