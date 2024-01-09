import Tree from '../helpers/tree.js';

export const unknown = new Tree();

unknown._addNode('0:52,36', null, [62,36], 'white');
unknown._addNode('1:12,28', '0:52,36', [12,28], 'black');
unknown._addNode('2:53,37', '1:12,28', [63,37], 'white');
unknown._addNode('3:28,37', '2:53,37', [28,37], 'black');
unknown._addNode('4:62,45', '3:28,37', [62,45], 'white');
unknown._addNode('5:11,27', '4:62,45', [11,27], 'black');
unknown._addNode('6:57,42', '5:11,27', [57,42], 'white');
unknown._addNode('7:27,36', '6:57,42', [27,36], 'black');
unknown._addNode('8:42,36', '7:27,36', [42,36], 'white');
unknown._addNode('9:2,38', '8:42,36', [2,38], 'black');
unknown._addNode('10:59,52', '9:2,38', [59,52], 'white');
unknown._addNode('11:38,45', '10:59,52', [38,45], 'black');
unknown._addNode('12:36,21', '11:38,45', [36,21], 'white');