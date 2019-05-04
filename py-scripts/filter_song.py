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


def get_left_over_lyrics(lyrics_array, columns):
    rest_lyrics = (columns * 9)
    return lyrics_add_p_tags(" ".join(lyrics_array[rest_lyrics:]))
    

def split_lyrics(lyrics):
    lyrics_array =  lyrics.split(' ')
    lyrics_len =  len(lyrics_array)
    # find the row size 8/9 words per row 
    #row_size = 9 # 9 words per pow 
    lyrics_final = []
    current_row = []
    columns =  lyrics_len / 9; 
    current_row_string = ""
    count = 0 
    # never gets the left overs so check for them 
    # if i is in between len - 8 
    for i in range(len(lyrics_array)): 
        count += 1
        if count == 9:
            current_row.append(lyrics_array[i])
            current_row_string = " ".join(current_row)
            # appending the proper lyric row 
            lyrics_final.append(lyrics_add_p_tags(current_row_string))
            current_row_string =  ""
            current_row = []
            count = 0
            #count += 1
        else:
            # may want to also insert p tags at the end of this string
            current_row.append(lyrics_array[i])
    # get the last once done parsing og rounding
    lyrics_final.append(get_left_over_lyrics(lyrics_array, columns))
    return lyrics_final


# this script will be super useful in seperating in rows 
# once the rows are presennt can set an a tag around the lyric 
def lyrics_add_p_tags(lyric_row):
    p_tag = "<p>"
    closing_p_tag = "</p>"
    p_tag_lyric = p_tag + lyric_row + closing_p_tag
    return p_tag_lyric
