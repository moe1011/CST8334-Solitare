// noinspection ES6ConvertVarToLetConst

/* CST8334-SOLITAIRE

*/
// /////////////////
// DECLARE VARIABLES
// /////////////////

// create card deck
var deck = {
    // card back
    back: [],

    // card faces
    cards: [],

    // shuffled cards
    shuffled: []
};

// create stock_array pile
var stock_array = [];

// create waste_array pile
var waste_array = [];

// create foundation piles
var clubs_array = [];
var hearts_array = [];
var spades_array = [];
var diamonds_array = [];

// create tableau piles
var tableau1_array = [];
var tableau2_array = [];
var tableau3_array = [];
var tableau4_array = [];
var tableau5_array = [];
var tableau6_array = [];
var tableau7_array = [];

// create document variables for cards
var stock_list = document.getElementById("stock_list");
var waste_list = document.getElementById("waste_list");
var clubs_list = document.getElementById("clubs_list");
var hearts_list = document.getElementById("hearts_list");
var spades_list = document.getElementById("spades_list");
var diamonds_list = document.getElementById("diamonds_list");
var tableau1_list = document.getElementById("tableau1_list");
var tableau2_list = document.getElementById("tableau2_list");
var tableau3_list = document.getElementById("tableau3_list");
var tableau4_list = document.getElementById("tableau4_list");
var tableau5_list = document.getElementById("tableau5_list");
var tableau6_list = document.getElementById("tableau6_list");
var tableau7_list = document.getElementById("tableau7_list");

// face-down card count
var tableau2_facedown = 1;
var tableau3_facedown = 2;
var tableau4_facedown = 3;
var tableau5_facedown = 4;
var tableau6_facedown = 5;
var tableau7_facedown = 6;

// create document variables for game statistics
var game_title_label = document.getElementById("gameTitle");
var game_timer_label = document.getElementById("gameTimer");
var game_score_label = document.getElementById("gameScore");
var game_moves_label = document.getElementById("gameMoves");

var new_game_modal = document.getElementById("modal-1");
var user_msg_modal = document.getElementById("modal-2");

/// additional variables
var move_count = 0;
var klondike_score = 0;
var vegas_score = -52;
var game_type = "";
var timer;


// //////////
// START GAME
// //////////

// create deck
create(deck);
// open game type modal
new_game_modal.checked = true;

// //////////////////
// READY FOR GAMEPLAY
// //////////////////


// /////////
// FUNCTIONS
// /////////



// start game timer
function startTimer() {
    var second = 0;
    function upTimer ( count ) { return count > 9 ? count : "0" + count; }

    timer = setInterval( function(){
        game_timer_label.innerHTML = upTimer(parseInt(second/60, 10)) + ":" + upTimer(++second % 60);
    }, 1000);
}

function stopTimer() {clearInterval(timer);}

// reset game table
function resetGameTable () {

    // clear stock_array pile
    stock_array = [];

    // clear waste_array pile
    waste_array = [];

    // clear foundation piles
    clubs_array = [];
    hearts_array = [];
    spades_array = [];
    diamonds_array = [];

    // clear tableau piles
    tableau1_array = [];
    tableau2_array = [];
    tableau3_array = [];
    tableau4_array = [];
    tableau5_array = [];
    tableau6_array = [];
    tableau7_array = [];

    // clear document variables for cards
    stock_list.innerHTML = "";
    waste_list.innerHTML = "";
    clubs_list.innerHTML = "";
    hearts_list.innerHTML = "";
    spades_list.innerHTML = "";
    diamonds_list.innerHTML = "";
    tableau1_list.innerHTML = "";
    tableau2_list.innerHTML = "";
    tableau3_list.innerHTML = "";
    tableau4_list.innerHTML = "";
    tableau5_list.innerHTML = "";
    tableau6_list.innerHTML = "";
    tableau7_list.innerHTML = "";

    // reset face-down card count
    tableau2_facedown = 1;
    tableau3_facedown = 2;
    tableau4_facedown = 3;
    tableau5_facedown = 4;
    tableau6_facedown = 5;
    tableau7_facedown = 6;
}

// begin new game
function newGame(type) {
    // GAME PLAY

    // determine type selected and set controls
    switch (type) {
        case "klondike_btn":
            game_type = "KLONDIKE"
            game_title_label.innerHTML = "Klondike "
            klondike_score = 0
            game_score_label.innerHTML = klondike_score;
            break;
        case "vegas_btn":
            game_type = "VEGAS"
            game_title_label.innerHTML = "Vegas "
            vegas_score = -52
            game_score_label.innerHTML = "$" + vegas_score;
            break;
    }
    game_timer_label.innerHTML = "00:00"
    move_count = 0;
    game_moves_label.innerHTML = move_count;

    // reset card deck and table
    resetGameTable();

    // shuffle
    shuffle(deck);

    // deal cards
    deal(deck);

    // display cards
    display_cards(stock_array, "stock_list");
    display_cards(tableau1_array, "tableau1_list");
    display_cards(tableau2_array, "tableau2_list");
    display_cards(tableau3_array, "tableau3_list");
    display_cards(tableau4_array, "tableau4_list");
    display_cards(tableau5_array, "tableau5_list");
    display_cards(tableau6_array, "tableau6_list");
    display_cards(tableau7_array, "tableau7_list");

    // close modal
    new_game_modal.checked = false;

    // re-start timer
    stopTimer();
    startTimer();
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
        tableau1_array.push(deck.shuffled.pop());
        tableau2_array.push(deck.shuffled.pop());
        tableau3_array.push(deck.shuffled.pop());
        tableau4_array.push(deck.shuffled.pop());
        tableau5_array.push(deck.shuffled.pop());
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 2
        tableau2_array.push(deck.shuffled.pop());
        tableau3_array.push(deck.shuffled.pop());
        tableau4_array.push(deck.shuffled.pop());
        tableau5_array.push(deck.shuffled.pop());
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 3
        tableau3_array.push(deck.shuffled.pop());
        tableau4_array.push(deck.shuffled.pop());
        tableau5_array.push(deck.shuffled.pop());
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 4
        tableau4_array.push(deck.shuffled.pop());
        tableau5_array.push(deck.shuffled.pop());
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 5
        tableau5_array.push(deck.shuffled.pop());
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 6
        tableau6_array.push(deck.shuffled.pop());
        tableau7_array.push(deck.shuffled.pop());

        // simulate dealing row 7
        tableau7_array.push(deck.shuffled.pop());

        // remaining cards to stockpile
        stock_array = deck.shuffled.splice(0);
    }

}

// display cards
function display_cards(cards, destination) {
    var cards_length = cards.length;
    var counter = 0;

    cards.forEach((card) => {
        switch (destination) {
            case "stock_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + deck.back[0].image + '" onclick="stock_card(this); event.stopPropagation()">';
                li.innerHTML = card_image;
                stock_list.appendChild(li);
                break;
            case "waste_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                waste_list.appendChild(li);
                break;
            case "clubs_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                clubs_list.appendChild(li);
                break;
            case "hearts_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                hearts_list.appendChild(li);
                break;
            case "spades_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                spades_list.appendChild(li);
                break;
            case "diamonds_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                diamonds_list.appendChild(li);
                break;
            case "tableau1_list":
                var li = document.createElement("li");
                var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                li.innerHTML = card_image;
                tableau1_list.appendChild(li);
                break;
            case "tableau2_list":
                var li = document.createElement("li");

                //if (counter < cards_length - 1) {
                if (counter < tableau2_facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau2_list.appendChild(li);
                counter++;
                break;
            case "tableau3_list":
                var li = document.createElement("li");

                if (counter < tableau3_facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau3_list.appendChild(li);
                counter++;
                break;
            case "tableau4_list":
                var li = document.createElement("li");

                if (counter < tableau4_facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau4_list.appendChild(li);
                counter++;
                break;
            case "tableau5_list":
                var li = document.createElement("li");

                if (counter < tableau5_facedown){
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau5_list.appendChild(li);
                counter++;
                break;
            case "tableau6_list":
                var li = document.createElement("li");

                if (counter < tableau6_facedown){
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">';
                }
                li.innerHTML = card_image;
                tableau6_list.appendChild(li);
                counter++;
                break;
            case "tableau7_list":
                var li = document.createElement("li");

                if (counter < tableau7_facedown) {
                    var card_image = '<img src="' + deck.back[0].image + '">';
                } else {
                    var card_image = '<img src="' + card.image + '" onclick="play_card(this)">'
                }

                li.innerHTML = card_image;
                tableau7_list.appendChild(li);
                counter++;
                break;
            default:
                break;
        }
    });
    /*
    if (destination == "stock_list") {
        console.table(cards);
    }
    if (destination == "waste_list") {
        console.table(cards);
    }
    */
}

// play card
function play_card(listItem) {
    try {
        // //////////////////////
        // Get selected card data
        // //////////////////////

        // get listname of clicked image item
        var list_name = listItem.parentNode.parentNode.getAttribute("id");
        var source_array = [];
        var source_list = "";
        var source_multi_selected = false;
        var source_item_num = -1;
        var destination_array = [];
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

        console.log("****** NEW CARD SELECTED ******")
        console.log("CARD NUM:" + card_num + "  RANK:" + card_rank + "  VALUE:" + card_value + "  SUIT:" + card_suit + "  COLOUR:" + card_colour);

        // get source array info
        var card_position = -1;
        switch (list_name) {
            case "hearts_list":
                source_array = hearts_array;
                source_list = "hearts_list";
                break;
            case "diamonds_list":
                source_array = diamonds_array;
                source_list = "diamonds_list";
                break;
            case "spades_list":
                source_array = spades_array;
                source_list = "spades_list";
                break;
            case "clubs_list":
                source_array = clubs_array;
                source_list = "clubs_list";
                break;
            case "waste_list":
                source_array = waste_array;
                source_list = "waste_list";
                break;
            case "tableau1_list":
                source_array = tableau1_array;
                source_list = "tableau1_list";
                source_item_num = tableau1_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau1_array.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau2_list":
                source_array = tableau2_array;
                source_list = "tableau2_list";
                source_item_num = tableau2_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau2_array.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau3_list":
                source_array = tableau3_array;
                source_list = "tableau3_list";
                source_item_num = tableau3_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau2_array.length - 1) {
                    source_multi_selected = true;
                }
                break;
            case "tableau4_list":
                source_array = tableau4_array;
                source_list = "tableau4_list";
                source_item_num = tableau4_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau4_array.length -1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau5_list":
                source_array = tableau5_array;
                source_list = "tableau5_list"
                source_item_num = tableau5_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau5_array.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau6_list":
                source_array = tableau6_array;
                source_list = "tableau6_list";
                source_item_num = tableau6_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau6_array.length - 1) {
                    source_multi_selected = true; 
                }
                break;
            case "tableau7_list":
                source_array = tableau7_array;
                source_list = "tableau7_list";
                source_item_num = tableau7_array.findIndex(x => x.card_number == card_num);
                if (source_item_num < tableau7_array.length - 1) {
                    source_multi_selected = true; 
                }
                break;
        }

        // /////////////////
        // check foundations
        // /////////////////

        switch (card_suit) {
            case "heart":
                console.log("CHECKING HEARTS RANK  ...");
                var heart_rank;
                if (hearts_array.length == 0) {
                    heart_rank = 0;
                } else {
                    heart_rank = hearts_array.at(-1).rank;
                }

                if (card_rank - heart_rank == 1) {
                    console.log("HEARTS RANK CHECK ...  PASSED");
                    hearts_array.push(source_array.pop());
                    destination_array = hearts_array;
                    destination_list = "hearts_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "diamond":
                console.log("CHECKING DIAMONDS RANK  ...");
                var diamond_rank;
                if (diamonds_array.length == 0) {
                    diamond_rank = 0;
                } else {
                    diamond_rank = diamonds_array.at(-1).rank;
                }

                if (card_rank - diamond_rank == 1) {
                    console.log("DIAMONDS RANK CHECK ...  PASSED");
                    diamonds_array.push(source_array.pop());
                    destination_array = diamonds_array;
                    destination_list = "diamonds_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "spade":
                console.log("CHECKING SPADES RANK  ...");
                var spade_rank;
                if (spades_array.length == 0) {
                    spade_rank = 0;
                } else {
                    spade_rank = spades_array.at(-1).rank;
                }

                if (card_rank - spade_rank == 1) {
                    console.log("SPADES RANK CHECK ...  PASSED");
                    spades_array.push(source_array.pop());
                    destination_array = spades_array;
                    destination_list = "spades_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
            case "club":
                console.log("CHECKING CLUBS RANK  ...");
                var club_rank;
                if (clubs_array.length == 0) {
                    club_rank = 0;
                } else {
                    club_rank = clubs_array.at(-1).rank;
                }

                if (card_rank - club_rank == 1) {
                    console.log("CLUBS RANK CHECK ...  PASSED");
                    clubs_array.push(source_array.pop());
                    destination_array = clubs_array;
                    destination_list = "clubs_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
                break;
        }

        // ///////////////////
        // Check tableau piles
        // ///////////////////

        // check tableau1_array
        if (tableau1_array.length != 0) {
            console.log("CHECKING TABLEAU 1 RANK AND COLOUR ...");
            var t1_rank = tableau1_array.at(-1).rank;
            var t1_colour = tableau1_array.at(-1).colour;
            if (t1_rank - card_rank == 1) {
                console.log("TABLEAU 1 - RANK CHECK ... PASSED");
                if (card_colour != t1_colour) {
                    console.log("TABLEAU 1 - COLOUR CHECK ... PASSED");
                    //tableau1_array.push(source_array.pop());
                    tableau1_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau1_array;
                    destination_list = "tableau1_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 1 - KING TO POSITION 1 ... PASSED");
                //tableau1_array.push(source_array.pop());
                tableau1_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau1_array;
                destination_list = "tableau1_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau2_array
        if (tableau2_array.length != 0) {
            console.log("CHECKING TABLEAU 2 RANK AND COLOUR ...");
            var t2_rank = tableau2_array.at(-1).rank;
            var t2_colour = tableau2_array.at(-1).colour;
            if (t2_rank - card_rank == 1) {
                console.log("TABLEAU 2 - RANK CHECK ... PASSED");
                if (card_colour != t2_colour) {
                    console.log("TABLEAU 2 - COLOUR CHECK ... PASSED");
                    //tableau2_array.push(source_array.pop());
                    tableau2_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau2_array;
                    destination_list = "tableau2_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 2 - KING TO POSITION 1 ... PASSED");
                //tableau2_array.push(source_array.pop());
                tableau2_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau2_array;
                destination_list = "tableau2_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau3_array
        if (tableau3_array.length != 0) {
            console.log("CHECKING TABLEAU 3 RANK AND COLOUR ...");
            var t3_rank = tableau3_array.at(-1).rank;
            var t3_colour = tableau3_array.at(-1).colour;
            if (t3_rank - card_rank == 1) {
                console.log("TABLEAU 3 - RANK CHECK ... PASSED");
                if (card_colour != t3_colour) {
                    console.log("TABLEAU 3 - COLOUR CHECK ... PASSED");
                    //tableau3_array.push(source_array.pop());
                    tableau3_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau3_array;
                    destination_list = "tableau3_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 3 - KING TO POSITION 1 ... PASSED");
                //tableau3_array.push(source_array.pop());
                tableau3_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau3_array;
                destination_list = "tableau3_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau4_array
        if (tableau4_array.length != 0) {
            console.log("CHECKING TABLEAU 4 RANK AND COLOUR ...");
            var t4_rank = tableau4_array.at(-1).rank;
            var t4_colour = tableau4_array.at(-1).colour;
            if (t4_rank - card_rank == 1) {
                console.log("TABLEAU 4 - RANK CHECK ... PASSED");
                if (card_colour != t4_colour) {
                    console.log("TABLEAU 4 - COLOUR CHECK ... PASSED");
                    //tableau4_array.push(source_array.pop());
                    tableau4_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau4_array;
                    destination_list = "tableau4_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 4 - KING TO POSITION 1 ... PASSED");
                //tableau4_array.push(source_array.pop());
                tableau4_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau4_array;
                destination_list = "tableau4_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau5_array
        if (tableau5_array.length != 0) {
            console.log("CHECKING TABLEAU 5 RANK AND COLOUR ...");
            var t5_rank = tableau5_array.at(-1).rank;
            var t5_colour = tableau5_array.at(-1).colour;
            if (t5_rank - card_rank == 1) {
                console.log("TABLEAU 5 - RANK CHECK ... PASSED");
                if (card_colour != t5_colour) {
                    console.log("TABLEAU 5 - COLOUR CHECK ... PASSED");
                    //tableau5_array.push(source_array.pop());
                    tableau5_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau5_array;
                    destination_list = "tableau5_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 5 - KING TO POSITION 1 ... PASSED");
                //tableau5_array.push(source_array.pop());
                tableau5_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau5_array;
                destination_list = "tableau5_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau6_array
        if (tableau6_array.length != 0) {
            console.log("CHECKING TABLEAU 6 RANK AND COLOUR ...");
            var t6_rank = tableau6_array.at(-1).rank;
            var t6_colour = tableau6_array.at(-1).colour;
            if (t6_rank - card_rank == 1) {
                console.log("TABLEAU 6 - RANK CHECK ... PASSED");
                if (card_colour != t6_colour) {
                    console.log("TABLEAU 6 - COLOUR CHECK ... PASSED");
                    //tableau6_array.push(source_array.pop());
                    tableau6_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau6_array;
                    destination_list = "tableau6_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 6 - KING TO POSITION 1 ... PASSED");
                //tableau6_array.push(source_array.pop());
                tableau6_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau6_array;
                destination_list = "tableau6_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
        // check tableau7_array
        if (tableau7_array.length != 0) {
            console.log("CHECKING TABLEAU 7 RANK AND COLOUR ...");
            var t7_rank = tableau7_array.at(-1).rank;
            var t7_colour = tableau7_array.at(-1).colour;
            if (t7_rank - card_rank == 1) {
                console.log("TABLEAU 7 - RANK CHECK ... PASSED");
                if (card_colour != t7_colour) {
                    console.log("TABLEAU 7 - COLOUR CHECK ... PASSED");
                    //tableau7_array.push(source_array.pop());
                    tableau7_array.push(...source_array.splice(source_item_num, source_array.length));
                    destination_array = tableau7_array;
                    destination_list = "tableau7_list";
                    update_facedown_count(source_list);
                    update_points(source_list, destination_list, true);
                    update_card_lists(source_array, source_list, destination_array, destination_list);
                    return;
                }
            }
        } else {
            if (card_rank == 13) {
                console.log("TABLEAU 7 - KING TO POSITION 1 ... PASSED");
                //tableau7_array.push(source_array.pop());
                tableau7_array.push(...source_array.splice(source_item_num, source_array.length));
                destination_array = tableau7_array;
                destination_list = "tableau7_list";
                update_facedown_count(source_list);
                update_points(source_list, destination_list, true);
                update_card_lists(source_array, source_list, destination_array, destination_list);
                return;
            }
        }
    } catch (error) {
        console.log(error);
    }
}


// TODO refactoring play card function and check order based on source pile (re:max points)
function check_foundation() {}
function check_tableau() {}




// update facedown count
function update_facedown_count(source) {
    switch (source) {
        case "waste_list":
            break;
        case "tableau2_list":
            if (tableau2_array.length == tableau2_facedown) {
                tableau2_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        case "tableau3_list":
            if (tableau3_array.length == tableau3_facedown) {
                tableau3_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        case "tableau4_list":
            if (tableau4_array.length == tableau4_facedown) {
                tableau4_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        case "tableau5_list":
            if (tableau5_array.length == tableau5_facedown) {
                tableau5_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        case "tableau6_list":
            if (tableau6_array.length == tableau6_facedown) {
                tableau6_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        case "tableau7_list":
            if (tableau7_array.length == tableau7_facedown) {
                tableau7_facedown--;
                update_points(source, "FLIP-CARD", false);
            }
            break;
        default:
            break;
    }
}

// update card images in html lists
function update_card_lists (src_array, src_list, dest_array, dest_list) {

    // clear source and destination lists
    document.getElementById(src_list).innerHTML = "";
    document.getElementById(dest_list).innerHTML = "";

    // rebuild source and destination lists
    display_cards(dest_array, dest_list);
    display_cards(src_array, src_list);
}

// stock_array card clicked event
function stock_card(listItem) {
    var restock = false;
    try {
        // check if last stock_array card
        if (stock_array.length == 0) {


            // check if waste_array == 0 (WIN EVENT)
            if (waste_array.length == 0) {
                // open user message modal
                user_msg_modal.checked = true;

                // open new game modal
                new_game_modal.checked = true;
            }


            // replenish stock_array array from talon array
            stock_array = waste_array.splice(0);

            // reorder to FIFO
            stock_array.reverse();

            // update card images
            display_cards(stock_array, "stock_list")
            display_cards(waste_array, "waste_list")

            // clear empty html waste_array list
            document.getElementById("waste_list").innerHTML = "";

            update_points("waste_list", "stock_list", false);

        } else if (stock_array.length == 1) {
            // stock_array array length is equal to one, push last card to waste_array pile
            waste_array.push(stock_array.pop());

            // update card images
            display_cards(stock_array, "stock_list")
            display_cards(waste_array, "waste_list")

            // clear empty html stock_array list
            document.getElementById("stock_list").innerHTML = "";

        } else {
            // stock_array array length is greater tha one, push top card to waste_array pile
            waste_array.push(stock_array.pop());
            display_cards(stock_array, "stock_list")
            display_cards(waste_array, "waste_list")
        }
    } catch (error) {
        console.log(error);
    }

}



// calculate points
function update_points(source, destination, card_moved) {
    var src = "";
    var dest = "";
    // determine source
    switch (source) {
        case "hearts_list":
        case "diamonds_list":
        case "spades_list":
        case "clubs_list":
            // determine destination
            switch (destination) {
                case "waste_list":
                    // calculate points (FOUNDATION-WASTE) ?
                    dest = "WASTE";
                    break;
                case "tableau1_list":
                case "tableau2_list":
                case "tableau3_list":
                case "tableau4_list":
                case "tableau5_list":
                case "tableau6_list":
                case "tableau7_list":
                    // calculate points (FOUNDATION-TABLEAU)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score -= 15;
                            break;
                        case "VEGAS":
                            vegas_score -= 15;
                            break;
                    }
                    dest = "TABLEAU";
                    break;
            }
            src = "FOUNDATION";
            break;
        case "waste_list":
            // determine destination
            switch (destination) {
                case "hearts_list":
                case "diamonds_list":
                case "spades_list":
                case "clubs_list":
                    // calculate points (WASTE-FOUNDATION)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score += 10;
                            break;
                        case "VEGAS":
                            vegas_score += 5;
                            break;
                    }
                case "tableau1_list":
                case "tableau2_list":
                case "tableau3_list":
                case "tableau4_list":
                case "tableau5_list":
                case "tableau6_list":
                case "tableau7_list":
                    // calculate points (WASTE-TABLEAU)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score += 5;
                            break;
                        case "VEGAS":
                            vegas_score += 5;
                            break;
                    }
                    dest = "TABLEAU";
                    break;
                case "stock_list":
                    // calculate points (WASTE-STOCK)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score -= 50;
                            break;
                        case "VEGAS":
                            vegas_score -= 50;
                            break;
                    }
                    dest = "TABLEAU";
                    break;
            }
            src = "WASTE";
            break;
        case "tableau1_list":
        case "tableau2_list":
        case "tableau3_list":
        case "tableau4_list":
        case "tableau5_list":
        case "tableau6_list":
        case "tableau7_list":
            // determine destination
            switch (destination) {
                case "hearts_list":
                case "diamonds_list":
                case "spades_list":
                case "clubs_list":
                    // calculate points (TABLEAU-FOUNDATION)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score += 10;
                            break;
                        case "VEGAS":
                            vegas_score += 5;
                            break;
                    }
                    break;
                case "tableau1_list":
                case "tableau2_list":
                case "tableau3_list":
                case "tableau4_list":
                case "tableau5_list":
                case "tableau6_list":
                case "tableau7_list":
                    // calculate points (TABLEAU-TABLEAU)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score += 5;
                            break;
                        case "VEGAS":
                            vegas_score += 5;
                            break;
                    }
                    dest = "TABLEAU";
                    break;
                case "FLIP-CARD":
                    // calculate points (TABLEAU-TABLEAU)
                    switch (game_type) {
                        case "KLONDIKE":
                            klondike_score += 5;
                            break;
                        case "VEGAS":
                            vegas_score += 5;
                            break;
                    }
                    dest = "TABLEAU";
                    break;
            }
            src = "TABLEAU";
            break;
    }

    // update controls
    switch (game_type) {
        case "KLONDIKE":
            game_score_label.innerHTML = klondike_score;
            break;
        case "VEGAS":
            game_score_label.innerHTML = "$" + vegas_score;
            break;
    }

    if (card_moved == true) {
        move_count++;
        game_moves_label.innerHTML = move_count;
    }

}