import Tree from '../helpers/tree.js';

export const reti = new Tree();

reti._addNode('0:62,45', null, [62, 45], 'white');
reti._addNode('1:11,27', '0:62,45', [11,27], 'black');
reti._addNode('2:50,34', '1:11,27', [50,34], 'white');
reti._addNode('3:27,34', '2:50,34', [27,34], 'black');
reti._addNode('4:52,44', '3:27,34', [52,44], 'white');
reti._addNode('5:2,38', '4:52,44', [2,38], 'black');
reti._addNode('6:61,34', '5:2,38', [61,34], 'white');
reti._addNode('7:6,21', '6:61,34', [6,21], 'black');
reti._addNode('8:45,28', '7:6,21', [45,28], 'white');
reti._addNode('9:38,59', '8:45,28', [38,59], 'black');
reti._addNode('10:34,13', '9:38,59', [34,13], 'white');