import Component, { tracked } from '@glimmer/component';

export default class F1Seasons extends Component {
  @tracked seasonInfo;
  @tracked currentRace;

  constructor(options) {
    super(options);
    this.loadCurrentSeason();
  }

  async loadCurrentSeason() {
    let response = await fetch('http://ergast.com/api/f1/current.json');
    let json = await response.json();

    this.seasonInfo = json.MRData.RaceTable;
  }

  loadRace(race) {
    this.currentRace = race;
  }

  back() {
    this.currentRace = null;
  }
};
