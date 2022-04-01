// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number { return x + y; };
//可选参数和默认参数
/**
 *
 * @param firstName
 * @param lastName
 * @returns
 * ts中传递给函数中的参数个数必须与函数声明中的参数个数保持一致(不可多不可少)，可以传递undefined,null,只是个数需要保持一致
 *
 * ts实现可选参数，在参数后面加?,没传的参数值为undefined,必选参数不能声明在可选参数后面。
 *
 * 默认初始化值的参数与可选参数共享参数类型，但是默认初始化参数不需要放在必须参数的后面，写在前面的必须传入undefined来获取默认初始化值
 */
// function buildName(firstName: string, lastName = 'sume'){
//     return firstName + "" + lastName;
// }
// let result1 = buildName("bobo",undefined)
// console.log(result1);
/**
 * 剩余参数
 * 使用...扩展运算符,将所有剩余参数收集到一个变量中 ...restOfName
 * 在函数定义中也可以使用  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
 */
// function buildName(firstName:string, ...restOfName: string[]) {
//     return firstName + '' + restOfName.join('')
// }
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// console.log(buildNameFun );
/**
 * this与箭头函数
 * this来自对象字面量里的函数表达式。 修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面
 */
//  interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
/**
 * 重载
 * 根据传入不同的参数，返回不同的类型的数据
 * 为同一个函数提供多个函数类型定义进行重载，编译器根据函数类型列表去处理函数调用
 * 使用重载，调用时只能用函数类型列表中的类型，否则报错
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];
//any不在重载中
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
