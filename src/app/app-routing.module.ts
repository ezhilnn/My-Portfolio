import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectImagesComponent } from './project-images/project-images.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'personal-details',
    component:PersonalDetailsComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },{
    path:'experience',
    component:ExperienceComponent
  },{
    path:'projects',
    component:ProjectsComponent
  },{
    path:'achievements',
    component:AchievementsComponent
  },{
    path:'certificates',
    component:CertificationsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },{
    path:'project-images',
    component:ProjectImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
