class Category {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
  }
}

export const category = [
  new Category("Breakfast"),
  new Category("Lunch"),
  new Category("Dinner"),
  new Category("Sides"),
  new Category("Beverages"),
  new Category("Liquors"),
  new Category("Others"),
];
