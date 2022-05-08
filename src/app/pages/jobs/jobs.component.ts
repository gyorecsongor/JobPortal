import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { JobsService} from "../../shared/services/jobs.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
    this.jobService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.jobObject = data;
    })
  }

  loadImage(imageObject: Image) {
    this.chosenImage = imageObject;
  }
}
