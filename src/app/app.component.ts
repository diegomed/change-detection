import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrameworksService } from './services/frameworks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

  cards: any[] = []
  // cards = [
  //   {
  //     title: 'Angular',
  //     imgUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Mw16_8yk--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/shcwa40hgffwns0d8jxy.png'
  //   },
  //   {
  //     title: 'React',
  //     imgUrl: 'https://reactjs.org/logo-og.png'
  //   },
  //   {
  //     title: 'Vue',
  //     imgUrl: 'https://avatars.githubusercontent.com/u/6128107?s=280&v=4'
  //   },
  //   {
  //     title: 'Svelte',
  //     imgUrl: 'https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png'
  //   },
  //   {
  //     title: 'Remix',
  //     imgUrl: 'https://remix.run/img/og.1.jpg'
  //   }
  // ]

  constructor(
    private fs: FrameworksService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    // this.cards$ = this.fs.fetchFrameworks();

    this.fs.fetchFrameworks().subscribe(
      res => {
        this.cards = res
      },
      err => console.log(err)
    );
  }

  ngDoCheck(): void {
    if (this.cards.length) {
      this.cd.markForCheck();
      console.log('marked for check!');
    }
    console.log('ngDoCheck!');
    console.log(this.cards.length)
  }

  changeTitles() {
    //this.cards.forEach(c => c.title = 'Changed!');
  }
}
