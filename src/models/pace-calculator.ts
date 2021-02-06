export class Pace {
  static readonly shortMaxLimit: number = 75;

  constructor(
    public distanceInMeters: number,
    public paceInSeconds: number = 0
  ) {}

  public static createPace(basePace: Pace, multiplier: number): Pace {
    return new Pace(
      basePace.distanceInMeters * multiplier,
      basePace.paceInSeconds * multiplier
    );
  }

  public get distanceString() {
    return `${this.distanceInMeters}m`;
  }

  public get paceString() {
    return this.paceInSeconds <= Pace.shortMaxLimit
      ? this.getShortPaceString()
      : this.getLongPaceString();
  }

  private getShortPaceString() {
    return `${this.paceInSeconds.toFixed(1).toLocaleLowerCase()}s`;
  }

  private getLongPaceString() {
    return `${this.getMinuteString()}:${this.getSecondsString()}`;
  }

  private getSecondsString() {
    return Math.floor(this.paceInSeconds % 60)
      .toLocaleString()
      .padStart(2, "0");
  }

  private getMinuteString() {
    return Math.floor(this.paceInSeconds / 60)
      .toLocaleString()
      .padStart(2, "0");
  }
}

function getBasePaceFromKmPace(min = 0, s = 0): Pace {
  min = min ? min : 0;
  s = s ? s : 0;
  const oneHundredTime = Number.parseFloat(((min * 60 + s) / 10).toFixed(2));
  return new Pace(100, oneHundredTime);
}

export default function getGeneralPaces(min = 0, s = 0): Pace[] {
  const basePace = getBasePaceFromKmPace(min, s);
  const result: Pace[] = [];
  result.push(basePace);
  const frequentDistances = [2, 3, 4, 6, 8, 10, 12, 15, 20];
  result.push(...frequentDistances.map((d) => Pace.createPace(basePace, d)));
  return result;
}
