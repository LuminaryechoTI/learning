import spotipy
import os
from spotipy.oauth2 import SpotifyOAuth


class Spotify:
    def __init__(self):
        self.user_id = None
        self.sp = None
        pass

    def authenticate_spotify(self):
        sp = spotipy.Spotify(
            auth_manager=SpotifyOAuth(
                scope="playlist-modify-private",
                redirect_uri="http://example.com",
                client_id=os.getenv("6e2c297b8e8d4548af74efe5e0db46c1"),
                client_secret=os.getenv("e2f0e34379be4977862087d5d16d4a17"),
                show_dialog=True,
                cache_path="token.txt"
            )
        )
        self.user_id = sp.current_user()["id"]
        self.sp = sp

    def spotify_create_play_list(self, title_text_list, year):
        song_list = []
        for title in title_text_list:
            result = self.sp.search(q=f"'track':{title}year:{year}, type='track'")
            try:
                song_track = result['tracks']['items'][0]['uri']
                song_list.append(song_track)
            except IndexError:
                print(f"Title track for {title} not found in Spotify")
        print(song_list)

        # Create play list
        play_list = self.sp.user_playlist_create(self.user_id, "My favourite Playlist", public=False, collaborative=False,
                                                 description="")
        print(play_list)
        self.sp.playlist_add_items(play_list['id'], song_list, None)
        
start = Spotify()
run_app = start.spotify_create_play_list()