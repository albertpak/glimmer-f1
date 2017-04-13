import Component, { tracked } from '@glimmer/component';

export default class DriversList extends Component {
  @tracked drivers;

  constructor(options) {
    super(options)
    this.loadInitDrivers();
  }

  async loadInitDrivers() {
    let response = await fetch('http://ergast.com/api/f1/drivers.json');
    let json = await response.json();

    this.drivers = json.MRData.DriverTable.Drivers;
  }
};
