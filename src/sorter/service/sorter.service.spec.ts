import { Test, TestingModule } from '@nestjs/testing';
import { groupedWordsMock } from '../../mocks/grouped-words.mock';
import { groupAndSortWordsMock } from '../../mocks/group-and-sort-words.mock';
import { GroupAndSortWordsDto } from '../dto/group-and-sort-words.dto';
import { AnagramAlgorithm } from '../enum/anagram-algorithm.enum';
import { SorterService } from './sorter.service';
import { formattedSortedGroupsMock } from '../../mocks/formatted-sorted-groups.mock';

describe('SorterService', () => {
  let service: SorterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SorterService],
    }).compile();

    service = module.get<SorterService>(SorterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('groupWords', () => {
    it('should group words if algorithm is equal to SORT_AND_COMPARE', () => {
      const actual = service.groupWords(groupAndSortWordsMock.input_words_lists);
      expect(actual).toStrictEqual(groupedWordsMock);
    });

    it('should throw error if algorithm is equal to OTHER', () => {
      const input: GroupAndSortWordsDto = groupAndSortWordsMock;
      input.algorithm = AnagramAlgorithm.OTHER;
      expect(() => service.groupWords(input.input_words_lists, input.algorithm)).toThrow(Error);
    });
  });

  describe('groupListWordsAnagramsBySortAndCompare', () => {
    it('should group list words anagrams by sort And compare', () => {
      const actual = service.groupListWordsAnagramsBySortAndCompare(groupAndSortWordsMock.input_words_lists[1]);
      expect(actual).toStrictEqual(groupedWordsMock[1]);
    });
  });

  describe('sortWord', () => {
    it('should returns sorted value of letters joined as one string', () => {
      const actual = service.sortWord('Erdamamst');
      expect(actual).toBe('aademmrst');
    });
  });

  describe('formatAndSortGroupedData', () => {
    it('should returns formatted data from object structrue to nested arrays structrue with input group key', () => {
      const actual = service.formatAndSortGroupedData(groupedWordsMock);
      expect(actual).toStrictEqual(formattedSortedGroupsMock);
    });
  });

});
