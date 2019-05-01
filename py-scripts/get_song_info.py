# python-html-scraping - scapes data from A-Z lyrics.com
# uses python 2 due to compatibility issues with some libraries
from lxml import html
import requests
import pprint

# get_lyric_info - gets an artists song lyrics, artist name, album song is associated with 
def get_song_info(song_url):
    song_info = {}
    # pass in the page here as a higher order function to reduce the number of calls to A-Z lyrics
    page = requests.get(song_url)
    song_info["artist"] = get_song_artist_name(page)
    song_info["song_name"] = get_song_name(song_url)
    song_info["lyrics"] = get_song_lyrics(page)
    return song_info
    
# get_song_artist_name - gets the artist name of the song lyrics
def get_song_artist_name(page):
    tree = html.fromstring(page.content)
    artist = tree.xpath('//div[@class="lyricsh"]/h2/b/text()')[0].split(' ')

    # list comprehensions would be helpful w/ py 3.x 
    artist_name = []
    for i in artist:
        if not i == "Lyrics":
            artist_name.append(i)
    filtered_artist = ' '.join(artist_name)
    return filtered_artist

# get_song_lyrics - gets the song lyrics
def get_song_lyrics(page):
    tree = html.fromstring(page.content)
    song_lyrics = tree.xpath('//div/text()')
    song_lyrics_filtered = []
    for i in song_lyrics:
        if not '\r' in i:
            song_lyrics_filtered.append(i)
    song_lyrics_filtered_joined = ' '.join(song_lyrics_filtered)
    return song_lyrics_filtered_joined.strip()

def get_song_name(song_url):
    song = song_url
    split_song_slash = song.split('/')
    split_last_dot_html = split_song_slash[-1].split('.')[0]
    return split_last_dot_html


# FIXME: change to local state 
# def request_song_info():
#     songs_data = []
#     # want to get them into albums 
#     songs = ["https://www.azlyrics.com/lyrics/nipseyhussle/victorylap.html", "https://www.azlyrics.com/lyrics/50cent/indaclub.html", "https://www.azlyrics.com/lyrics/drake/legend.html",
#     "https://www.azlyrics.com/lyrics/drake/6god.html", "https://www.azlyrics.com/lyrics/eminem/tillicollapse.html", "https://www.azlyrics.com/lyrics/eminem/luckyyou.html", "https://www.azlyrics.com/lyrics/2pac/alleyezonme.html"]
#     for i in songs:
#         songs_data.append(get_song_info(i))
#     return songs_data
# # nipsey_hussle_victory_lap = get_lyric_info("https://www.azlyrics.com/lyrics/nipseyhussle/victorylap.html")
# pprint.pprint(request_song_info()) # should print out a hash 

#print(nipsey_hussle_victory_lap)
#print(song_lyrics)
# specify urls -> get all urls and input that information to a list of dictionaries 
# make at least 5 albums for seeds data 
# want a list of albums 
# 50 cent Get Rich Or Die Trying 
# Nipsey Hussle Victory Lap
# Drake Scorpion
# Kendrick Section 80
# Enimen The Eminem Show 
# 2pac All Eyes on me 
# maybe it may be smart to have the album imaage 
# want to get 3 albums as initial seed data
# want to convert this data to json

def kids_see_ghosts():
    kids_see_ghosts_songs = {
        "Feel The Love": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/feelthelove.html"),
        "Fire": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/fire.html"),
        "4th Dimension": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/4thdimension.html"),
        "Free": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/freeeeghosttownpt2.html"),
        "Kids See Ghosts": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/kidsseeghosts.html"),
        "Reborn":  get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/reborn.html"),
        "Cudi Montage": get_song_info("https://www.azlyrics.com/lyrics/kidsseeghosts/cudimontage.html")
    }

    # FIXME: CAN MAKE MORE DRY ONCE FINISHED 
    kids_see_ghosts_album = {}
    kids_see_ghosts_album["Album Songs"] = kids_see_ghosts_songs
    kids_see_ghosts_album["Artist"] = "Kids See Ghost"
    kids_see_ghosts_album["Album Name"] = "Kids See Ghost" 
    return kids_see_ghosts_album

def get_rich_or_die_trying():

    return 0

def victory_lap():
    victory_lap_songs = {
        "Victory Lap (feat. Stacy Barthe)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/victorylap.html"),
        "Last Time That I Checc'd (feat. YG)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/lasttimethaticheccd.html"),
        "Dedication (feat. Kendrick Lamar)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/dedication.html"),
        "Blue Laces 2": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/bluelaces2.html"),
        "Hussle & Motivate": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/husslemotivate.html"),
        "Status Symbol 3 (feat. Buddy)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/statussymbol3.html"),
        "Succa Proof (feat. Konshen & JBlack)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/succaproof.html"),
        "Key To The City (feat. Teeflii)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/keyz2thecity2.html"),
        "Grinding All My Life": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/grindinallmylife.html"),
        "Million While The Young (feat. The-Dream)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/millionwhileyouyoung.html"),
        "Loaded Bases (feat. CeeLoo Green)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/loadedbases.html"),
        "Real Big (feat. Marsha Ambrosius)": get_song_info("https://www.azlyrics.com/lyrics/nipseyhussle/realbig.html")
    }
    victory_lap_album = {}
    victory_lap_album["Album Songs"] = victory_lap_songs
    victory_lap_album["Artist"] = "Nipsey Hussle"
    victory_lap_album["Album Name"] = "Victory Lap" 
    return victory_lap_album

def scorpion():
    scorpion_songs = {
        "Survival": get_song_info("https://www.azlyrics.com/lyrics/drake/survival.html"),
        "Nonstop": get_song_info("https://www.azlyrics.com/lyrics/drake/survival.html"),
        "Elevate": get_song_info("https://www.azlyrics.com/lyrics/drake/elevate.html"),
        "Emotionless": get_song_info("https://www.azlyrics.com/lyrics/drake/emotionless.html"),
        "God's Plan": get_song_info("https://www.azlyrics.com/lyrics/drake/godsplan.html"),
        "I'm Upset": get_song_info("https://www.azlyrics.com/lyrics/drake/imupset.html"),
        "8 Out Of 10": get_song_info("https://www.azlyrics.com/lyrics/drake/8outof10.html"),
        "Mob Ties": get_song_info("https://www.azlyrics.com/lyrics/drake/mobties.html"),
        "Can't Take a Joke": get_song_info("https://www.azlyrics.com/lyrics/drake/canttakeajoke.html"),
        "Sandra's Rose": get_song_info("https://www.azlyrics.com/lyrics/drake/sandrasrose.html"),
        "Talk Up (feat Jay-Z)": get_song_info("https://www.azlyrics.com/lyrics/drake/talkup.html"),
        "Is There More": get_song_info("https://www.azlyrics.com/lyrics/drake/istheremore.html"),
        "Peak": get_song_info("https://www.azlyrics.com/lyrics/drake/peak.html"),
        "Summer Games": get_song_info("https://www.azlyrics.com/lyrics/drake/summergames.html"),
        "Jaded": get_song_info("https://www.azlyrics.com/lyrics/drake/jaded.html"),
        "Finesse": get_song_info("https://www.azlyrics.com/lyrics/drake/finesse.html"),
        "Nice For What":  get_song_info("https://www.azlyrics.com/lyrics/drake/niceforwhat.html"),
        "Ratchet Happy Birthday": get_song_info("https://www.azlyrics.com/lyrics/drake/ratchethappybirthday.html"),
        "That's How You Feel": get_song_info("https://www.azlyrics.com/lyrics/drake/thatshowyoufeel.html"),
        "Blue Tint": get_song_info("https://www.azlyrics.com/lyrics/drake/bluetint.html"),
        "In My Feelings": get_song_info("https://www.azlyrics.com/lyrics/drake/inmyfeelings.html"),
        "Don't Matter To Me": get_song_info("https://www.azlyrics.com/lyrics/drake/dontmattertome.html"),
        "After Dark": get_song_info("https://www.azlyrics.com/lyrics/drake/afterdark.html"),
        "Final Fantasy": get_song_info("https://www.azlyrics.com/lyrics/drake/finalfantasy.html"),
        "March 14th": get_song_info("https://www.azlyrics.com/lyrics/drake/march14.html") 

    }
    scorpion_album = {}
    scorpion_album["Album Songs"] = scorpion_songs
    scorpion_album["Artist"] = "Drake"
    scorpion_album["Album Name"] = "Scorpion" 
    return scorpion_album


pp = pprint.PrettyPrinter(depth=6)
pp.pprint(victory_lap())