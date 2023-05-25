/* CST8334-SOLITAIRE

*/

// DECLARE VARIABLES

    // create card deck
    var deck = {
        // card back
        back: [], 
       
        // card faces
        cards: []
    };

    // create stock pile
    var stock = [];

    // create waste pile
    var waste = []; 
    
    // create foundation piles
    var clubs = [];   
    var hearts = [];
    var spades = [];
    var diamonds = [];

    // create tableau piles
    var tableau_1 = [];
    var tableau_2 = [];
    var tableau_3 = [];
    var tableau_4 = [];
    var tableau_5 = [];
    var tableau_6 = [];
    var tableau_7 = [];

    // create document variables
    var deckList = document.getElementById("deckList");
    var shuffledList = document.getElementById("shuffledList");
    var stocklist = document.getElementById("stockList");
    var wastelist = document.getElementById("wasteList");
    var clubslist = document.getElementById("clubsList");
    var heartsList = document.getElementById("heartsList");
    var spadeslist = document.getElementById("spadesList");
    var diamondslist = document.getElementById("diamondsList");
    var tableau1list = document.getElementById("tableau1List");
    var tableau2list = document.getElementById("tableau2List");
    var tableau3list = document.getElementById("tableau3List");
    var tableau4list = document.getElementById("tableau4List");
    var tableau5list = document.getElementById("tableau5List");
    var tableau6list = document.getElementById("tableau6List");
    var tableau7list = document.getElementById("tableau7List");

// GAME PLAY

    // ** Testing **
    console.log("tableau_1.length: " + tableau_1.length)
    console.log("tableau_2.length: " + tableau_2.length)
    console.log("tableau_3.length: " + tableau_3.length)
    console.log("tableau_4.length: " + tableau_4.length)
    console.log("tableau_5.length: " + tableau_5.length)
    console.log("tableau_6.length: " + tableau_6.length)
    console.log("tableau_7.length: " + tableau_7.length)
    console.log("stock.length: " + stock.length)
    console.log("deck.cards.length: " + deck.cards.length)

    // Create Deck
    create(deck);

    // ** Testing **
    //display_cards(deck.cards, "deck");
    console.log("deck.cards.length: " + deck.cards.length)

    // Shuffle
    shuffle(deck);

    // ** Testing **
    //display_cards(deck.cards, "shuffle");

    // Deal Cards
    deal(deck);

    // Display Cards
    display_cards(stock, "stock");
    display_cards(tableau_1, "tableau_1"); 
    display_cards(tableau_2, "tableau_2"); 
    display_cards(tableau_3, "tableau_3");
    display_cards(tableau_4, "tableau_4");
    display_cards(tableau_5, "tableau_5");
    display_cards(tableau_6, "tableau_6");
    display_cards(tableau_7, "tableau_7");

    // ** Testing **
    console.log("tableau_1.length: " + tableau_1.length)
    console.log("tableau_2.length: " + tableau_2.length)
    console.log("tableau_3.length: " + tableau_3.length)
    console.log("tableau_4.length: " + tableau_4.length) 
    console.log("tableau_5.length: " + tableau_5.length)
    console.log("tableau_6.length: " + tableau_6.length)
    console.log("tableau_7.length: " + tableau_7.length)
    console.log("stock.length: " + stock.length)
    console.log("waste.length: " + waste.length)
    console.log("deck.cards.length: " + deck.cards.length)  


// FUNCTIONS

// create deck
function create(deck) {
    deck.back = [
        {   // card_back (deck.back)
            rank: 0,
            image: "images/cards/card_back.png"
        },
    ];
    deck.cards = [
        // Aces
        {   // card_0 (deck.cards[0])
            card_number: 0,
            rank: 1,
            value: "A",
            suit: "club",
            colour: "black",
            image: "../images/cards/card_0.png"
        },
        {   // card_1 (deck.cards[1])
            card_number: 1,
            rank: 1,
            value: "A",
            suit: "heart",
            colour: "red",
            image: "../images/cards/card_1.png"
        },
        {   // card_2 (deck.cards[2])
            card_number: 2,
            rank: 1,
            value: "A",
            suit: "spade",
            colour: "black",
            image: "../images/cards/card_2.png"
        },
        {   // card_3 (deck.cards[3])
            card_number: 3,
            rank: 1,
            value: "A",
            suit: "diamond",
            colour: "red",
            image: "../images/cards/card_3.png"
        },

            // Two's
            {   // card_4 (deck.cards[4])
                card_number: 4,
                rank: 2,
                value: "2",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_4.png"
            },
            {   // card_5 (deck.cards[5])
                card_number: 5,
                rank: 2,
                value: "2",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_5.png"
            },
            {   // card_6 (deck.cards[6])
                card_number: 6,
                rank: 2,
                value: "2",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_6.png"
            },
            {   // card_7 (deck.cards[7])
                card_number: 7,
                rank: 2,
                value: "2",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_7.png"
            },

            // Three's
            {   // card_8 (deck.cards[8])
                card_number: 8,
                rank: 3,
                value: "3",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_8.png"
            },
            {   // card_9 (deck.cards[9])
                card_number: 9,
                rank: 3,
                value: "3",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_9.png"
            },
            {   // card_10 (deck.cards[10])
                card_number: 10,
                rank: 3,
                value: "3",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_10.png"
            },
            {   // card_11 (deck.cards[11])
                card_number: 11,
                rank: 3,
                value: "3",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_11.png"
            },

            // Four's
            {   // card_12 (deck.cards[12])
                card_number: 12,
                rank: 4,
                value: "4",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_12.png"
            },
            {   // card_13 (deck.cards[13])
                card_number: 13,
                rank: 4,
                value: "4",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_13.png"
            },
            {   // card_14 (deck.cards[14])
                card_number: 14,
                rank: 4,
                value: "4",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_14.png"
            },
            {   // card_15 (deck.cards[15])
                card_number: 15,
                rank: 4,
                value: "4",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_15.png"
            },

            // Five's
            {   // card_16 (deck.cards[16])
                card_number: 16,
                rank: 5,
                value: "5",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_16.png"
            },
            {   // card_17 (deck.cards[17])
                card_number: 17,
                rank: 5,
                value: "5",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_17.png"
            },
            {   // card_18 (deck.cards[18])
                card_number: 18,
                rank: 5,
                value: "5",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_18.png"
            },
            {   // card_19 (deck.cards[19])
                card_number: 19,
                rank: 5,
                value: "5",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_19.png"
            },

            // Six's
            {   // card_20 (deck.cards[20])
                card_number: 20,
                rank: 6,
                value: "6",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_20.png"
            },
            {   // card_21 (deck.cards[21])
                card_number: 21,
                rank: 6,
                value: "6",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_21.png"
            },
            {   // card_22 (deck.cards[22])
                card_number: 22,
                rank: 6,
                value: "6",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_22.png"
            },
            {   // card_23 (deck.cards[23])
                card_number: 23,
                rank: 6,
                value: "6",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_23.png"
            },

            // Seven's
            {   // card_24 (deck.cards[24])
                card_number: 24,
                rank: 7,
                value: "7",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_24.png"
            },
            {   // card_25 (deck.cards[25])
                card_number: 25,
                rank: 7,
                value: "7",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_25.png"
            },
            {   // card_26 (deck.cards[26])
                card_number: 26,
                rank: 7,
                value: "7",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_26.png"
            },
            {   // card_27 (deck.cards[27])
                card_number: 27,
                rank: 7,
                value: "7",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_27.png"
            },

            // Eight's
            {   // card_28 (deck.cards[28])
                card_number: 28,
                rank: 8,
                value: "8",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_28.png"
            },
            {   // card_29 (deck.cards[29])
                card_number: 29,
                rank: 8,
                value: "8",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_29.png"
            },
            {   // card_30 (deck.cards[30])
                card_number: 30,
                rank: 8,
                value: "8",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_30.png"
            },
            {   // card_31 (deck.cards[31])
                card_number: 31,
                rank: 8,
                value: "8",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_31.png"
            },

            // Nine's
            {   // card_32 (deck.cards[32])
                card_number: 32,
                rank: 9,
                value: "9",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_32.png"
            },
            {   // card_33 (deck.cards[33])
                card_number: 33,
                rank: 9,
                value: "9",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_33.png"
            },
            {   // card_34 (deck.cards[34])
                card_number: 34,
                rank: 9,
                value: "9",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_34.png"
            },
            {   // card_35 (deck.cards[35])
                card_number: 35,
                rank: 9,
                value: "9",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_35.png"
            },

            // Ten's
            {   // card_36 (deck.cards[36])
                card_number: 36,
                rank: 10,
                value: "10",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_36.png"
            },
            {   // card_37 (deck.cards[37])
                card_number: 37,
                rank: 10,
                value: "10",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_37.png"
            },
            {   // card_38 (deck.cards[38])
                card_number: 38,
                rank: 10,
                value: "10",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_38.png"
            },
            {   // card_39 (deck.cards[39])
                card_number: 39,
                rank: 10,
                value: "10",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_39.png"
            },

            // Jack's
            {   // card_40 (deck.cards[40])
                card_number: 40,
                rank: 11,
                value: "J",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_40.png"
            },
            {   // card_41 (deck.cards[41])
                card_number: 41,
                rank: 11,
                value: "J",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_41.png"
            },
            {   // card_42 (deck.cards[42])
                card_number: 42,
                rank: 11,
                value: "J",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_42.png"
            },
            {   // card_43 (deck.cards[43])
                card_number: 43,
                rank: 11,
                value: "J",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_43.png"
            },

            // Queen's
            {   // card_44 (deck.cards[44])
                card_number: 44,
                rank: 12,
                value: "Q",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_44.png"
            },
            {   // card_45 (deck.cards[45])
                card_number: 45,
                rank: 12,
                value: "Q",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_45.png"
            },
            {   // card_46 (deck.cards[46])
                card_number: 46,
                rank: 12,
                value: "Q",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_46.png"
            },
            {   // card_47 (deck.cards[47])
                card_number: 47,
                rank: 12,
                value: "Q",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_47.png"
            },

            // King's
            {   // card_48 (deck.cards[48])
                card_number: 48,
                rank: 13,
                value: "K",
                suit: "club",
                colour: "black",
                image: "../images/cards/card_48.png"
            },
            {   // card_49 (deck.cards[49])
                card_number: 49,
                rank: 13,
                value: "K",
                suit: "heart",
                colour: "red",
                image: "../images/cards/card_49.png"
            },
            {   // card_50 (deck.cards[50])
                card_number: 50,
                rank: 13,
                value: "K",
                suit: "spade",
                colour: "black",
                image: "../images/cards/card_50.png"
            },
            {   // card_51 (deck.cards[51])
                card_number: 51,
                rank: 13,
                value: "K",
                suit: "diamond",
                colour: "red",
                image: "../images/cards/card_51.png"
            }
        ];
}

// shuffle deck
function shuffle(deck) {
    for (let i = deck.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = k;
    }
    //document.getElementById("demo").innerHTML = deck.cards.toString();      
}

// print cards (Testing)
function display_cards(cards, destination) {
    
    cards.forEach((card) => {       
        switch(destination) {
            case "stock":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="stock_card(this)">';
                li.innerHTML = card_image;             
                stocklist.appendChild(li);
                break;
            case "waste":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                wastelist.appendChild(li);
                break;
            case "clubs":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '">';
                li.innerHTML = card_image; 
                clubslist.appendChild(li);
                break;
            case "hearts":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '">';
                li.innerHTML = card_image; 
                heartslist.appendChild(li);
                break;
            case "spades":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '">';
                li.innerHTML = card_image; 
                spadeslist.appendChild(li);
                break;
            case "diamonds":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '">';
                li.innerHTML = card_image; 
                diamondslist.appendChild(li);
                break;
            case "tableau_1":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau1list.appendChild(li);
                break;
            case "tableau_2":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau2list.appendChild(li);
                break;
            case "tableau_3":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau3list.appendChild(li);
                break;
            case "tableau_4":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau4list.appendChild(li);
                break;
            case "tableau_5":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau5list.appendChild(li);
                break;
            case "tableau_6":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image; 
                tableau6list.appendChild(li);
                break;
            case "tableau_7":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">'
                li.innerHTML = card_image; 
                tableau7list.appendChild(li);
                break;
        }
    });
    
    //document.getElementById(destination).innerHTML = card_list;
    console.log(destination);
    console.table(cards);
}

// deal game cards
function deal(deck) {
    if (deck.cards.length == 52) {
        // simulate dealing row 1
        tableau_1.push(deck.cards.pop());
        tableau_2.push(deck.cards.pop());
        tableau_3.push(deck.cards.pop());
        tableau_4.push(deck.cards.pop());
        tableau_5.push(deck.cards.pop());
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 2
        tableau_2.push(deck.cards.pop());
        tableau_3.push(deck.cards.pop());
        tableau_4.push(deck.cards.pop());
        tableau_5.push(deck.cards.pop());
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 3            
        tableau_3.push(deck.cards.pop());
        tableau_4.push(deck.cards.pop());
        tableau_5.push(deck.cards.pop());
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 4
        tableau_4.push(deck.cards.pop());
        tableau_5.push(deck.cards.pop());
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 5         
        tableau_5.push(deck.cards.pop());
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 6
        tableau_6.push(deck.cards.pop());
        tableau_7.push(deck.cards.pop());

        // simulate dealing row 7   
        tableau_7.push(deck.cards.pop());

        // remaining cards to stockpile
        stock = deck.cards.splice(0);
    }

}

// play card clicked event
function play_card(listItem) {
    try {
            console.log(listItem.parentNode.index)
            // clicked card image values
            var list_name = listItem.parentNode.parentNode.getAttribute("id");
            console.log(list_name);

            // check foundations
            var top_card_rank = tableau_7.at(-1).rank;
            console.log(top_card_rank);

        listItem.parentNode.parentNode.removeChild(listItem.parentNode);
    } catch (error) {
        console.log(error);
    }
    
}

// stock card clicked event
function stock_card(listItem) {
    try {
        //listItem.parentNode.parentNode.removeChild(listItem.parentNode);
        waste.push(stock.pop());
        display_cards(stock, "stock")
        display_cards(waste, "waste")
    } catch (error) {
        console.log(error);
    }
    
}
