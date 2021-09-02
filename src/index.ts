import Player from "./models/Player";
import TeamPlayer from "./models/TeamPlayer";

const david: Player = new Player("David", 47);
console.log(david);
console.log(david.describe());
const demetri: TeamPlayer = new TeamPlayer("Demetri", 101, "GC");
console.log(demetri);
console.log(demetri.describe());
