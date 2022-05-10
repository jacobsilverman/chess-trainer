import Tree from '../helpers/tree.js';

export const moves = new Tree();

moves._addNode('0:51,35', null, [51, 35], 'white');
moves._addNode('1:11,27', '0:51,35', [11,27], 'black');

moves._addNode('2:50,34', '1:11,27', [50,34], 'white');
moves._addNode('3:27,34', '2:50,34', [27,34], 'black');

moves._addNode('4:52,36', '3:27,34', [27,34], 'white');
