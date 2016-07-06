const detectPointer = {
  update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      this.fine = window.matchMedia('(pointer: fine)').matches;
      this.coarse = window.matchMedia('(pointer: coarse)').matches;
      this.none = window.matchMedia('(pointer: none)').matches;
      this.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      this.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      this.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  },
};

detectPointer.update();
export default detectPointer;
