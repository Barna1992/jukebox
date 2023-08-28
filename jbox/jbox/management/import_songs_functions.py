def get_value_genre(genre):
    CHOICES = (
        ('BA', 'da ballare'),
        ('CA', 'da cantare'),
        ('RO', 'romantiche'),
        ('MO', 'dal mondo'),
        ('LU', 'per lui'),
        ('LE', 'per lei'),
        ('OR', 'on the road'),
    )

    for value, label in CHOICES:
        if label == genre:
            return value

def import_songs(filename):
    from music.models import Song

    with open(filename, 'r') as csv_file:
            for row in csv_file:
                # Process each row as needed
                genre, title, author = row.strip().split(',')
                print(get_value_genre(genre.lower()), title, author)
                Song.objects.create(title=title, author=author, music_type=get_value_genre(genre.lower()))

