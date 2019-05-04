# filter_song.py -> TODO: removes explicit word



# removes whitespaces and uneccesary characters
def stringifyLyric(lyrics):
    # shoudl have done this when doing the actual parsing
    return lyrics.replace('\n', "")



# intent -> make to python string
# input the information to the database 
# make sure to inline all paragraphs as inline block in a div 
# have a button on the left 
# can trigger multiple responses

def split_lyrics(lyrics):
    lyrics_array =  lyrics.split(' ')
    lyrics_len =  len(lyrics_array)
    # find the row size 8/9 words per row 
    row_size = 9 # 9 words per pow 
    lyrics_final = []
    current_row = []
    current_row_string = ""
    count = 0 
    for i in lyrics_array: 
        if count == 9:
            current_row_string = " ".join(current_row)
            lyrics_final.append(current_row)
            current_row_string =  ""
            count = 0
        else:
            count += 1
            # may want to also insert p tags at the end of this string 
            
            current_row.append(i)



