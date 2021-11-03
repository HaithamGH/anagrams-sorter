import { GroupAndSortWordsDto } from "../sorter/dto/group-and-sort-words.dto";
import { AnagramAlgorithm } from "../sorter/enum/anagram-algorithm.enum";

export const groupAndSortWordsMock: GroupAndSortWordsDto = { 
    algorithm: AnagramAlgorithm.SORT_AND_COMPARE,
    input_words_lists: [
      [ "Hemarn", "Rispa", "Spari", "Terdamrot", "Amsterdam", "Arnhem", "Erdamamst", "Damrotter", "Rotterdam", "Paris" ],
      [ "Erdamamst", "Spari", "Paris", "Rispa", "Rotterdam", "Rispa", "Damrotter", "Arnhem", "Terdamrot", "Amsterdam", "Hemarn", "Erdamamst"]
    ]
};