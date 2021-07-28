import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:Project = {
    id: "site-thumbnail",
    title: "Sperks Menu",
    dateRange: "2008",
    dateRangeDescription : "2008",
    description: "Sperks was being designed to be a multiplayer top down shooter game with mulitplayer functionality similar to Halo. I designed and implemented the menu, it had a glossy motiff with sleek and smooth curves. Very little of the game's logic was implemented.",
    links: [
      {
          title: "Youtube Video",
          url: "https://www.youtube.com/watch?v=Yf3pK3-Hz-o",
          openInSameWindow: false
      }
    ],
    tags: [
      "Design",
      "Layout",
      "C#",
      "Programming"
    ]
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
