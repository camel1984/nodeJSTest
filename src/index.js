import { merge } from 'lodash';

let a = {num: 100};

merge(a, null);

console.log(JSON.stringify(a));

