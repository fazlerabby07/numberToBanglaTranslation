function convertNumberToWords(amount) {
    var Words = ['', 'এক', 'দুই', 'তিন', 'চার', 'পাঁচ', 'ছয়', 'সাত', 'আট', 'নয়', 'দশ', 
                'এগার', 'বার', 'তের', 'চৌদ্দ', 'পনের', 'ষোল', 'সতের', 'আঠার', 'ঊনিশ', 'বিশ', 
                'একুশ', 'বাইশ', 'তেইশ', 'চব্বিশ', 'পঁচিশ', 'ছাব্বিশ', 'সাতাশ', 'আঠাশ', 'ঊনত্রিশ', 'ত্রিশ',
                'একত্রিশ', 'বত্রিশ', 'তেত্রিশ', 'চৌত্রিশ', 'পঁয়ত্রিশ', 'ছত্রিশ', 'সাঁইত্রিশ', 'আটত্রিশ', 'ঊনচল্লিশ', 'চল্লিশ', 
                'একচল্লিশ', 'বিয়াল্লিশ', 'তেতাল্লিশ', 'চুয়াল্লিশ', 'পঁয়তাল্লিশ', 'ছেচল্লিশ', 'সাতচল্লিশ', 'আটচল্লিশ', 'ঊনপঞ্চাশ', 'পঞ্চাশ',
                'একান্ন', 'বায়ান্ন', 'তিপ্পান্ন', 'চুয়ান্ন', 'পঞ্চান্ন', 'ছাপ্পান্ন', 'সাতান্ন', 'আটান্ন', 'ঊনষাট', 'ষাট',
                'একষট্টি', 'বাষট্টি', 'তেষট্টি', 'চৌষট্টি', 'পঁয়ষট্টি', 'ছেষট্টি', 'সাতষট্টি', 'আটষট্টি', 'ঊনসত্তর', 'সত্তর',
                'একাতর', 'বাহাত্তর', 'তিয়াত্তর', 'চুয়াত্তর', 'পঁচাত্তর', 'ছিয়াত্তর', 'সাতাত্তর', 'আটাত্তর', 'ঊনআশি', 'আশি',
                'একাশি', 'বিরাশি', 'তিরাশি', 'চুরাশি', 'পঁচাশি', 'ছিয়াশি', 'সাতাশি', 'আটাশি', 'ঊননব্বই', 'নব্বই', 
                'একানব্বই', 'বিরানব্বই', 'তিরানব্বই', 'চুরানব্বই', 'পঁচানব্বই', 'ছিয়ানব্বই', 'সাতানব্বই', 'আটানব্বই', 'নিরানব্বই'];

    amount = amount.toString();
    var atemp = amount.split(".");
    var before_word = "";
    var after_word = "";
    var before_number = atemp[0];
    if(before_number !== "0") {
      before_word = toWord(before_number, Words);
    } 
    if(atemp.length === 2) {
        var after_number = atemp[1];
        after_word = toWord(after_number, Words);
        if(before_word !== "") {
          before_word += ' দশমিক '+ after_word;
        } else {
            before_word += 'দশমিক '+after_word;
        }
    }
    return before_word;
}

function toWord(number, words) {
  var n_length = number.length;
    var words_string = "";

    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 2) {
                    n_array[j] = 20 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 3) {
                    n_array[j] = 30 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 4) {
                    n_array[j] = 40 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 5) {
                    n_array[j] = 50 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 6) {
                    n_array[j] = 60 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 7) {
                    n_array[j] = 70 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 8) {
                    n_array[j] = 80 + parseInt(n_array[j]);
                    n_array[i] = 0;
                } else if(n_array[i] == 9) {
                    n_array[j] = 90 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }

        var value = "";
        for (var i = 0; i < 9; i++) {
            value = n_array[i];      
            if (value != 0) {
                words_string += words[value] + "";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " কোটি ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " লাখ ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " হাজার ";
            } else if (i == 6 && value != 0) {
                words_string += "শ ";
            }
        }
    
        words_string = words_string.split("  ").join(" ");
        
    }
  return words_string;
}
module.exports = convertNumberToWords;