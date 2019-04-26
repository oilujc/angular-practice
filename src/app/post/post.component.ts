import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../home/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	post : Post;
  constructor( private route: ActivatedRoute, 
				private location: Location, 
  				private postService: PostService ) { }

  ngOnInit() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.postService.getPostById(id).subscribe(data => { 
  		this.post = data;
  	});
  }

}
