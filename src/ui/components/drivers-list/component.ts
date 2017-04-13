import Component, { tracked } from '@glimmer/component';

export default class DriversList extends Component {
  @tracked drivers;
  @tracked limit;
  @tracked total;
  @tracked offset;
  @tracked currentPage = 0;

  didInsertElement() {
    this.loadInitDrivers();
  }

  async loadInitDrivers() {
    let response = await fetch('http://ergast.com/api/f1/drivers.json');
    let json = await response.json();
    this.limit = json.MRData.limit;
    this.offset = json.MRData.offset;
    this.total = json.MRData.total;
    this.drivers = json.MRData.DriverTable.Drivers;
  }

  async pagination(page) {
    this.currentPage = this.currentPage + page;
    this.offset = this.limit * this.currentPage;
    if ( this.offset < this.total && this.offset >= 0 ) {
      let response = await fetch('http://ergast.com/api/f1/drivers.json?offset=' + parseInt(this.offset));
      let json = await response.json();
      this.drivers = json.MRData.DriverTable.Drivers;
    }
  }

  next() {
    this.pagination(1);
  }

  prev() {
    this.pagination(-1);
  }
};
