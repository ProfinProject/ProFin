import { Component } from '@angular/core';

interface type{
  time: number,
  title: string, 
  status?: string,
  price?: string,
  desc?:string
}
@Component({
  selector: 'app-wg-timeline-1',
  standalone: true,
  imports: [],
  templateUrl: './wg-timeline-1.component.html',
  styleUrl: './wg-timeline-1.component.css'
})
export class WgTimeline1Component {

  timelineData: type[] = [ 
    {
      time: 10 ,
      title:' Youtube, a video-sharing website, goes live',
      status:'primary',
      price: '$500'
    },
    {
      time: 20 ,
      title:'New order placed',
      status:'info',
      price: '#XF-2356',
      desc: 'Quisque a consequat ante Sit amet magna at volutapt...'
    },
    {
      time: 30 ,
      title:'john just buy your product',
      status:'danger',
      price: 'Sell $250'
    },
    {
      time: 15 ,
      title:'StumbleUpon is acquired by eBay',
      status:'success',
    },
    {
      time: 20 ,
      title:'Mashable, a news website and blog, goes live',
      status:'warning'
    },
    {
      time: 20 ,
      title:'Mashable, a news website and blog, goes live',
      status:'dark',
    }
  ]
}
