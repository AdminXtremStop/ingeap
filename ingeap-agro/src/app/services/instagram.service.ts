import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface InstagramPost {
  id?: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  caption?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private baseUrl: string = `https://graph.instagram.com/${environment.instagramUserId}/media`;
  private accessToken: string = environment.instagramAccessToken;

  constructor(private http: HttpClient) { }

  /**
   * Obtener las publicaciones recientes de Instagram con manejo defensivo de errores
   */
  getRecentPosts(): Observable<InstagramPost[]> {
    if (!this.accessToken || !environment.instagramUserId) {
      console.warn('InstagramService: Credenciales de Instagram no configuradas.');
      return of([]);
    }

    const url = `${this.baseUrl}?fields=id,media_type,media_url,permalink,thumbnail_url,caption&access_token=${this.accessToken}`;
    return this.http.get<{ data: InstagramPost[] }>(url).pipe(
      map((response) => response?.data ? response.data.slice(0, 12) : []),
      catchError((error) => {
        console.error('InstagramService error:', error);
        return of([]);
      })
    );
  }
}
