import Tree from '../helpers/tree.js';

export const tennison = new Tree();

tennison._addNode('0:52,36', null, [52,36], 'white');
tennison._addNode('1:11,27', '0:52,36', [11,27], 'black');
tennison._addNode('2:62,45', '1:11,27', [62,45], 'white');
tennison._addNode('3:27,36', '2:62,45', [27,36], 'black');
tennison._addNode('4:45,28', '3:27,36', [45,28], 'white');
tennison._addNode('5:13,21', '4:45,28', [13,21], 'black');
tennison._addNode('6:59,31', '5:13,21', [59,31], 'white');
tennison._addNode('7:14,22', '6:59,31', [14,22], 'black');
tennison._addNode('8:61,25', '7:14,22', [61,25], 'white');
tennison._addNode('9:10,18', '8:61,25', [10,18], 'black');
tennison._addNode('10:25,34', '9:10,18', [25,34], 'white');
tennison._addNode('11:22,31', '10:25,34', [22,31], 'black');
tennison._addNode('12:34,13', '11:22,31', [34,13], 'white');