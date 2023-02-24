export class ProjectTagFilterModel {
  constructor(
    readonly tag: string,
    readonly count: number,
    readonly enabled: boolean
  ) {}
}
