// noinspection ES6ConvertVarToLetConst

/* CST8334-SOLITAIRE

*/

// DECLARE VARIABLES

// create card deck
var deck = {
    // card back
    back: [],

    // card faces
    cards: [],

    // shuffled cards
    shuffled: []
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
var stockList = document.getElementById("stockList");
var wasteList = document.getElementById("wasteList");
var clubsList = document.getElementById("clubsList");
var heartsList = document.getElementById("heartsList");
var spadesList = document.getElementById("spadesList");
var diamondsList = document.getElementById("diamondsList");
var tableau1List = document.getElementById("tableau1List");
var tableau2List = document.getElementById("tableau2List");
var tableau3List = document.getElementById("tableau3List");
var tableau4List = document.getElementById("tableau4List");
var tableau5List = document.getElementById("tableau5List");
var tableau6List = document.getElementById("tableau6List");
var tableau7List = document.getElementById("tableau7List");

// facedown card count
var tableau2Facedown = 1;
var tableau3Facedown = 2;
var tableau4Facedown = 3;
var tableau5Facedown = 4;
var tableau6Facedown = 5;
var tableau7Facedown = 6;

// additional variables
var move_count = 0;
var klondike_score = 0;
var vegas_score = 52


// GAME PLAY

// Create Deck
create(deck);

// Shuffle
shuffle(deck);

// Deal Cards
deal(deck);

// Display Cards
display_cards(stock, "stockList");
display_cards(tableau_1, "tableau1List");
display_cards(tableau_2, "tableau2List");
display_cards(tableau_3, "tableau3List");
display_cards(tableau_4, "tableau4List");
display_cards(tableau_5, "tableau5List");
display_cards(tableau_6, "tableau6List");
display_cards(tableau_7, "tableau7List");

// greeting (alert or html model element?)
//greeting();

// FUNCTIONS


function greeting() {
    alert("CST8334:  SOFTWARE DEVELOPMENT PROJECT:  SOLITAIRE GAME \nINSTRUCTOR: Moe Osman \nSUBMITTED BY: \n" +
        "Hisham Abdelmouneim - 041059881 \nMohammad Abdulla – 040986025 \nRudwan Alkawlani - 041078124 \n" +
        "Abdulkawi Alattab - 041049970 \nBrian Boldt – 040226834 ");
}

// create deck
function create(deck) {
    deck.back = [
        {   // card_back (deck.back)
            rank: 0,
            image: "../images/cards/card_back.png"
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
    deck.shuffled = [...deck.cards];
    for (let i = deck.shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = deck.shuffled[i];
        deck.shuffled[i] = deck.shuffled[j];
        deck.shuffled[j] = k;
    }
}

// deal game cards
function deal(deck) {
    if (deck.shuffled.length == 52) {
        // simulate dealing row 1
        tableau_1.push(deck.shuffled.pop());
        tableau_2.push(deck.shuffled.pop());
        tableau_3.push(deck.shuffled.pop());
        tableau_4.push(deck.shuffled.pop());
        tableau_5.push(deck.shuffled.pop());
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 2
        tableau_2.push(deck.shuffled.pop());
        tableau_3.push(deck.shuffled.pop());
        tableau_4.push(deck.shuffled.pop());
        tableau_5.push(deck.shuffled.pop());
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 3
        tableau_3.push(deck.shuffled.pop());
        tableau_4.push(deck.shuffled.pop());
        tableau_5.push(deck.shuffled.pop());
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 4
        tableau_4.push(deck.shuffled.pop());
        tableau_5.push(deck.shuffled.pop());
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 5
        tableau_5.push(deck.shuffled.pop());
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 6
        tableau_6.push(deck.shuffled.pop());
        tableau_7.push(deck.shuffled.pop());

        // simulate dealing row 7
        tableau_7.push(deck.shuffled.pop());

        // remaining cards to stockpile
        stock = deck.shuffled.splice(0);
    }

}

// display cards
function display_cards(cards, destination) {
    var cards_length = cards.length;
    var counter = 0;

    cards.forEach((card) => {
        switch (destination) {
            case "stockList":
                var li = document.createElement("li");
                var card_image = '<img src="' + deck.back[0].image + '" onclick="stock_card(this); event.stopPropagation()">';
                li.innerHTML = card_image;
                stockList.appendChild(li);
                break;
            case "wasteList":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                wasteList.appendChild(li);
                break;
            case "clubsList":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                clubsList.appendChild(li);
                break;
            case "heartsList":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                heartsList.appendChild(li);
                break;
            case "spadesList":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                spadesList.appendChild(li);
                break;
            case "diamondsList":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                diamondsList.appendChild(li);
                break;
            case "tableau1List":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                tableau1List.appendChild(li);
                break;
            case "tableau2List":
                var li = document.createElement("li");

                //if (counter < cards_length - 1) {
                if (counter < tableau2Facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau2List.appendChild(li);
                counter++;
                break;
            case "tableau3List":
                var li = document.createElement("li");

                if (counter < tableau3Facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau3List.appendChild(li);
                counter++;
                break;
            case "tableau4List":
                var li = document.createElement("li");

                if (counter < tableau4Facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau4List.appendChild(li);
                counter++;
                break;
            case "tableau5List":
                var li = document.createElement("li");

                if (counter < tableau5Facedown){
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau5List.appendChild(li);
                counter++;
                break;
            case "tableau6List":
                var li = document.createElement("li");

                if (counter < tableau6Facedown){
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau6List.appendChild(li);
                counter++;
                break;
            case "tableau7List":
                var li = document.createElement("li");

                if (counter < tableau7Facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">'
                }

                li.innerHTML = card_image;
                tableau7List.appendChild(li);
                counter++;
                break;
            default:
                break;
        }
    });
    /*
    if (destination == "stockList") {
        console.table(cards);
    }
    if (destination == "wasteList") {
        console.table(cards);
    }
    */
}

// play card
function play_card(listItem) {
    try {
        // get listname of clicked image item
        var list_name = listItem.parentNode.parentNode.getAttribute("id");
        var source_array = "";
        var source_list = "";
        var source_multi_selected = false;
        var source_item_num = -1;
        var destination_array = "";
        var destination_list = "";

        var filename = ""

        // get filename (card number)
        var getFilename = function (str) {
            let s = str.substring(str.lastIndexOf('/') + 1);
            filename = s;
            s = s.replace("card_", "");
            s = s.replace(".png", "");
            return s;
        }
        var card_num = getFilename(listItem.src);

        // get card attributes
        var card_rank = deck.cards[card_num].rank;
        var card_suit = deck.cards[card_num].suit;
        var card_value = deck.cards[card_num].value;
        var card_colour = deck.cards[card_num].colour;

        console.log("****** NEW CARD SELECTED******")
        console.log("CARD NUM:" + card_num + "  RANK:" + card_rank + "  VALUE:" + card_value + "  SUIT:" + card_suit + "  COLOUR:" + card_colour);

        // get source array info
        var card_position = -1;
        switch (list_name) {
            case "heartsList":
                source_array = hearts;
                source_list = "heartsList";
                break;
            case "diamondsList":
                source_array = diamonds;
                source_list = "diamondsList";
                break;
            case "spadesList":
                source_array = spades;
                source_list = "spadesList";
                break;
            case "clubsList":
                source_array = clubs;
                source_list = "clubsList";
                break;
            case "wasteList":
                source_array = waste;
                source_list = "wasteList";
                break;
            case "tableau1List":
                source_array = tableau_1;
                source_list = "tableau1List";
                source_item_num = tableau_1.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_1.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau2List":
                source_array = tableau_2;
                source_list = "tableau2List";
                source_item_num = tableau_2.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_2.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau3List":
                source_array = tableau_3;
                source_list = "tableau3List";
                source_item_num = tableau_3.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_2.length - 1) {
                    source_multi_selected = true;
                }
                break;
            case "tableau4List":
                source_array = tableau_4;
                source_list = "tableau4List";
                source_item_num = tableau_4.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_4.length -1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau5List":
                source_array = tableau_5;
                source_list = "tableau5List"
                source_item_num = tableau_5.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_5.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau6List":
                source_array = tableau_6;
                source_list = "tableau6List";
                source_item_num = tableau_6.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_6.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau7List":
                source_array = tableau_7;
                source_list = "tableau7List";
                source_item_num = tableau_7.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau_7.length - 1) {
                    source_multi_selected = true; 
                }
                break;
        }

        //console.log("MULTI:" + source_multi_selected + "  CARD POSITION:" + source_item_num + "  SOURCE TABLEAU LENGTH:" + source_array.length);

        // check foundations
        switch (card_suit) {
            case "heart":
                console.log("CHECKING HEARTS RANK  ...");
                var heart_rank;
                if (hearts.length == 0) {
                    heart_rank = 0;
                } else {
                    heart_rank = hearts.at(-1).rank;
                }

                if (card_rank - heart_rank == 1) {
                    console.log("HEARTS RANK CHECK ...  PASSED");
                    hearts.push(source_array.pop());
                    destination_array = hearts;
                    destination_list = "heartsList";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "diamond":
                console.log("CHECKING DIAMONDS RANK  ...");
                var diamond_rank;
                if (diamonds.length == 0) {
                    diamond_rank = 0;
                } else {
                    diamond_rank = diamonds.at(-1).rank;
                }

                if (card_rank - diamond_rank == 1) {
                    console.log("DIAMONDS RANK CHECK ...  PASSED");
                    diamonds.push(source_array.pop());
                    destination_array = diamonds;
                    destination_list = "diamondsList";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "spade":
                console.log("CHECKING SPADES RANK  ...");
                var spade_rank;
                if (spades.length == 0) {
                    spade_rank = 0;
                } else {
                    spade_rank = spades.at(-1).rank;
                }

                if (card_rank - spade_rank == 1) {
                    console.log("SPADES RANK CHECK ...  PASSED");
                    spades.push(source_array.pop());
                    destination_array = spades;
                    destination_list = "spadesList";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "club":
                console.log("CHECKING CLUBS RANK  ...");
                var club_rank;
                if (clubs.length == 0) {
                    club_rank = 0;
                } else {
                    club_rank = clubs.at(-1).rank;
                }

                if (card_rank - club_rank == 1) {
                    console.log("CLUBS RANK CHECK ...  PASSED");
                    clubs.push(source_array.pop());
                    destination_array = clubs;
                    destination_list = "clubsList";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
        }

        // check tableau_1
        if (tableau_1.length != 0) {
            console.log("CHECKING TABLEAU 1 RANK AND COLOUR ...");
            var t1_rank = tableau_1.at(-1).rank;
            var t1_colour = tableau_1.at(-1).colour;
            if (t1_rank - card_rank == 1) {
                console.log("TABLEAU 1 - RANK CHECK ... PASSED");
                if (card_colour != t1_colour) {
                    console.log("TABLEAU 1 - COLOUR CHECK ... PASSED");
                    //tableau_1.push(source_array.pop());
                    tableau_1.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_1;
                    destination_list = "tableau1List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 1 - KING TO POSITION 1 ... PASSED");
                //tableau_1.push(source_array.pop());
                tableau_1.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_1;
                destination_list = "tableau1List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_2
        if (tableau_2.length != 0) {
            console.log("CHECKING TABLEAU 2 RANK AND COLOUR ...");
            var t2_rank = tableau_2.at(-1).rank;
            var t2_colour = tableau_2.at(-1).colour;
            if (t2_rank - card_rank == 1) {
                console.log("TABLEAU 2 - RANK CHECK ... PASSED");
                if (card_colour != t2_colour) {
                    console.log("TABLEAU 2 - COLOUR CHECK ... PASSED");
                    //tableau_2.push(source_array.pop());
                    tableau_2.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_2;
                    destination_list = "tableau2List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 2 - KING TO POSITION 1 ... PASSED");
                //tableau_2.push(source_array.pop());
                tableau_2.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_2;
                destination_list = "tableau2List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_3
        if (tableau_3.length != 0) {
            console.log("CHECKING TABLEAU 3 RANK AND COLOUR ...");
            var t3_rank = tableau_3.at(-1).rank;
            var t3_colour = tableau_3.at(-1).colour;
            if (t3_rank - card_rank == 1) {
                console.log("TABLEAU 3 - RANK CHECK ... PASSED");
                if (card_colour != t3_colour) {
                    console.log("TABLEAU 3 - COLOUR CHECK ... PASSED");
                    //tableau_3.push(source_array.pop());
                    tableau_3.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_3;
                    destination_list = "tableau3List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 3 - KING TO POSITION 1 ... PASSED");
                //tableau_3.push(source_array.pop());
                tableau_3.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_3;
                destination_list = "tableau3List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_4
        if (tableau_4.length != 0) {
            console.log("CHECKING TABLEAU 4 RANK AND COLOUR ...");
            var t4_rank = tableau_4.at(-1).rank;
            var t4_colour = tableau_4.at(-1).colour;
            if (t4_rank - card_rank == 1) {
                console.log("TABLEAU 4 - RANK CHECK ... PASSED");
                if (card_colour != t4_colour) {
                    console.log("TABLEAU 4 - COLOUR CHECK ... PASSED");
                    //tableau_4.push(source_array.pop());
                    tableau_4.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_4;
                    destination_list = "tableau4List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 4 - KING TO POSITION 1 ... PASSED");
                //tableau_4.push(source_array.pop());
                tableau_4.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_4;
                destination_list = "tableau4List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_5
        if (tableau_5.length != 0) {
            console.log("CHECKING TABLEAU 5 RANK AND COLOUR ...");
            var t5_rank = tableau_5.at(-1).rank;
            var t5_colour = tableau_5.at(-1).colour;
            if (t5_rank - card_rank == 1) {
                console.log("TABLEAU 5 - RANK CHECK ... PASSED");
                if (card_colour != t5_colour) {
                    console.log("TABLEAU 5 - COLOUR CHECK ... PASSED");
                    //tableau_5.push(source_array.pop());
                    tableau_5.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_5;
                    destination_list = "tableau5List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 5 - KING TO POSITION 1 ... PASSED");
                //tableau_5.push(source_array.pop());
                tableau_5.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_5;
                destination_list = "tableau5List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_6
        if (tableau_6.length != 0) {
            console.log("CHECKING TABLEAU 6 RANK AND COLOUR ...");
            var t6_rank = tableau_6.at(-1).rank;
            var t6_colour = tableau_6.at(-1).colour;
            if (t6_rank - card_rank == 1) {
                console.log("TABLEAU 6 - RANK CHECK ... PASSED");
                if (card_colour != t6_colour) {
                    console.log("TABLEAU 6 - COLOUR CHECK ... PASSED");
                    //tableau_6.push(source_array.pop());
                    tableau_6.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_6;
                    destination_list = "tableau6List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 6 - KING TO POSITION 1 ... PASSED");
                //tableau_6.push(source_array.pop());
                tableau_6.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_6;
                destination_list = "tableau6List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau_7
        if (tableau_7.length != 0) {
            console.log("CHECKING TABLEAU 7 RANK AND COLOUR ...");
            var t7_rank = tableau_7.at(-1).rank;
            var t7_colour = tableau_7.at(-1).colour;
            if (t7_rank - card_rank == 1) {
                console.log("TABLEAU 7 - RANK CHECK ... PASSED");
                if (card_colour != t7_colour) {
                    console.log("TABLEAU 7 - COLOUR CHECK ... PASSED");
                    //tableau_7.push(source_array.pop());
                    tableau_7.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau_7;
                    destination_list = "tableau7List";
                    update_facedown_count(source_list);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 7 - KING TO POSITION 1 ... PASSED");
                //tableau_7.push(source_array.pop());
                tableau_7.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau_7;
                destination_list = "tableau7List";
                update_facedown_count(source_list);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }

    } catch (error) {
        console.log(error);
    }
}

// update facedown count
function update_facedown_count(source) {
    switch (source) {
        case "wasteList":
            break;
        case "tableau2List":
            if (tableau_2.length == tableau2Facedown) {
                tableau2Facedown--;
            }
            break;
        case "tableau3List":
            if (tableau_3.length == tableau3Facedown) {
                tableau3Facedown--;
            }
            break;
        case "tableau4List":
            if (tableau_4.length == tableau4Facedown) {
                tableau4Facedown--;
            }
            break;
        case "tableau5List":
            if (tableau_5.length == tableau5Facedown) {
                tableau5Facedown--;
            }
            break;
        case "tableau6List":
            if (tableau_6.length == tableau6Facedown) {
                tableau6Facedown--;
            }
            break;
        case "tableau7List":
            if (tableau_7.length == tableau7Facedown) {
                tableau7Facedown--;
            }
            break;
        default:
            break;
    }
}

// update card images in html lists
function update_card_lists(src_array, src_list, dest_array, dest_list) {
    // card moved
    move_count++;
    console.log("CARD PLAYED ... PASSED");
    console.log("MOVE COUNT:" + move_count + "  SOURCE:" + src_list + "   DESTINATION:" + dest_list);


    // TODO: add to player score (klondike or vegas scoring)

    // clear source and destination lists
    document.getElementById(src_list).innerHTML = "";
    document.getElementById(dest_list).innerHTML = "";

    // rebuild source and destination lists
    display_cards(dest_array, dest_list);
    display_cards(src_array, src_list);
}

// stock card clicked event
function stock_card(listItem) {
    var restock = false;
    try {
        // check if last stock card
        if (stock.length == 0) {
            // replenish stock array from talon array
            stock = waste.splice(0);

            // reorder to FIFO
            stock.reverse();

            // update card images
            display_cards(stock, "stockList")
            display_cards(waste, "wasteList")

            // clear empty html waste list
            document.getElementById("wasteList").innerHTML = "";

        } else if (stock.length == 1) {
            // stock array length is equal to one, push last card to waste pile
            waste.push(stock.pop());

            // update card images
            display_cards(stock, "stockList")
            display_cards(waste, "wasteList")

            // clear empty html stock list
            document.getElementById("stockList").innerHTML = "";

        } else {
            // stock array length is greater tha one, push top card to waste pile
            waste.push(stock.pop());
            display_cards(stock, "stockList")
            display_cards(waste, "wasteList")
        }
    } catch (error) {
        console.log(error);
    }

}
