import Player from "./Player";
// child of Player (inherits name, jersey)
// add team: string property - set from constructor parameter
export default class TeamPlayer extends Player {
  // do not write the inherted properties here
  // only the new ones
  team: string;
  // ALL properties (including inherited) go inside constructor parameters
  constructor(name: string, jersey: number, team: string) {
    super(name, jersey);
    this.team = team;
  }
  describe(): string {
    return super.describe() + ` and plays for ${this.team}.`;
  }
}
