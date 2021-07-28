import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private projectImagesPath:string = "assets/projects/";

  project:Project = {
    id: "2008-sperks-menu",
    title: "Sperks Menu",
    dateRange: "2008",
    dateRangeDescription : "2008",
    description: "<b>Sperks</b> was being designed to be a multiplayer top down shooter game with mulitplayer functionality similar to Halo. I designed and implemented the menu, it had a glossy motiff with sleek and smooth curves. Very little of the game's logic was implemented.",
    links: [
      {
          type:"youtube",
          description: "Youtube Video",
          url: "https://www.youtube.com/watch?v=Yf3pK3-Hz-o",
          openInSameWindow: false
      }
    ],
    tags: [
      "design",
      "layout",
      "c-sharp",
      "programming"
    ]
    
  };

  constructor() { }

  ngOnInit(): void {
  }

  getProjectImagePath(): string {
    return this.projectImagesPath + this.project.id + ".jpg";
  }

}
