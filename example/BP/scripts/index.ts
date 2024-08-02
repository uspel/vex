import { Direction, system, world } from "@minecraft/server";
import { Vex3 } from "vex";

const delay = () => new Promise<void>((res) => system.run(res));

async function drawCurve() {
  const vector1 = new Vex3(Direction.Down, 5);
  const vector2 = new Vex3({ x: 0, y: 0, z: 6 });

  for (let i = 0; i < 1; i += 0.01) {
    await delay();
    const player = world.getPlayers()[0];
    const location = Vex3.slerp(vector1, vector2, i);

    player?.dimension.runCommand(`particle minecraft:villager_happy ${Vex3.toString(location)}`);
  }
}

drawCurve();
