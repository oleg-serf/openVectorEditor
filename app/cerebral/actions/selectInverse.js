var invertCircularRange = require('ve-range-utils/invertCircularRange');
export default function selectInverse(input, tree, output) {
    //compare the sequenceString being pasted in with what's already stored in the clipboard
    var {selectionLayer, sequenceLength} = tree.get();
    output({
        selectionLayer: invertCircularRange(selectionLayer, sequenceLength)
    });
}