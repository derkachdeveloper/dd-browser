import { assert } from 'chai';
import { Tree } from './Tree';

describe('Tree', () => {
  describe('isChild', () => {
    let root: HTMLElement;
    let child: HTMLElement;
    beforeEach(() => {
      root = document.createElement('div');
      document.body.appendChild(root);
      child = document.createElement('div');
    });

    it('Child into first level', () => {
      // arrange
      root.appendChild(child);

      // act
      const result: boolean = Tree.isChild(root, child);

      // assert
      assert(result);
    });

    it('Child into second level', () => {
      // arrange
      root.appendChild(child);
      const middle: HTMLElement = document.createElement('div');
      root.appendChild(middle);
      middle.appendChild(child);

      // act
      const result: boolean = Tree.isChild(root, child);

      // assert
      assert(result);
    });

    it('Is not child', () => {
      // act
      const result: boolean = Tree.isChild(root, child);

      // assert
      assert(!result);
    });

    it('Invalid child', () => {
      // act
      const result: boolean = Tree.isChild(root, null as any);

      // assert
      assert(!result);
    });

    it('Invalid parent', () => {
      // act
      const result: boolean = Tree.isChild(null as any, child);

      // asert
      assert(!result);
    });
  });
});