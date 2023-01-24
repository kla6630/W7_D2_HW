class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  setItems(items) {
    this.items = items;
    this.currentPage = 1;
  }

  setPageSize(pageSize) {
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  getPage(pageNumber = this.currentPage) {
    this.currentPage = pageNumber;
    const startIndex = (pageNumber - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  getPageCount() {
    return Math.ceil(this.items.length / this.pageSize);
  }
}

const pagination = new Pagination([
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
  "item12",
  "item13",
  "item14",
  "item15",
  "item16",
  "item17",
  "item18",
  "item19",
  "item20",
  "item21",
  "item22",
  "item23",
  "item24",
]);
console.log(pagination.getPage());
console.log(pagination.getPageCount());
console.log(pagination.getPage(1));
console.log(pagination.getPage(2));
console.log(pagination.getPage(3));
