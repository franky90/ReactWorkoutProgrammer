export class Range {
    constructor(small, large){
      this.small = small
      this.large = large
    }
    format() {
      return `${this.small}-${this.large}`
    }
}


export class WeightRange extends Range {
    constructor(small, large){
      super(small, large)
    }
    format() {
      return `${this.small}-${this.large}%RM`
    }
}