import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  getPost() {
  	return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }


  getPostById(id) {
  	return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
