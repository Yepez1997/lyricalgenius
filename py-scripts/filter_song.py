# filter_song.py -> TODO: removes explicit word

# removes whitespaces and uneccesary characters
def stringifyLyric(lyrics):
    # shoudl have done this when doing the actual parsing
    return lyrics.replace('\n', "")


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


def lyrics_join_after_split(lyrics):
    filtered_new_lines_lyrics = stringifyLyric(lyrics)
    return ''.join(split_lyrics(filtered_new_lines_lyrics))





def main():
    some_songs = ['"Down the chimney, he will come With his great big smile And you\'ll find that even the kiddies Are swingin\' in the latest style Oh, oh, oh What is Santa bringing? Oh, oh, oh I wonder whether he\'ll be swingin\'"   It feels so good, it should cost Bought an alligator, I ain\'t talkin\' Lacoste Made me say, "Ooh, uh" Like I\'m mixing Master P and Rick Ross(uh, uh) She seem to make me always feel like a boss(uh, uh) She said I\'m in the wrong hole, I said I\'m lost(uh, uh) She said I\'m goin\' too fast, I\'m exhausted Now drop to your knees for the offerin\'This the theme song, oh somethin\' wrong Might need an intervention for this new dimension That\'s too new to mention, or fit in a sentence If I get locked up, I won\'t finish the sent\\u2014   "Oh, oh, oh What is Santa bringin\'? Oh, oh, oh I wonder whether he\'ll be swingin\'"    Gettin\' loose while I\'m on the deuce, see me roll out What you surf, hit the coast, and this feelin\', I got Plenty of adventures for the evenin\', we go journey, we off From the light to guide us home, we in the moment, oh-oh Such a lost boy, caught up in the darkest I had What\'s the cost, boy? Losin\'everything that I had She been on me, boy, unless you got somethin\' to tell Sittin\', waitin\' for me slippin\', yeah, I\'ll see you in hell Tell the cougar get up off me, no, my soul ain\'t for sale All the evils in the world, they keepin\' on me for real I really hope the Lord won\'t hurt me, we all livein sin Kids see ghost off the ropes, Ric Flair on your bitch Now this the theme song, this the theme song The put the beams on, get your, get your dream on But you don\'t hear me though, drama: we let it go Watch the guitars roll and let your friends know   "Oh, oh, oh What is Santa bringin\'? Oh,oh, oh I wonder whether he\'ll be swingin\'"   "Just do that and then let the music do somethin\', then do that again, that\'d be enough for a record I mean, you only want two and a half minutes if you can get it, you know, three minutes max"',
                "Find my back in the cold Trapped in another soul, they can hear me holler I'm colder than the game See 'em all strapped in an' can't move and I'm sinkin' lower Heaven gonna help me 'Cause I feel the world weighin' on me heavy, tryna keep it steady Ready for the mission God, shine your love on me, save me, please If I'm goin' alone, I've been gone for so long Ain't nobody, you can't hear a word Perched in the night, lookin\\u2019 out nowhere Where's home on this hidden earth? Pain in my eyes, in the time I find, I'm stronger than I ever was Here we go again, God, shine your love on me, save me, please   (Hmm-mm-mm, woah, woah) Stay strong (Hmm-mm-mm, woah, woah) Stay strong (Hmm-mm-mm, woah, woah) Save me, Lord (Hmm-mm-mm, woah, woah) Stay strong (Hmm-mm-mm, woah, woah) Save me, Lord (Hmm-mm-mm, woah, woah) Stay strong (Hmm-mm-mm, woah, woah) Save me, Lord (Hmm-mm-mm, woah, woah)   Everybody want world peace 'Til your niece get shot in the dome-piece Then you go and buy your own piece Hopin' it'll help you find your own peace Bring light to what they don't see Auntie cryin' on the concrete Talkin' to dispatcher then the phone beep On the other line was the homies Told her that you ain't comin' home, see When she heard the news it hurt her bone-deep Caught with the rifle with the long reach Just another cycle of the lonely All growin' up in environment Where doin' crime the requirement They send us off to prison for retirement Hopefully Alice Johnson will inspire men   {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Save me, Lord {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Save me, Lord {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Save me, Lord {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong  {Both sides lose somebody} (Hmm-mm-mm, woah, woah) Save me, Lord {Somebody dies, somebody goes to jail} (Hmm-mm-mm, woah, woah) Stay strong {Light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Lord, shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Stay strong {Shine your light on me, save me, please} (Hmm-mm-mm, woah, woah) Save me, Lord {Shine your light on me} (Hmm-mm-mm, woah, woah) Stay strong ",
                "I can still feel the love I can still feel the love I can still feel the love Feel the love   We not worried 'bout no other niggas, we them other niggas You bust down a Rollie, I bust down a brick, then I flood it, nigga I am not to be compared to you rappers (Eazy-Duz-It) nigga I am more Eazy, you tryin' your best to become me, nigga She like them bottles with bubbles in it Buy her Loewe and other linen Why would I wait when there's other women? Why would I hate? We in love with winnin', ooh Buy her bundles, fly her out, bring her friend, I try her out Ain't no worries findin' out, the details is ironed out Easily they plays along, hopin' that I play a song Love to fuck to trap music(feel the love) (Grrrat-gat-gat-gat-gat) Dope money just came along(woo)   Grrrat-gat(I can still feel the love) Gat-gat, gat, ga-gat-ga-ga-gat Grrrat, gat-gat-gat(I can still feel the love) Gat-gat-gat-gat-gat-gat-gat, grrrat Gat-gat-gat-gat(feel the love) Ga-ga-gat, ga-gat, ga-gat, ga-gat-gat, grrrat  Ba-ba-ba-ba Brrrat-tat-da-da-da, da Ga-ga-ga-ga Brrr-ah-da-da-da, brrr-ah-da-da-da Brrr-ah-da-da-da, brrr-ah-da-da-da Brrr-ah-brrr-ah, brrr-ah-ga-grrrat Rude-rude-rude-rude-woo!  Where the chorus?   I can still feel the love I can still feel the love I can still feel the love Feel the love  Woo!  I can still feel the love I can still feel the love I can still feel the love I can still feel the love I can still feel the love  Ba-ba-ba-ba-ba-ba-ba Ba-ba-ba-ba Rude-rude-rude-rude-woo!",
                "Blast that shit back if you blastin' Ayy  UberX to Hidden Hills, give me somethin' I can feel If they come to Hidden Hills then I know they know the deal We just right there up the road, you could hit it wit' a stone I be out here on my own, I'm just tryna set the tone I've been kicked when I was down, none of that shit matter now Niggas think they run the town 'til we run 'em out of town And they gotta relocate, gotta defend where they stay Everything will be okay, man just stay up out my way  Skit around ends with the bros and I'm kitted to the toes If I touch studio then we got one I be tryna laugh with the bros 'bout the opps that we know But they can't take a joke, 'cause it's not one Think it's 'cause we live by the code, reputation to uphold Makin' me the one they gotta take the spot from I be tryna laugh with the bros but they can't take a joke  Ayo blast that shit back Blast that shit back if you blastin' Yeah, yeah  Back and forth to Italy, my comment section killin' me I swear I get so passionate, y'all do not know the half of it I grew up with the reps, them boys be crashin' it and splashin' in And when I say they crashin' it, I do not mean a accident I'm- I'm still in the studio at 6:45 And my haters either on they way to work or they arrived And I gotta own the things I rap about just for my pride You know when it comes to pride, I can't put that shit aside I've been kicked when I was down, none of that shit matter now They be throwin' in the towel, I do yellowtail Ital They be watchin' what they say, especially when it's to my face Everything will be okay, man just stay up out my way  Skit around ends with the bros and I'm kitted to the toes If I touch studio then we got one I be tryna laugh with the bros 'bout the opps that we know But they can't take a joke, 'cause it's not one Think it's 'cause we live by the code, reputation to uphold Makin' me the one they gotta take the spot from I be tryna laugh with the bros but they can't take a joke   This song tells about Drake's life as a celebrity by mentioning him living in Hidden Hills (a community in California for wealthy residents), hanging out with friends and working hard to get what he wants despite what haters do. ",
                "Baby, baby, baby, baby, baby, baby, baby, yeah No more, no more Baby, baby, baby, baby, baby, baby, baby, ooh Yeah  Niggas see the crib and ask who did I steal from Price tags on making the world feel some They don't have enough to satisfy a real one Maverick Carter couldn't even get the deal done Niggas scared to come towards us, gotta run from us Louisville hush money for my young gunners Rick Pitino, I take them to strip clubs and casinos Stack of c-notes get all you niggas scratched like Preemo Worms, I just opened up a can of those My mother had a flower shop, but I was Sandra's Rose Two girls that I rope like I'm Indiana Jones I make them hoes walk together like I'm Amber Rose Yeah, fuck that I got to up the ante California girls sweeter than pieces of candy Had me all up on a Nipsey hood and go link up with Sammy Type of hood where bandanas make niggas a family Head on a swivel, I could shoot but I could never dribble Life too short I gotta get it 'fore they blow the whistle My uncle tried to change the energy with stones and crystals But it's gonna take more than that for me to control my issues I wasn't made for no casket or no prison cell Every title doing numbers like I'm Miss Adele Sandra knows I pulled us out of a living hell I'm the chosen one, flowers never pick themselves  No more, no more Baby, baby, baby, baby, baby, baby, baby, yeah No more, no more Baby, baby, baby, baby, baby, baby, baby, ooh  Niggas want a classic, that's just ten of these Crime family like the Genovese You don't want drama, capisce? My house is full of supermodels just like Mohamed Hadid I take this shit too serious, you niggas my comic relief I find it funny how I keep on talking and commas increase I'm standing at the top of where you niggas are climbing to reach I even got my very own initials inscribed on my sheets Subtle reminders are key, Gs Spoiler alert: the second act is tragic And everyone that wants the worst for me's asking what happened Backstabbed so many times I started walking backwards Like Charlemagne, I see the light and see the darkest patches Bury me and I'll be born again I walk in godly form amongst the mortal man I got some real demons across the border fence And made a note of the mistakes we can't afford again Like I said, can of worms and I'm the early bird Niggas want to hang but I'm too busy doing dirty work Hit 'em back and say we'll link back on the 33rd When I say that they cursing me, it ain't dirty words Church of Pentecost, Holy Spirit synagogue I don't know who's protecting me but we hit it off Sandra's rose, no wonder they tryna' pick me off I guess you gotta show these niggas who you really are  No more, no more Baby, baby, baby, baby, baby, baby, baby, yeah No more, no more Baby, baby, baby, baby, baby, baby, baby, ooh",
                'They wishin\' on me  I been movin\' calm, don\'t start no trouble with me Tryna keep it peaceful is a struggle for me Don\'t pull up at 6 AM to cuddle with me You know how I like it when you lovin\' on me I don\'t wanna die for them to miss me Yes, I see the things that they wishin\' on me Hope I got some brothers that outlive me They gon\' tell the story, shit was different with me  God\'s plan, God\'s plan I hold back, sometimes I won\'t (yeah) I feel good, sometimes I don\'t, ayy, don\'t I finessed down Weston Road, ayy, \'nessed Might go down a G.O.D., yeah, wait I go hard on Southside G, (yeah, wait) I make sure that north-side eat  And still Bad things It\'s a lot of bad things That they wishin\' and wishin\' and wishin\' and wishin\' They wishin\' on me Bad things It\'s a lot of bad things That they wishin\' and wishin\' and wishin\' and wishin\' They wishin\' on me Yuh, ayy, ayy  She said, "Do you love me?" I tell her, "Only partly" I only love my bed and my momma, I\'m sorry Fifty Dub, I even got it tatted on me 81, they\'ll bring the crashers to the party And you know me Turn the O2 into the O3, dog Without 40, Oli, there would be no me Imagine if I never met the broskies  God\'s plan, God\'s plan I can\'t do this on my own, ayy, no, ayy Someone watchin\' this shit close, yep, close I\'ve been me since Scarlett Road, ayy, road, ayy Might go down as G.O.D., yeah, wait I go hard on Southside G, ayy, wait I make sure that north-side eat And still  Bad things It\'s a lot of bad things That they wishin\' and wishin\' and wishin\' and wishin\' They wishin\' on me Yeah, yeah Bad things It\'s a lot of bad things That they wishin\' and wishin\' and wishin\' and wishin\' They wishin\' on me Yeah ']
    songs_w_p_tags = []
    for i in some_songs:
        songs_w_p_tags.append(lyrics_join_after_split(i))
    return "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&".join(songs_w_p_tags)