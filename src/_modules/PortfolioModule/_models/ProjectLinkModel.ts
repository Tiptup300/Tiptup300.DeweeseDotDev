export class ProjectLinkModel {
  constructor(
    readonly type: string,
    readonly description: string,
    readonly url: string,
    readonly openInSameWindow?: boolean
  ) {}
}
