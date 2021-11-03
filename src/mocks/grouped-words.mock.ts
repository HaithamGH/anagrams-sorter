import { GroupedWordsModel } from "../sorter/model/grouped-words.model";

export const groupedWordsMock: GroupedWordsModel[] =  [
    {
      aehmnr: [ 'Hemarn', 'Arnhem' ],
      aiprs: [ 'Rispa', 'Spari', 'Paris' ],
      ademorrtt: [ 'Terdamrot', 'Damrotter', 'Rotterdam' ],
      aademmrst: [ 'Amsterdam', 'Erdamamst' ]
    },
    {
      aademmrst: [ 'Erdamamst', 'Amsterdam' ],
      aiprs: [ 'Spari', 'Paris', 'Rispa' ],
      ademorrtt: [ 'Rotterdam', 'Damrotter', 'Terdamrot' ],
      aehmnr: [ 'Arnhem', 'Hemarn' ]
    }
];