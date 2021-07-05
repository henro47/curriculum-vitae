import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger('fade',[
    //transistion: void goes to default
    state('void', style({opacity:0})),
    transition(':enter',[
      animate(500)
    ])
  ]);