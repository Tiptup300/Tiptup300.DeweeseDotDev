import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ProjectModel } from '../_models/ProjectModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private subscription!: Subscription;

  private apiUrl = 'assets/projects/projects.json';
  private projectImagesPath = 'assets/projects/';

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<ProjectModel[]> {
    return this.httpClient.get<ProjectModel[]>(this.apiUrl);
  }

  getProject(id: string): Observable<ProjectModel> {
    let foundProject: ProjectModel;
    var subject = new Subject<ProjectModel>();

    this.subscription = this.getProjects().subscribe((projects) => {
      foundProject = projects.find((project) => project.id === id)!;

      subject.next(foundProject);
    });

    return subject.asObservable();
  }

  getProjectsImagePath(projectId: string): string {
    return this.projectImagesPath + projectId + '.jpg';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
