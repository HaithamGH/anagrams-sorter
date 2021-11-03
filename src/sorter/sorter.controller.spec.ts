import { Test, TestingModule } from '@nestjs/testing';
import { formattedSortedGroupsMock } from '../mocks/formatted-sorted-groups.mock';
import { groupAndSortWordsMock } from '../mocks/group-and-sort-words.mock';
import { SorterService } from './service/sorter.service';
import { SorterController } from './sorter.controller';

describe('SorterController', () => {
  let controller: SorterController;
  let sorterService: SorterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SorterController],
      providers: [SorterService],
    }).compile();

    controller = module.get<SorterController>(SorterController);
    sorterService = module.get<SorterService>(SorterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('groupAndSortWords', () => {
    it('should group and sort words based on anagrams', () => {
      const actual = controller.groupAndSortWords(groupAndSortWordsMock);
      expect(actual).toStrictEqual(formattedSortedGroupsMock);
    });
  });

});
