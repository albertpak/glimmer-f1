import Component, { tracked } from '@glimmer/component';

export default class RaceInfo extends Component {
  @tracked circuit;
  @tracked location;

  constructor(options) {
    super(options);
    this.circuit = this.args.race.Circuit;
    this.location = this.circuit.Location;
  }
};
